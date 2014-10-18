
Meteor.startup () ->


  # Only publish files owned by this userId, and ignore temp file chunks used by resumable
  Meteor.publish 'FileUploadCollection', (clientUserId) ->

     # This prevents a race condition on the client between Meteor.userId() and subscriptions to this publish
     # See: https://stackoverflow.com/questions/24445404/how-to-prevent-a-client-reactive-race-between-meteor-userid-and-a-subscription/24460877#24460877
     if this.userId is clientUserId
        vv = FileUploadCollection.find(
            { 
                'metadata._Resumable': { $exists: false },
                'metadata._auth.owner': this.userId ,
                'postId' : {$exists: false }
            })
        console.log "file published", vv
        return vv
     else
        return []

  # Don't allow users to modify the user docs
  Meteor.users.deny({update: () -> true })

  # Allow rules for security. Without these, no writes would be allowed by default
  FileUploadCollection.allow
     insert: (userId, file) ->
        # Assign the proper owner when a file is created
        file.metadata = file.metadata ? {}
        file.metadata._auth =
           owner: userId
        true
     remove: (userId, file) ->
        # Only owners can delete
        if file.metadata?._auth?.owner and userId isnt file.metadata._auth.owner
           return false
        true
     read: (userId, file) ->
        # Only owners can GET file data
        #if file.metadata?._auth?.owner and userId isnt file.metadata._auth.owner
        #   return false
        true
     write: (userId, file, fields) -> # This is for the HTTP REST interfaces PUT/POST
        # All client file metadata updates are denied, implement Methods for that...
        # Only owners can upload a file
        if file.metadata?._auth?.owner and userId isnt file.metadata._auth.owner
           return false
        true
