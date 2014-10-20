   Meteor.startup(function () {
     console.log("gateway Meteor startup");

     UserLoginState.init(); 

     UserLoginState.onLogin = function () {
        console.log("User logged in");
        Meteor.call("MedBookPermissions", function(err, perms) {

           $.cookie("MedBookPermissions", perms,  {
               expires : 10           //expires in 10 days
            });
        });
     };

     UserLoginState.onLogout = function () {
        $.removeCookie('MedBookPermissions')
        console.log("User logged out");
     }
  });


