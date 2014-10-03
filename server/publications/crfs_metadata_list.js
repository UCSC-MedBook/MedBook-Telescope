// Publish a list of crf schema

Meteor.publish('crfsList', function(terms) {
    var parameters = getParameters(terms),
        crfs = CRFmetadataCollection.find(parameters.find, parameters.options);

    // console.log('//-------- Subscription Parameters:');
    // console.log(parameters.find);
    // console.log(parameters.options);
    // console.log('Found '+crfs.fetch().length+ ' crfs:');
    // crfs.rewind();
    // console.log(_.pluck(crfs.fetch(), 'title'));
    return crfs;
});

