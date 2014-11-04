Template[getTemplate('postHeading')].helpers({
    postHeading: function () {
        return postHeading;
    },
    getTemplate: function () {
        return getTemplate(this.template);
    },
});

Template[getTemplate('postHeading')].events({
});