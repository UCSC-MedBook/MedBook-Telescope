Meteor.startup( 
    function () {
        Template[getTemplate('collaborationGrid')].helpers({
            collaboration: function(){
                return Collaboration.find({}, {sort: {order: 1, name: 1}});
            },
            collaborationItem: function () {
                return getTemplate('collaborationItem');
            }
        });

        Template[getTemplate('collaborationGrid')].events( {
            'click input[type=submit]': 
                function(e) {
                    e.preventDefault();
                    var name = $('#name').val();
                    var slug = slugify(name);

                    Meteor.call('createCollaborationMethod',
                            {
                                name: name,
                                slug: slug
                            }, 
                            function (error, collaborationName) {
                                if (error) {
                                    console.log(error);
                                    throwError(error.reason);
                                    clearSeenErrors();
                                } else {
                                    $('#name').val('');
                                    // throwError('New collaboration "'+collaborationName+'" created');
                                }
                            }
                    );

                }
            });
    }
);
