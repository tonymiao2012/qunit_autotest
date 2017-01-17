function getCurTime()
{
	       var curTime = model.timerfunc.getCurTime();
	       return curTime;
}
function getCurrentTime() {
         QUnit.test( "getCurTime test", function( assert ) {
            var result;
            result = getCurTime();
						assert.notEqual(result,0, "Test getCurTime" );
            var date = new Date(result*1000);
            $("#details").html(date.toLocaleString());
				});	         
         
}

function getEitNow()
{
	      var result = model.tvservice.getEitMainNow();
	      return result;
}
function getEitMainNow() {
         QUnit.test( "getEitMainNow test", function( assert ) {
            var pfResultNow;
            pfResultNow = getEitNow();
						assert.equal(pfResultNow.length,12, "Test getEitMainNow" );
						if(pfResultNow.length==12)
						{
						var startime = new Date(pfResultNow[2]*1000);
						var stoptime = new Date(pfResultNow[3]*1000);						
						$("#details").html("window:"+pfResultNow[0]+";type:"+pfResultNow[1]+";start:"+startime.toLocaleString()+";end:"+stoptime.toLocaleString()
						 +";title:"+pfResultNow[4]+";shortDes:"+pfResultNow[5]+";longDes:"+pfResultNow[6]+";flag:"+pfResultNow[7]
						 +";rating:"+pfResultNow[8]+";eventID:"+pfResultNow[9]+";themes:"+pfResultNow[10]+";linkage:"+pfResultNow[11]);	
						}
				});	         
         
}

function getEitNext()
{
				var result = model.tvservice.getEitMainNext();
				return result;
}
function getEitMainNext() {
         QUnit.test( "getEitMainNext test", function( assert ) {
            var pfResultNext;
            pfResultNext = getEitNext();
						assert.equal(pfResultNext.length,12, "Test getEitNext" );
						if(pfResultNext.length==12)
						{
						var startime = new Date(pfResultNext[2]*1000);
						var stoptime = new Date(pfResultNext[3]*1000);						
						$("#details").html("window:"+pfResultNow[0]+";type:"+pfResultNow[1]+";start:"+startime.toLocaleString()+";end:"+stoptime.toLocaleString()
						 +";title:"+pfResultNow[4]+";shortDes:"+pfResultNow[5]+";longDes:"+pfResultNow[6]+";flag:"+pfResultNow[7]
						 +";rating:"+pfResultNow[8]+";eventID:"+pfResultNow[9]+";themes:"+pfResultNow[10]+";linkage:"+pfResultNow[11]);	
						}
				});	         
         
}

function getVideoFormatInfo()
{
				var result = model.video.getVideoFormatInfo();
				return result;
}
function getVideoFormat()
{
	 			QUnit.test( "getVideoFormat test", function( assert ) {
            var format;
            format = getVideoFormatInfo();
            assert.notEqual(format.length,0, "Test getVideoFormat" );
            if(format.length>0)
              $("#details").html(format);      
        });	
}

function getAudioIndexImpl()
{
				var result = model.tvservice.getAudioIndex();
				return result;
}

function getAudioIndex()
{
	 			QUnit.test( "getAudioIndex test", function( assert ) {
            var audioIndex;
            audioIndex = getAudioIndexImpl();
            assert.notEqual(audioIndex,0x7fffffff ,"Test getAudioIndex" );
            $("#details").html(audioIndex);      
        });		
}