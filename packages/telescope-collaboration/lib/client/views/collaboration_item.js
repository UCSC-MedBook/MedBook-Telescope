Meteor.startup(function () {
  Template[getTemplate('collaborationItem')].events({
    'click .edit-link': function(e, instance){
      e.preventDefault();
      var collaborationId = instance.data._id;
      var name = $('#name_'+collaborationId).val();
      var collaborations = $('#order_'+collaborationId).val().split();
      var slug = slugify(name);
      if(name){
        Collaboration.update(collaborationId,{ $set: {name: name, slug: slug, collaborations: collaborations}});
      }else{
        Collaboration.remove(collaborationId);
      }
      Meteor.call('updateCollaborationInPosts', collaborationId, function(error) {
        if (error) {
          throwError(error.reason);
        }
      });
    }
  });

  Template[getTemplate('collaborationItem')].helpers({
    currentDoc: function () {
      var col = Collaboration.findOne({_id: this._id});
      console.log("currentDoc", col);
      return col;
    },

    fieldOrder: function() {
      return ["name","description","collaborators","administrators"];
    }
  });

  AutoForm.hooks({
    collaborationUpdate: {
      // Called when form does not have a `type` attribute
      onSubmit: function (insertDoc, updateDoc, currentDoc) {
        Meteor.call('updateCollaboration', insertDoc)
      }
    }

  });
});
