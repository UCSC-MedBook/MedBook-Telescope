
createCollaboration = function (pack) {
  var slug = slugify(pack.name);
  pack.slug = slug;
  var yy = ["collaborators", "administrators", "invitations", "applications"];
  for (var i in  yy) {
    var x = yy[i];
    if (typeof(pack[x]) == "string")
      pack[x] = pack[x].split(",").map(function (s) {
        return s.trim()
      }).filter(function(n){ return n.length > 0});
  }
  var ad = Meteor.user().emails[0].address;
  if (pack.administrators.indexOf(ad) <= 0) pack.administrators.push(ad);
  if (pack.collaborators.indexOf(ad) <= 0) pack.collaborators.push(ad);


  Meteor.call('createCollaborationMethod',
      pack,
      function (error, collaborationName) {
        if (error) {
          console.log(error);
          throwError(error.reason);
          clearSeenErrors();
        } else {
        }
      });
}

addCollaborator = function(e, i) {
  if (event.which === 27 || event.which === 13) {
    e.preventDefault();
    e.target.blur();

    var collaboration_name = e.currentTarget.value;
    var post_id = this._id;

    addCollaborator

    var exists = Collaboration.findOne({name: collaboration_name});
    if (!exists) {
      if (confirm("The " + collaboration_name + " does not exist, do you want to create the "+ collaboration_name +" collaboration?"))
        createCollaboration(collaboration_name);
      else
        return;
    }

      Meteor.call('addCollaboratorToCollaboration', {
        collaboration_name: collaboration_name,
        post_id: post_id
      }, function(error, categoryName) {
        if (error){
          console.log(error);
          throwError(error.reason);
          clearSeenErrors();
        } else {
          e.currentTarget.value = "";
          // throwError('New category "'+categoryName+'" created');
        }
      });
    } else {
      AutoCompletion.autocomplete({                                                                                    // 29
        element: '#addCollaborators',       // DOM identifier for the element                                // 30
        collection: Collaboration,              // MeteorJS collection object                                          // 31
        field: 'name',                    // Document field name to search for                                         // 32
        limit: 100,                         // Max number of elements to show                                          // 33
        sort: { name: 1 }});              // Sort object to filter results with                                        // 34
      //filter: { 'gender': 'female' }; // Additional filtering                                                      // 35
    }
};


Meteor.startup(function () {
  Template[getTemplate('postCollaboration')].helpers({


    collaborationLink: function(){
      console.log("postCollabration collaborationLink", this)
      var col = Collaboration.findOne({name: String(this)});
      return "/collaboration/"+col.slug;
    },
    collaborationName: function(){
      console.log("this=", this)
      return this;
    }

  });

  Template[getTemplate('postCollaboration')].rendered = function() {                                                   // 3
    AutoCompletion.init('input[id="addCollaborators"]')                                                                 // 4
  };                                                                                                                   // 5


  Template[getTemplate('postCollaboration')].events({
    'keyup input[id="addCollaborators"]' : addCollaborator

  });
});
