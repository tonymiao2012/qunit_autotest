function getStateMode()
{
	return model.closedcaption.getControl()
}
function setStateMode(val) {
    QUnit.test( "setControl test", function( assert ) {
       model.closedcaption.setControl(val); 
       assert.equal(getStateMode(),val, "check setControl " );	
    });   
}

function getAnalogMode()
{
	return model.closedcaption.getControlAnalogMode()
}
function setAnalogMode(val) {
    QUnit.test( "setAnalogMode test", function( assert ) {
       model.closedcaption.setControlAnalogMode(val); 
       assert.equal(getAnalogMode(),val, "check setAnalogMode " );	
    });   
}

function getFontSize()
{
	return model.closedcaption.getControlDigitalSize()
}
function setFontSize(val) {
    QUnit.test( "setDigitalSize test", function( assert ) {
       model.closedcaption.setControlDigitalSize(val); 
       assert.equal(getFontSize(),val, "check setDigitalSize " );	
    });   
}   