Meteor.publish('collaboration', function() {
  if(canViewById(this.userId)){
    return Collaboration.find();
  }
  return [];
});

