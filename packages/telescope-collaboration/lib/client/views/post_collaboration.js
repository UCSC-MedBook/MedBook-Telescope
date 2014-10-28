Meteor.startup(function () {
  Template[getTemplate('postCollaboration')].helpers({
    collaborationLink: function(){
      return getCollaborationUrl(this.slug);
    }
  });
});