/**
 * HbbtvModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/values-hbbtv.h for
 * internal use.
 */

 function HbbtvModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
 	HbbtvModelDefines.SL2_TVAPI_HBBTV_I32_STATE = "tvapi.hbbtv.i32.state";



	 // enum or defined is here



	HbbtvModelDefines.HBBTV_NFY_MSG_NONE  =  0;
}
/**
 * HbbtvModel class derived from SubModel.
 */
function HbbtvModel( parentModel ) {
    SubModel.call( this, parentModel, HbbtvModelDefines );
    this.registerSubObject = function (){
    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------
    // I32Status
              this.registerIntegerObject(
              HbbtvModelDefines.SL2_TVAPI_HBBTV_I32_STATE,
              "getI32Switch", "setI32Switch", "onI32SwitchChaged",
              null, null );
    }

}
HbbtvModel.prototype = new SubModel();
HbbtvModel.prototype.constructor = HbbtvModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    SubModel.registerStaticConstants(
            HbbtvModel, HbbtvModelDefines,
            [
            ] );
}
