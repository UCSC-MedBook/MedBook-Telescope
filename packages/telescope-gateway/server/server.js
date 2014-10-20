


Meteor.methods( {
        
  'MedBookPermissions': function(frob) {
      console.log('MedBookPermissions called', frob);
      if (this.userId)
          return "admin galaxy cbioportal"; // this needs to be smarter
      else
          return "NONE"
  }
});

