
// this needs to be parameterized by study somehow.
function crf_ids() {
    var s = [];
    for (var i = 1; i <= 300; i++)
        s.push("DTB-" + ("00" + i).slice(-3))
    return s;
}
    
clinicalReportFormSchemaObject = SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
});


CRFs = {};

CRFs['PatientEnrollmentform']=({
    "Baseline_Biopsy_Date": {
//        "capturetime": false,
        "label": "Baseline Biopsy Date",
        type: Date
    }
    ,

    "Baseline_Biopsy_Site": {
        "allowedValues": [
            "Bone",
            "Liver",
            "Lymph Node",
            "Adrenal lesion",
            "Seminal Vesicle mass",
            "spinal mass",
            "Lung",
            "Bladder mass"
        ],
        "label": "Baseline Biopsy Site",
        "max": 200,
        type: String
    },
    "Institution": {
        "allowedValues": [
            "UCSF",
            "OHSU",
            "UCLA",
            "UCD",
            "UBC",
            "LAVA"
        ],
        "label": "Institution",
        "max": 200,
        type: String
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    }
} );
CRFs['TissueSpecimenform_Specimens']=({
    "Box_ID": {
        "label": "Box ID",
        type: String
    },
    "Core_Notes": {
        "label": "Core Notes",
        type: String
    },
    "Freezer": {
        "allowedValues": [
            "LN2",
            "UCD",
            "UCSF MTZ",
            "UBC",
            "UCLA",
            "LAVA",
            "OHSU"
        ],
        "label": "Freezer",
        "max": 200,
        type: String
    },
    "Tissue_Preparation": {
        "allowedValues": [
            "Frozen",
            "Fixed"
        ],
        "label": "Tissue Preparation",
        "max": 200,
        type: String
    },
    "core": {
        "allowedValues": [
            "A",
            "B",
            "C",
            "D",
            "E ",
            "F",
            "G",
            "N/A"
        ],
        "label": "core",
        "max": 200,
        type: String
    }
} );
CRFs['TissueSpecimenform']=({
    "Attending_Radiologist": {
        "label": "Attending Radiologist",
        type: String
    },
    "Biopsy_Site": {
        "allowedValues": [
            "Bone",
            "Liver",
            "Lymph Node",
            "Adrenal lesion",
            "Seminal Vesicle mass",
            "spinal mass",
            "Lung",
            "Bladder mass"
        ],
        "label": "Biopsy Site",
        "max": 200,
        type: String
    },
    "CRC_at_Collection": {
        "label": "CRC at Collection",
        type: String
    },
    "Procedure_Date": {
//        "capturetime": true,
        "label": "Procedure Date",
        type: Date
    },
    "Procedure_Site": {
        "allowedValues": [
            "UCSF",
            "OHSU",
            "UCLA",
            "UCD",
            "UBC",
            "LAVA",
            "UCSF PAR"
        ],
        "label": "Procedure Site",
        "max": 200,
        type: String
    },
    "Specimens": {
        "label": "Specimens",
        type: [CRFs["Tissue_Specimen_form_Specimens"]] // subdocument
    },
    "Timepoint": {
        "allowedValues": [
            "Baseline",
            "First Progression",
            "Second Progression",
            "Discontinuity Progression"
        ],
        "label": "Timepoint",
        "max": 200,
        type: String
    }
} );
CRFs['BloodSpecimenform']=({
    "CRC_at_Collection": {
        "label": "CRC at Collection",
        type: String
    },
    "Draw_Date_and_Time": {
//        "capturetime": true,
        "label": "Draw Date and Time",
        type: Date
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    },
    "Procedure_Site": {
        "allowedValues": [
            "UCSF",
            "OHSU",
            "UCLA",
            "UCD",
            "UBC",
            "LAVA",
            "UCSF PAR"
        ],
        "label": "Procedure Site",
        "max": 200,
        type: String
    },
    "Serum": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "Serum",
        "max": 200,
        type: String
    },
    "Sodium_Heparin": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "Sodium Heparin",
        "max": 200,
        type: String
    },
    "Timepoint": {
        "label": "Timepoint",
        type: String
    }
} );
CRFs['TissuePreparationform_Specimen']=({
    "Fixed_Histology": {
        "allowedValues": [
            "Positive",
            "Negative",
            "No definate Tumor",
            "N/A"
        ],
        "label": "Fixed Histology",
        "max": 200,
        type: String
    },
    "Frozen_Histology_(any_core)": {
        "allowedValues": [
            "Positive",
            "Negative",
            "N/A"
        ],
        "label": "Frozen Histology (any core)",
        "max": 200,
        type: String
    },
    "Percent_Tumor": {
        "label": "Percent Tumor",
        "max": 100,
        "min": 0,
        type: Number
    },
    "core": {
        "allowedValues": [
            "A",
            "B",
            "C",
            "D",
            "E ",
            "F",
            "G",
            "N/A"
        ],
        "label": "core",
        "max": 200,
        type: String
    }
} );
CRFs['TissuePreparationform']=({
    "Biopsy_Site": {
        "allowedValues": [
            "Bone",
            "Liver",
            "Lymph Node",
            "Adrenal lesion",
            "Seminal Vesicle mass",
            "spinal mass",
            "Lung",
            "Bladder mass"
        ],
        "label": "Biopsy Site",
        "max": 200,
        type: String
    },
    "Institution": {
        "allowedValues": [
            "UCSF",
            "OHSU",
            "UCLA",
            "UCD",
            "UBC",
            "LAVA"
        ],
        "label": "Institution",
        "max": 200,
        type: String
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    },
    "Procedure_Date": {
//        "capturetime": false,
        "label": "Procedure Date",
        type: Date
    },
    "Specimen": {
        "label": "Specimen",
        type: [CRFs["Tissue Preparation form_Specimen"]] // subdocument
    }
} );
CRFs['Pathologyform']=({
    "AR-FISH_ratio": {
        "label": "AR-FISH ratio",
        type: Number
    },
    "AR-FISH_result": {
        "allowedValues": [
            "Positive",
            "Negative",
            "Weak",
            "N/A"
        ],
        "label": "AR-FISH result",
        "max": 200,
        type: String
    },
    "AR-FISH_test_performed": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "AR-FISH test performed",
        "max": 200,
        type: String
    },
    "CHGA_result": {
        "allowedValues": [
            "Positive",
            "Negative",
            "Weak",
            "N/A"
        ],
        "label": "CHGA result",
        "max": 200,
        type: String
    },
    "CHGA_test_performed": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "CHGA test performed",
        "max": 200,
        type: String
    },
    "ION_Torrent_test_performed": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "ION Torrent test performed",
        "max": 200,
        type: String
    },
    "PTEN-IHC_result": {
        "allowedValues": [
            "Positive",
            "Negative",
            "Weak",
            "N/A"
        ],
        "label": "PTEN-IHC result",
        "max": 200,
        type: String
    },
    "PTEN_test_performed": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "PTEN test performed",
        "max": 200,
        type: String
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    },
    "Percent_Tumor_High": {
        "label": "Percent Tumor High",
        "max": 100,
        "min": 0,
        type: Number
    },
    "Percent_Tumor_low": {
        "label": "Percent Tumor low",
        "max": 100,
        "min": 0,
        type: Number
    },
    "Small_cell_morphology_core_call": {
        "allowedValues": [
            "Positive",
            "Negative",
            "N/A"
        ],
        "label": "Small cell morphology core call",
        "max": 200,
        type: String
    },
    "biopsy_timepoint": {
        "allowedValues": [
            "Baseline",
            "Progression",
            "Progression2"
        ],
        "label": "biopsy timepoint",
        "max": 200,
        type: String
    },
    "core_analyzed_(only_for_frozen)": {
        "allowedValues": [
            "A",
            "B",
            "C",
            "D",
            "E ",
            "F",
            "G",
            "N/A"
        ],
        "label": "core analyzed (only for frozen)",
        "max": 200,
        type: String
    },
    "core_type": {
        "allowedValues": [
            "fixed",
            "frozen"
        ],
        "label": "core type",
        "max": 200,
        type: String
    }
} );
CRFs['TreatmentHistory']=({
    "Abiraterone": {
        "allowedValues": [ "Yes", "No" ],
        "label": "Abiraterone",
        "max": 200,
        type: String
    },
    "Biopsy_Site": {
        "allowedValues": [
            "Bone",
            "Liver",
            "Lymph Node",
            "Adrenal lesion",
            "Seminal Vesicle mass",
            "spinal mass",
            "Lung",
            "Bladder mass"
        ],
        "label": "Biopsy Site",
        "max": 200,
        type: String
    },
    "Casodex": {
        "allowedValues": [ "Yes", "No" ],
        "label": "Casodex",
        "max": 200,
        type: String
    },
    "Docetaxel_Response": {
        "allowedValues": [ "PR", "Resistant", "Naive", "Unknown" ],
        "label": "Docetaxel Response ",
        "max": 200,
        type: String
    },
    "Duration_(days)": {
        "label": "Duration (days) ",
        "max": 10000,
        "min": 0,
        type: Number
    },
    "Enzaludimide": {
        "allowedValues": [ "Yes", "No"
        ],
        "label": "Enzaludimide",
        "max": 200,
        type: String
    },
    "Institution": {
        "allowedValues": [ "UCSF", "OHSU", "UCLA", "UCD", "UBC", "LAVA"
        ],
        "label": "Institution",
        "max": 200,
        type: String
    },
    "On_study_Treatment": {
        "allowedValues": [
            "Camp clinical trial",
            "Abriraterone",
            "Enzaludimide",
            "Xofigo",
            "Taxotere",
            "Taxotere+MLN8237",
            "Targeted docetaxel",
            "Cytoxan",
            "Carboplatin+Taxotere",
            "Hsp90",
            "Cisplatin+Etoposide",
            "DNA-PK+mTOR",
            "Mitoxantrone",
            "Itraconazole",
            "Radiotherapy"
        ],
        "label": "On study Treatment",
        "max": 200,
        type: String
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    },
    "Primary_Hormone_Response": {
        "allowedValues": [
            "No",
            "Yes",
            " "
        ],
        "label": "Primary Hormone Response",
        "max": 200,
        type: String
    },
    "Reason_for_stopping": {
        "allowedValues": [
            "No",
            "Yes",
            " "
        ],
        "label": "Reason for stopping",
        "max": 200,
        type: String
    },
    "Surgical_Castration": {
        "allowedValues": [
            "Yes",
            "No"
        ],
        "label": "Surgical Castration",
        "max": 200,
        type: String
    },
    "Survival_(days)": {
        "label": "Survival (days) ",
        "max": 10000,
        "min": 0,
        type: Number
    },
    "core_analyzed": {
        "allowedValues": [
            "A",
            "B",
            "C",
            "D",
            "E ",
            "F",
            "G",
            "N/A"
        ],
        "label": "core analyzed",
        "max": 200,
        type: String
    }
} );
CRFs['RNASeqcompletionform']=({
    "LNCAP_control_source": {
        "label": "LNCAP control source",
        type: String
    },
    "Patient_ID": {
        "allowedValues": crf_ids(),
        "label": "Patient ID",
        type: String
    },
    "QC_reports": {
        "label": "QC reports",
        type: String
    },
    "RIN_score_from_UCSF": {
        "label": "RIN score from UCSF",
        type: Number
    },
    "date_completed": {
//        "capturetime": false,
        "label": "date completed",
        type: Date
    },
    "date_received": {
//        "capturetime": false,
        "label": "date received",
        type: Date
    },
    "library_prep_notes": {
        "label": "library prep notes",
        type: String
    },
    "library_prep_used": {
        "allowedValues": [
            "Illumina TruSeq Non-stranded",
            "Illumina TruSeq stranded",
            "NuGen non-stranded",
            "NuGen stranded",
            "Clone Tech stranded",
            "Clone Tech non-stranded"
        ],
        "label": "library prep used",
        "max": 200,
        type: String
    },
    "location_of_fastq_file": {
        "label": "location of fastq file",
        type: String
    }
} );


