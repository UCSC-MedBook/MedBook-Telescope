FileUploadCollection = FileCollection({
   resumable: true,     // Enable the resumable.js compatible chunked file upload interface
   http: [ { method: 'get', path: '/:md5', lookup: function (params, query)  {return { md5: params.md5 }}}]
   // Define a GET API that uses the md5 sum id files
})
