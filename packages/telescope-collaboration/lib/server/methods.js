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

});

