Package.on_use(function (api) {

  api.use(["revolutionlabs:user-login-state", "benjaminrh:jquery-cookie"], ['client']);

  api.add_files(['./client/medbookperms.js'], ['client']);
  api.add_files(['./server/server.js'], ['server']);
});




