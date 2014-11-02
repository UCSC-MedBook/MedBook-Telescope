Meteor.publish('collaboration', function() {
  if(canViewById(this.userId)){
    return Collaboration.find();
  }
  return [];
});



addToPostSchema.push(
    {
        propertyName: 'collaborations',
        propertySchema: {
            type: [String],
            optional: true
        }
    }
);


Meteor.methods({
  addCollaboratorToCollaboration : function(params) {
      console.log("addCollaboratorToCollaboration method")
    var ret = Posts.update({_id: params.post_id}, {$addToSet: {collaborations: params.collaboration_name} }, function foo(err) {
          console.log("addCollaboratorToCollaboration Posts update params,err=", params, err);
        }
    );
  },
  createCollaboration : function(bundle) { }
  }
);


