var scanOthers = null;
function startAutoScan(sourceType) {
    if (model.channelSearch.getRunning() == 1) {
        model.channelSearch.Stop();
    }
    model.channelSearch.setSource(sourceType);
    model.channelSearch.Start(0);
    return true;
}

function autoSearch(repeat, expectNum, sourceType, chan_mode, scan_mode, search_mode, funcName) {
    QUnit.test(funcName, function (assert) {
        var flag = 1;
        var i = 0;
        var times = repeat;
        var isSearched = 0;
        var left = 0;
        var done = assert.async(times);
        var curServiceNumDtv=0;
        var curServiceNumAtv=0;
        model.channelSearch.onStateChaged = function (value) {
            var serviceNumDtv = 0;
            var serviceNumAtv = 0;
            console.log(".....onStateChaged= " + value);
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) 
                    {
                        assert.equal(curServiceNumDtv + curServiceNumAtv, expectNum, "check serives");
                        $("#total").html(curServiceNumDtv + curServiceNumAtv);
                        if (curServiceNumDtv + curServiceNumAtv == expectNum)
                            flag = 1;
                        else
                            flag = 1;//0;

                        if ((i < times)&& (flag == 1)) {
                            isSearched = 0;
                            flag = 0;
                            serviceNumDtv=0;
                            serviceNumAtv=0;
                            curServiceNumDtv=0;
                            curServiceNumAtv=0;
                            setTimeout(startAutoScan, 3000, sourceType);
                            i++;
                            $("#times").html(i);
                            done();
                        }
                        else {
                            for (left = 0; left <= times - i; left++)
                                done();
                            model.channelSearch.onProgressChaged = null;
                            model.channelSearch.onStateChaged = null;
                            model.channelSearch.onFoundDigitServicesChaged =null;
                            model.channelSearch.onFoundAnalogServicesChaged=null;
                        }
                    }               
            }
            else if (value == 6) {
            	  model.channelSearch.NewFoundTvProcessed();
            }
            else if (value == 7) {
            	  model.channelSearch.NotFoundTvProcessed();
            }    
            else if (value == 8) {
            	  model.channelSearch.NewFoundRadioProcessed();
            }
            else if (value == 9) {
            	  model.channelSearch.NotFoundRadioProcessed();
            }                     
        };
        model.channelSearch.onProgressChaged = function (value) {
            $("#progress").html(value);
        }
        model.channelSearch.onFoundDigitServicesChaged = function (value) {
        		serviceNumDtv=value+model.channelSearch.getFoundRadioServices();
        		if(curServiceNumDtv<serviceNumDtv){curServiceNumDtv=serviceNumDtv;}	
        		$("#total").html(curServiceNumDtv);
        }
        model.channelSearch.onFoundAnalogServicesChaged = function (value) {
        		serviceNumAtv=value;
        		if(curServiceNumAtv<serviceNumAtv){curServiceNumAtv=serviceNumAtv;}
        		$("#total").html(curServiceNumAtv+curServiceNumDtv);
        }        
    var currCountry=model.basicSetting.getTvsetLocation();
    if(currCountry==9)    
    	model.channelSearch.NetworkSet(11,-1,20);
    else
    	model.channelSearch.NetworkSet(11,-1,200);
    model.channelSearch.setScramble(chan_mode);
    model.channelSearch.setDvbtScanMode(scan_mode);
    model.channelSearch.setSearchMode(search_mode);
    if(sourceType==10)        
    		model.channelSearch.setAnalogStandard(0);
    startAutoScan(sourceType);
    i++;
    $("#times").html(i);
    });
}

