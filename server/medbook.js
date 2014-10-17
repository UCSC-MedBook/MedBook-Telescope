Meteor.methods({
  MedBookPermissons: function () {
     if (this.userId)
          return "galaxy cbioportal";
     else
          return "";
  },

});
