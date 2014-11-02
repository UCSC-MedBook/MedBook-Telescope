Meteor.startup(function () {


  Template[getTemplate('AddCollaboration')].rendered = function() {
    AutoCompletion.init('input[name="collaborators"]')
  };



  Template[getTemplate('AddCollaboration')].events({
    'click .edit-link': function (e, tmpl) {
      e.preventDefault();

      var pack = {
        name: (tmpl.find(".collaboration-name").value),
        description: (tmpl.find(".collaboration-description").value),
        collaborators: (tmpl.find(".collaboration-collaborators").value),
        administrators: (tmpl.find(".collaboration-administrators").value),
        invitations: (tmpl.find(".collaboration-invitations").value),
        applications: []
      };

      createCollaboration(pack);
      tmpl.find("form").reset();
    }
  });

});
