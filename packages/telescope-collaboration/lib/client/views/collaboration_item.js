Meteor.startup(function () {

  Template[getTemplate('collaborationItem')].rendered = function() {
    AutoCompletion.init('input[name="collaborators"]')
  };


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

});
