postSchemaObject = {
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  postedAt: {
    type: Date,
    optional: true
  },    
  title: {
    type: String,
    label: "Title"
  },
  url: {
    type: String,
    label: "URL",
    optional: true
  },
  body: {
    type: String,
    optional: true
  },
  htmlBody: {
    type: String,
    optional: true
  },
  commentsCount: {
    type: Number,
    optional: true
  },
  commenters: {
    type: [String],
    optional: true
  },
  lastCommentedAt: {
    type: Date,
    optional: true
  },
  clicks: {
    type: Number,
    optional: true
  },
  baseScore: {
    type: Number,
    decimal: true,
    optional: true
  },
  upvotes: {
    type: Number,
    optional: true
  },
  upvoters: {
    type: [String], // XXX
    optional: true
  },
  downvotes: {
    type: Number,
    optional: true
  },
  downvoters: {
    type: [String], // XXX
    optional: true
  },
  score: {
    type: Number,
    decimal: true,
    optional: true
  },
  status: {
    type: Number,
    optional: true
  },
  sticky: {
    type: Boolean,
    optional: true
  },
  inactive: {
    type: Boolean,
    optional: true
  },
  userId: {
    type: String, // XXX
    optional: true
  },
  files: {
    type: [String], // XXX
    optional: true
  },
};

// add any extra properties to postSchemaObject (provided by packages for example)
_.each(addToPostSchema, function(item){
  postSchemaObject[item.propertyName] = item.propertySchema;
});

Posts = new Meteor.Collection("posts");

PostSchema = new SimpleSchema(postSchemaObject);
Posts.attachSchema(PostSchema);

STATUS_PENDING=1;
STATUS_APPROVED=2;
STATUS_REJECTED=3;

Posts.deny({
  update: function(userId, post, fieldNames) {
    if(isAdminById(userId))
      return false;
    // deny the update if it contains something other than the following fields
    return (_.without(fieldNames, 'title', 'url', 'body', 'shortUrl', 'shortTitle', 'categories').length > 0);
  }
});

Posts.allow({
  update: canEditById,
  remove: canEditById
});

clickedPosts = [];

getPostProperties = function(post) {

  var postAuthor = Meteor.users.findOne(post.userId);
  var p = {
    postAuthorName : getDisplayName(postAuthor),
    postTitle : cleanUp(post.title),
    profileUrl: getProfileUrlById(post.userId),
    postUrl: getPostPageUrl(post),
    thumbnailUrl: post.thumbnailUrl,
    linkUrl: !!post.url ? getOutgoingUrl(post.url) : getPostPageUrl(post._id)
  };
  
  if(post.url)
    p.url = post.url;

  if(post.htmlBody)
    p.htmlBody = post.htmlBody;

  return p;
};

getPostPageUrl = function(post){
  return getSiteUrl()+'posts/'+post._id;
};

getPostEditUrl = function(id){
  return getSiteUrl()+'posts/'+id+'/edit';
};

// for a given post, return its link if it has one, or else its post page URL
getPostLink = function (post) {
  return !!post.url ? getOutgoingUrl(post.url) : getPostPageUrl(post);
};

Posts.before.insert(function (userId, doc) {
  if(Meteor.isServer && !!doc.body)
    doc.htmlBody = sanitize(marked(doc.body));
});

Posts.before.update(function (userId, doc, fieldNames, modifier, options) {
  // if body is being modified, update htmlBody too
  if (Meteor.isServer && modifier.$set && modifier.$set.body) {
    modifier.$set = modifier.$set || {};
    modifier.$set.htmlBody = sanitize(marked(modifier.$set.body));
  }
});

