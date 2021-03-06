Package.describe({summary: "MedBook Collaboration   package"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base', 'aldeed:simple-schema', 'telescope-theme-hubble'], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating'
  ], 'client');

  api.add_files(['lib/collaboration.js'], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/collaboration.css',
    'lib/client/views/collaboration.html',
    'lib/client/views/collaboration.js',
    'lib/client/views/collaboration_item.css',
    'lib/client/views/collaboration_item.html',
    'lib/client/views/collaboration_item.js',
    'lib/client/views/collaboration_menu.html',
    'lib/client/views/collaboration_menu.js',
    'lib/client/views/post_collaboration.html',
    'lib/client/views/post_collaboration.css',
    'lib/client/views/post_collaboration.js'
  ], ['client']);

  api.add_files(['lib/server/publications.js', 'lib/server/methods.js'], ['server']);
 
  api.export(['addCollaborator', 'Collaboration', 'show', 'hide', 'createCollaboration', 'collaborationSchema']);
});
