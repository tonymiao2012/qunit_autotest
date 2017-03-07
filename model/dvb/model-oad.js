/**
 * OadModelDefines  class.
 * Contains all defined constants from  for
 * internal use.
 */

function OadModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    OadModelDefines.SL2_TVAPI_ACTION_OAD_START_SEARCH = "tvapi.action.oad.start.search";
    OadModelDefines.SL2_TVAPI_ACTION_OAD_CANCEL_SEARCH = "tvapi.action.oad.cancel.search";
    OadModelDefines.SL2_TVAPI_I32_OAD_SEARCH_STATE = "tvapi.i32.oad.search.state";
    OadModelDefines.SL2_TVAPI_I32_OAD_START_UPDATE="tvapi.action.oad.start.update";
    OadModelDefines.SL2_TVAPI_I32_OAD_CANCEL_UPDATE="tvapi.action.oad.cancel.update";
    OadModelDefines.SL2_TVAPI_I32_OAD_AUTO_ANNOUNCEMENT = "tvapi.i32.oad.auto.announcement";
    OadModelDefines.SL2_TVAPI_STR_OAD_HISENSE_CURRENT_VERSION = "tvapi.str.oad.hisense.current.version";
    OadModelDefines.SL2_TVAPI_STR_OAD_HISENSE_VERSION_DESCRIPTION = "tvapi.str.oad.hisense.version.description";
    OadModelDefines.SL2_TVAPI_ACTION_OAD_START_DOWNLOAD = "tvapi.action.oad.start.download";
    OadModelDefines.SL2_TVAPI_I32_OAD_DOWNLOAD_PROGRESS = "tvapi.i32.oad.download.progress";

    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_STARTED = 0;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_PACKET_IMAGES_FOUND = 1;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_NO_PACKET_IMAGES_FOUND = 2;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_NO_NEW_PACKET_FOUND = 3;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_NEW_PACKET_FOUND = 4;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_PACKET_IMAGES_SEARCHING = 5;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_NOT_ENOUGH_STORAGE_SPACE = 6;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_ERROR = 7;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_STATE_CANCELLED = 0xFFFF;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_PROGRESS_INITIAL = 0;
    OadModelDefines.SL2_TVAPI_OAD_SEARCH_PROGRESS_COMPLETED = 100;
    OadModelDefines.SL2_TVAPI_OAD_PROGRESS_INITIAL = 0;
    OadModelDefines.SL2_TVAPI_OAD_PROGRESS_COMPLETED = 100;
    OadModelDefines.SL2_TVAPI_OAD_AUTOMATIC_ANNOUNCEMENT_RESULT_LOAD_NOW = 0;
    OadModelDefines.SL2_TVAPI_OAD_AUTOMATIC_ANNOUNCEMENT_RESULT_AT_STANDBY = 1;
    OadModelDefines.SL2_TVAPI_OAD_AUTOMATIC_ANNOUNCEMENT_RESULT_LATER = 2;
    OadModelDefines.SL2_TVAPI_OAD_AUTOMATIC_ANNOUNCEMENT_RESULT_DISMISS = 3;
}
/**
 * OadModel class derived from SubModel.
 */
function OadModel(parentModel) {
    SubModel.call(this, parentModel, OadModelDefines);
    this.registerSubObject = function () {
    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
// Need to fix
//	OadModelDefines.SL2_TVAPI_ACTION_OAD_START_SEARCH=  "tvapi.action.oad.start.search "

    // StartSearch
      this.registerActionObject(
      OadModelDefines.SL2_TVAPI_ACTION_OAD_START_SEARCH,
      [
      	{name:"StartSearch",method:function(object){
      		return object.invoke();
      		}}
      ],"null"
      );
    this.registerActionObject(
        OadModelDefines.SL2_TVAPI_I32_OAD_START_UPDATE,
        [
            {name:"StartUpgrade",method:function(object){
                return object.invoke();
            }}
        ],"null"
    );
    this.registerActionObject(
        OadModelDefines.SL2_TVAPI_I32_OAD_CANCEL_UPDATE,
        [
            {name:"CancelUpgrade",method:function(object){
                return object.invoke();
            }}
        ],"null"
    );
// Need to fix
//	OadModelDefines.SL2_TVAPI_ACTION_OAD_CANCEL_SEARCH=  "tvapi.action.oad.cancel.search "

    // CancelSearch
      this.registerActionObject(
      OadModelDefines.SL2_TVAPI_ACTION_OAD_CANCEL_SEARCH,
      [
      	{name:"CancelSearch",method:function(object){
      		return object.invoke();
      		}}
      ],"null"
      );

    // SearchState
      this.registerIntegerObject(
      OadModelDefines.SL2_TVAPI_I32_OAD_SEARCH_STATE,
      "getSearchState", "setSearchState", "onSearchStateChaged",
      null, null );

    // SearchProgress
    //  this.registerIntegerObject(
    //  OadModelDefines.SL2_TVAPI_I32_OAD_SEARCH_PROGRESS,
    //  "getSearchProgress", "setSearchProgress", "onSearchProgressChaged",
    //  null, null );

    // Progress
    //  this.registerIntegerObject(
    //  OadModelDefines.SL2_TVAPI_I32_OAD_PROGRESS,
    //  "getProgress", "setProgress", "onProgressChaged",
    //  null, null );

    // AutoAnnouncement
      this.registerIntegerObject(
      OadModelDefines.SL2_TVAPI_I32_OAD_AUTO_ANNOUNCEMENT,
      "getAutoAnnouncement", "setAutoAnnouncement", "onAutoAnnouncementChaged",
      null, null );

    // AutoAnnouncementEnabled
    //  this.registerIntegerObject(
    //  OadModelDefines.SL2_TVAPI_I32_OAD_AUTO_ANNOUNCEMENT_ENABLED,
    //  "getAutoAnnouncementEnabled", "setAutoAnnouncementEnabled", "onAutoAnnouncementEnabledChaged",
    //  null, null );

    // HisenseCurrentVersion
      this.registerStringObject(
      OadModelDefines.SL2_TVAPI_STR_OAD_HISENSE_CURRENT_VERSION,
      "getHisenseCurrentVersion", "setHisenseCurrentVersion", "onHisenseCurrentVersionChaged",
      null, null );

    // HisenseVersionDescription
      this.registerStringObject(
      OadModelDefines.SL2_TVAPI_STR_OAD_HISENSE_VERSION_DESCRIPTION,
      "getHisenseVersionDescription", "setHisenseVersionDescription", "onHisenseVersionDescriptionChaged",
      null, null );

// Need to fix
//	OadModelDefines.SL2_TVAPI_ACTION_OAD_START_DOWNLOAD=  "tvapi.action.oad.start.download "

    // StartDownload
      this.registerActionObject(
      OadModelDefines.SL2_TVAPI_ACTION_OAD_START_DOWNLOAD,
      [
      	{name:"StartDownload",method:function(object){
      		return object.invoke();
      		}}
      ],"null"
      );

    // DownloadProgress
      this.registerIntegerObject(
      OadModelDefines.SL2_TVAPI_I32_OAD_DOWNLOAD_PROGRESS,
      "getDownloadProgress", "setDownloadProgress", "onDownloadProgressChaged",
      null, null );
    }


}
OadModel.prototype = new SubModel();
OadModel.prototype.constructor = OadModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        OadModel, OadModelDefines,
        [
        ]);
}
