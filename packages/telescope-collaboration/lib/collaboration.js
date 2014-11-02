
collaborationSchema = new SimpleSchema({
   _id: {
      type: String,
      optional: true
    },
    slug: {
      type: String,
        optional: true
    },
    name: {
      type: String,
        optional: true
    },

    description: {
        type: String,
        optional: true
    },
    users: {
        type:String,
        optional: true
    },
    collaborators: {
        type:String,
        optional: true
    },
    administrators: {
        type:String,
        optional: true
    }

});

Collaboration = new Meteor.Collection("collaboration", {
 // schema: collaborationSchema
});

// Collaboration.attachSchema(collaborationSchema);


// collaboration post list parameters
viewParameters.collaboration = function (terms) {
  return {
    find: {'collaborations': terms.collaboration},
    options: {sort: {sticky: -1, score: -1}}
  };
}

// push "collaboration" modules to postHeading
postHeading.push({
  template: 'collaborationTagList',
  order: 3
});
  
// push "collaborationMenu" template to primaryNav
primaryNav.push('collaborationMenu');

// push "collaboration" property to addToPostSchema, so that it's later added to postSchema
addToPostSchema.push(
  {
    propertyName: 'collaborations',
    propertySchema: {
      optional: true,
      type: [String]
    }
  }
);

var getCheckedCollaboration = function (properties) {
  properties.collaboration = [];
  $('input[name=collaboration]:checked').each(function() {
    var collaborationId = $(this).val();
    properties.collaboration.push(Collaboration.findOne(collaborationId));
  });
  return properties;
}

postSubmitClientCallbacks.push(getCheckedCollaboration);
postEditClientCallbacks.push(getCheckedCollaboration);

Meteor.startup(function () {
  Collaboration.allow({
    insert: isAdminById
  , update: isAdminById
  , remove: isAdminById
  });

});

getCollaborationUrl = function(slug){
  return getSiteUrl()+'collaboration/'+slug;
};