STATUS_PENDING=1;
STATUS_APPROVED=2;
STATUS_REJECTED=3;

CRFmetadataCollection = new Meteor.Collection("crfsmetadatacollection");
if (Meteor.isServer) {
    for (x in CRFs) {
        console.log("CRF x", x);
        var c = _.clone(CRFs[x]);
        c._id = x;
        c.collection = x;
        try {
            CRFmetadataCollection.upsert({_id:x}, c) 
        } catch (x) {
            console.log("upsert failed", x);
        }
    }
}

for (x in CRFs) {
    var aCRFcollection = new Meteor.Collection(x);
    console.log(x);
    var aCRFschema = new SimpleSchema([clinicalReportFormSchemaObject, CRFs[x]]);
    CRFs[x].aCRFformName = x;
    CRFs[x].aCRFcollection = aCRFcollection;
    if (Meteor.isClient)
        window[x] = aCRFcollection;
    CRFs[x].aCRFschema = aCRFschema;
    aCRFcollection.attachSchema(aCRFschema);


    /*
    aCRFcollection.deny({
      update: function(userId, clinicalReportForm, fieldNames) {
        if(isAdminById(userId))
          return false;
        // deny the update if it contains something other than the following fields
        return (_.without(fieldNames, 'title', 'url', 'body', 'shortUrl', 'shortTitle', 'categories').length > 0);
      }
    });

    aCRFcollection.allow({
      update: canEditById,
      remove: canEditById
    });
    */

    clickedaCRFcollection = [];

    getClinicalReportFormProperties = function(clinicalReportForm) {

      var clinicalReportFormAuthor = Meteor.users.findOne(clinicalReportForm.userId);
      var p = {
        clinicalReportFormAuthorName : getDisplayName(clinicalReportFormAuthor),
        clinicalReportFormTitle : cleanUp(clinicalReportForm.title),
        profileUrl: getProfileUrlById(clinicalReportForm.userId),
        clinicalReportFormUrl: getClinicalReportFormPageUrl(clinicalReportForm),
        thumbnailUrl: clinicalReportForm.thumbnailUrl,
        linkUrl: !!clinicalReportForm.url ? getOutgoingUrl(clinicalReportForm.url) : getClinicalReportFormPageUrl(clinicalReportForm._id)
      };
      
      if(clinicalReportForm.url)
        p.url = clinicalReportForm.url;

      if(clinicalReportForm.htmlBody)
        p.htmlBody = clinicalReportForm.htmlBody;

      return p;
    };

    getClinicalReportFormPageUrl = function(clinicalReportForm){
      return getSiteUrl()+'clinicalReportForms/'+clinicalReportForm._id;
    };

    getClinicalReportFormEditUrl = function(id){
      return getSiteUrl()+'clinicalReportForms/'+id+'/edit';
    };

    // for a given clinicalReportForm, return its link if it has one, or else its clinicalReportForm page URL
    getClinicalReportFormLink = function (clinicalReportForm) {
      return !!clinicalReportForm.url ? getOutgoingUrl(clinicalReportForm.url) : getClinicalReportFormPageUrl(clinicalReportForm);
    };

    aCRFcollection.before.insert(function (userId, doc) {
      if(Meteor.isServer && !!doc.body)
        doc.htmlBody = sanitize(marked(doc.body));
    });

    aCRFcollection.before.update(function (userId, doc, fieldNames, modifier, options) {
      // if body is being modified, update htmlBody too
      if (Meteor.isServer && modifier.$set && modifier.$set.body) {
        modifier.$set = modifier.$set || {};
        modifier.$set.htmlBody = sanitize(marked(modifier.$set.body));
      }
    });
}

