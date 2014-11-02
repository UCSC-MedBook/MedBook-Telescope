Meteor.startup(function () {

  Template[getTemplate('AddCollaboration')].rendered = function() {
    AutoCompletion.init('input[name="collaborators"]')
  };



  Template[getTemplate('AddCollaboration')].events({
    'click .edit-link': function(e, tmpl) {
      e.preventDefault();

      var pack = {
          name : (tmpl.find(".collaboration-name").value),
          description : (tmpl.find(".collaboration-description").value),
          collaborators : (tmpl.find(".collaboration-collaborators").value),
          administrators : (tmpl.find(".collaboration-administrators").value),
          invitations :    (tmpl.find(".collaboration-invitations").value),
          applications : []
      };

      createCollaboration(pack);
      tmpl.find("form").reset();
    },


    'keyup input[name="collaborators"]': function () {
      AutoCompletion.autocomplete({
        element: 'input[name="collaborators"]',       // DOM identifier for the element
        collection: Collaboration,              // MeteorJS collection object
        field: 'name',                    // Document field name to search for
        limit: 100,                         // Max number of elements to show
        sort: { name: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
    }
  });

  Template[getTemplate('AddCollaboration')].helpers({
    currentDoc: function () {
      var col = Collaboration.findOne({_id: this._id});
      console.log("currentDoc", col);
      return col;
    },

    fieldOrder: function() {
      return ["name","description","collaborators","administrators"];
    }
  });

});
