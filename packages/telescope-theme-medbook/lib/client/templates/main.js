Template.MedBookMainPage.crfs = function () {
      return CRFmetadataCollection.find({}).map(function (x){
            x.id=x.collection;
            x.type="insert";
            return x;
      });
};

window.change_crf_form_selection = function () {
    $(".crf_form").hide();
    var formElementName = $("#crf_form_selection").val(); 
    $("#" + formElementName).show();
    var collectionName = formElementName.replace(/Element$/,'');
    HOTload(collectionName);
    
}

function HOTrefresh(query) {
    var data = [];
    query.forEach( function(x) { data.push(x) });
    $('.hotdiv').handsontable("loadData", data);
}

function HOTload(collectionName) {
    var collection = eval(collectionName);
    if (collection == null)
        return;
    var query = collection.find()
    var handle = query.observeChanges({
      added: function (id, fields) { 
         HOTrefresh(query);
     },
     changed: function (id, fields) { 
         HOTrefresh(query);
     }
    });
    var settings = { };
    setHOTsettingsFromSchema(settings, collectionName)
    $('.hotdiv').handsontable(settings);
    HOTrefresh(query);
}

function setHOTsettingsFromSchema(settings, collectionName) {
    var order = MetadataPreferredFieldOrder[collectionName];
    var schema = MetadataPrototype[collectionName]; 
    var columns = [];
    var colHeaders = [];

    for (var i = 0; i < order.length; i++) {
        var fieldName = order[i];
        var field = schema[fieldName];
        colHeaders.push(field.label);
        var HOTcolumn = {
            readOnly : true,
            data : fieldName,
            type: 'numeric',
            format: '0,0.00'
        };
        columns.push(HOTcolumn);
    }

    if (columns.length > 0) {
        settings.columns = columns;
        settings.colHeaders = colHeaders;
    }
}