Meteor.methods({
  clinicalReportForm: function(clinicalReportForm){
    var title = cleanUp(clinicalReportForm.title),
        body = clinicalReportForm.body,
        userId = this.userId,
        user = Meteor.users.findOne(userId),
        aCRFcollection = CRFs[clincalReportForm.formName].aCRFcollection,

        timeSinceLastClinicalReportForm=timeSinceLast(user, aCRFcollection),
        numberOfaCRFcollectionInPast24Hours=numberOfItemsInPast24Hours(user, aCRFcollection),
        clinicalReportFormInterval = Math.abs(parseInt(getSetting('clinicalReportFormInterval', 30))),
        maxaCRFcollectionPer24Hours = Math.abs(parseInt(getSetting('maxaCRFcollectionPerDay', 30))),
        clinicalReportFormId = '';
    

    // ------------------------------ Checks ------------------------------ //

    // check that user can clinicalReportForm
    if (!user || !canClinicalReportForm(user))
      throw new Meteor.Error(601, i18n.t('You need to login or be invited to clinicalReportForm new stories.'));

    // check that user provided a title
    if(!clinicalReportForm.title)
      throw new Meteor.Error(602, i18n.t('Please fill in a title'));


    if(!!clinicalReportForm.url){
      // check that there are no previous clinicalReportForms with the same link in the past 6 months
      var sixMonthsAgo = moment().subtract(6, 'months').toDate();
      var clinicalReportFormWithSameLink = aCRFcollection.findOne({url: clinicalReportForm.url, clinicalReportFormedAt: {$gte: sixMonthsAgo}});

      if(typeof clinicalReportFormWithSameLink !== 'undefined'){
        Meteor.call('upvoteClinicalReportForm', clinicalReportFormWithSameLink);
        throw new Meteor.Error(603, i18n.t('This link has already been clinicalReportFormed'), clinicalReportFormWithSameLink._id);
      }
    }

    if(!isAdmin(Meteor.user())){
      // check that user waits more than X seconds between clinicalReportForms
      if(!this.isSimulation && timeSinceLastClinicalReportForm < clinicalReportFormInterval)
        throw new Meteor.Error(604, i18n.t('Please wait ')+(clinicalReportFormInterval-timeSinceLastClinicalReportForm)+i18n.t(' seconds before clinicalReportForming again'));

      // check that the user doesn't clinicalReportForm more than Y clinicalReportForms per day
      if(!this.isSimulation && numberOfaCRFcollectionInPast24Hours > maxaCRFcollectionPer24Hours)
        throw new Meteor.Error(605, i18n.t('Sorry, you cannot submit more than ')+maxaCRFcollectionPer24Hours+i18n.t(' clinicalReportForms per day'));
    }

    // ------------------------------ Properties ------------------------------ //

    // Basic Properties
    properties = {
      title: title,
      body: body,
      userId: userId,
      author: getDisplayNameById(userId),
      upvotes: 0,
      downvotes: 0,
      commentsCount: 0,
      baseScore: 0,
      score: 0,
      inactive: false
    };

    // UserId    
    if(isAdmin(Meteor.user()) && !!clinicalReportForm.userId){ // only let admins clinicalReportForm as other users
      properties.userId = clinicalReportForm.userId; 
    }

    // Status
    var defaultClinicalReportFormStatus = getSetting('requireaCRFcollectionApproval') ? STATUS_PENDING : STATUS_APPROVED;
    if(isAdmin(Meteor.user()) && !!clinicalReportForm.status){ // if user is admin and a custom status has been set
      properties.status = clinicalReportForm.status;
    }else{ // else use default status
      properties.status = defaultClinicalReportFormStatus; 
    }

    // CreatedAt
    properties.createdAt = new Date();

    // ClinicalReportFormedAt
    if(properties.status == 2){ // only set clinicalReportFormedAt if clinicalReportForm is approved
      if(isAdmin(Meteor.user()) && !!clinicalReportForm.clinicalReportFormedAt){ // if user is admin and a custom clinicalReportFormDate has been set
        properties.clinicalReportFormedAt = clinicalReportForm.clinicalReportFormedAt;
      }else{ // else use current time
        properties.clinicalReportFormedAt = new Date();
      }
    }

    clinicalReportForm = _.extend(clinicalReportForm, properties);

    // ------------------------------ Callbacks ------------------------------ //

    // run all clinicalReportForm submit server callbacks on clinicalReportForm object successively
    clinicalReportForm = clinicalReportFormSubmitMethodCallbacks.reduce(function(result, currentFunction) {
        return currentFunction(result);
    }, clinicalReportForm);

    // ------------------------------ Insert ------------------------------ //

    // console.log(clinicalReportForm)
    clinicalReportForm._id = aCRFcollection.insert(clinicalReportForm);

    // ------------------------------ Callbacks ------------------------------ //

    // run all clinicalReportForm submit server callbacks on clinicalReportForm object successively
    clinicalReportForm = clinicalReportFormAfterSubmitMethodCallbacks.reduce(function(result, currentFunction) {
        return currentFunction(result);
    }, clinicalReportForm);

    // ------------------------------ ClinicalReportForm-Insert ------------------------------ //

    // increment clinicalReportForms count
    Meteor.users.update({_id: userId}, {$inc: {clinicalReportFormCount: 1}});

    var clinicalReportFormAuthor =  Meteor.users.findOne(clinicalReportForm.userId);

    Meteor.call('upvoteClinicalReportForm', clinicalReportForm, clinicalReportFormAuthor);

    return clinicalReportForm;
  },
  setClinicalReportFormedAt: function(clinicalReportForm, customClinicalReportFormedAt){

    var clinicalReportFormedAt = new Date(); // default to current date and time
        
    if(isAdmin(Meteor.user()) && typeof customClinicalReportFormedAt !== 'undefined') // if user is admin and a custom datetime has been set
      clinicalReportFormedAt = customClinicalReportFormedAt;

    var aCRFcollection = CRFs[clincalReportForm.formName].aCRFcollection;
    aCRFcollection.update(clinicalReportForm._id, {$set: {clinicalReportFormedAt: clinicalReportFormedAt}});
  },
  clinicalReportForm_edit: function(clinicalReportForm){
    // TODO: make clinicalReportForm_edit server-side?
  },
  approveClinicalReportForm: function(clinicalReportForm){
    var aCRFcollection = CRFs[clincalReportForm.formName].aCRFcollection;
    if(isAdmin(Meteor.user())){
      var now = new Date();
      aCRFcollection.update(clinicalReportForm._id, {$set: {status: 2, clinicalReportFormedAt: now}});
    }else{
      throwError('You need to be an admin to do that.');
    }
  },
  unapproveClinicalReportForm: function(clinicalReportForm){
    var aCRFcollection = CRFs[clincalReportForm.formName].aCRFcollection;
    if(isAdmin(Meteor.user())){
      aCRFcollection.update(clinicalReportForm._id, {$set: {status: 1}});
    }else{
      throwError('You need to be an admin to do that.');
    }
  },
  clickedClinicalReportForm: function(clinicalReportForm, sessionId){
    var aCRFcollection = CRFs[clincalReportForm.formName].aCRFcollection;
    // only let clients increment a clinicalReportForm's click counter once per session
    var click = {_id: clinicalReportForm._id, sessionId: sessionId};
    if(_.where(clickedaCRFcollection, click).length == 0){
      clickedaCRFcollection.push(click);
      aCRFcollection.update(clinicalReportForm._id, { $inc: { clicks: 1 }});
    }
  },
  deleteClinicalReportFormById: function(clinicalReportFormId) {
    // remove clinicalReportForm comments
    // if(!this.isSimulation) {
    //   Comments.remove({clinicalReportForm: clinicalReportFormId});
    // }
    // NOTE: actually, keep comments after all

    // decrement clinicalReportForm count
    var clinicalReportForm = aCRFcollection.findOne({_id: clinicalReportFormId});
    if(!Meteor.userId() || !canEditById(Meteor.userId(), clinicalReportForm)) throw new Meteor.Error(606, 'You need permission to edit or delete a clinicalReportForm');
    
    Meteor.users.update({_id: clinicalReportForm.userId}, {$inc: {clinicalReportFormCount: -1}});
    aCRFcollection.remove(clinicalReportFormId);
  },
 getFormNames : function() {
    return Object.keys(CRFs);
 },

  getCurrentTime: function () {
    console.log('on server, getCurrentTime called');
    return new Date();
  }
});
