function getPin()
{
	return model.parentlock.getPin()
}
function setPin(pinValue) {
    QUnit.test( "setPin test", function( assert ) {
       model.parentlock.setPin(pinValue); 
        assert.equal(getPin(),pinValue, "check setPin " );	
    });   
}

function getMovieRating()
{
	return model.parentlock.getUsMovieRating()
}
function setMovieRating(ratingValue) {
    QUnit.test( "setUsMovieRating test", function( assert ) {
       model.parentlock.setUsMovieRating(ratingValue); 
        assert.equal(getMovieRating(),ratingValue, "check setUsMovieRating " );	
    });   
}
