SampleGroups = new Mongo.Collection("sampleGroup");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("selectedDatasetId", "G3azHfDnMhXm9oAaZ");

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.start.events({
    'click button.scv': function () {
      Datasets.update(Session.get("selectedDatasetId"), {$inc: {score: 5}});
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
  Template.updateDatasetsForm.helpers({
    editingDataset: function editingDatasetHelper() {
      return Datasets.findOne({_id: Session.get("selectedDatasetId")});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

