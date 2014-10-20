Package.describe({summary: "MedBook CRFs package"});

Package.onUse(function (api) {

  api.use(["mrt:jquery-hotkeys","mrt:jquery-ui", "mrt:jquery-ui-bootstrap",'telescope-base', 'telescope-theme-hubble', 'templating'], ['client']);

  api.use(['telescope-lib', 'telescope-base', 'aldeed:simple-schema'], ['client', 'server']);



  api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating'
  ], 'client');


  api.add_files([

    'lib/client/stylesheets/screen.css',
    'lib/client/templates/main.html',
    'lib/client/medbook.js',

    'lib/client/routes.js',
    ], ['client']);

  api.add_files(['lib/server/publications.js'], ['server']);
 
  api.export(['preloadSubscriptions', 'adminNav', 'addToPostSchema', 'primaryNav', 'postModules']);
});
