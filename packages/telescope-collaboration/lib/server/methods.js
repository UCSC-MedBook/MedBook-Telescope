function MedBookPost(post) {
    // ------------------------------ Properties ------------------------------ //

    // Basic Properties

    console.log("MedBookPost");

    // ------------------------------ Insert Post ----------------------- //
    post._id = Posts.insert(post);

    // ------------------------------ MedBook Post Files ----------------------- //
    if (post.files && post.files.length >0)
        for (var i = 0; i < post.files.length; i++)  {
            var fid = post.files[i];
            FileUploadCollection.update({"_id": new Meteor.Collection.ObjectID(fid)}, { "$set" : { "postId" : post._id } })
        }


    // ------------------------------ Callbacks ------------------------------ //

    // run all post submit server callbacks on post object successively
    post = postAfterSubmitMethodCallbacks.reduce(function(result, currentFunction) {
        return currentFunction(result);
    }, post);

    // ------------------------------ Post-Insert ------------------------------ //

    // increment posts count
    Meteor.users.update({_id: userId}, {$inc: {postCount: 1}});
    var postAuthor =  Meteor.users.findOne(post.userId);
    Meteor.call('upvotePost', post, postAuthor);
    return post;
}


Meteor.startup(function () {

  Meteor.methods({
    createCollaborationMethod: function(collaboration){
              console.log(collaboration)
              if (!Meteor.user() || !isAdmin(Meteor.user()))
                  throw new Meteor.Error(i18n.t('You need to login and be an admin to add a new collaboration.'));

              Collaboration.insert(collaboration);
              return collaboration.name;
          },
    joinCollaborationMethod: function(collaboration_id) {
          console.log("joinCollaborationMethod")
          var ad = Meteor.user().emails[0].address;
          Collaboration.update({_id: collaboration_id}, { $addToSet: { collaborators: ad, administrators:ad }}, function (err, err2){
                  console.log("joinCollaborationMethod Collaboration.update", collaboration_id, ad, err, err2)
              }
          );

      },
    leaveCollaborationMethod: function(collaboration_id) {
        console.log("joinCollaborationMethod")
        var ad = Meteor.user().emails[0].address;
        Collaboration.update({_id: collaboration_id}, { $pull: { collaborators: ad, administrators:ad  }}, function (err, err2){
              console.log("joinCollaborationMethod Collaboration.update", collaboration_id, ad, err, err2)
          }
    );

          },

  });
  HTTP.methods({
    medbookPost: function(post){
        var user  = Meteor.users.findOne();
        post.userId   = user._id;
        post.sticky   = false;
        post.status   = STATUS_APPROVED;
        post.postedAt = new Date(), 
        MedBookPost(post);
       return "MedBook post";
     }
  });
});

