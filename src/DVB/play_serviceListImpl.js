var allChannels_T = [];
var allChannels_C = [];
var allChannels_S = [];
var skipChannels_T = [];
var skipChannels_C = [];
var favChannels_T = [];
var favChannels_C = [];
var blockChannels_T = [];
var blockChannels_C = [];
var channelIterator = null;
var currentIndex = 0;
var readOnce = 20;
var ChCount = 0;
var readCount = 0;
var readPlus = 0;
var infoBar;
var totalCount=0;
var fh = new fileHandler();
var workRoot = 1;
var begin_time=0;
var end_time=0;
var path = "hisenseUI/result.json";
QUnit.config.reorder = false;

function eventRowsToChannels(rows, channelType) {
    //var chnls = [];
    //$("#total").html(rows.length);

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i], chnl = {};
        chnl.name = row[0];
        chnl.frontEnd = row[1];
        chnl.id = row[2];
        chnl.type = row[3];
        chnl.attr = row[4];
        chnl.uuid = row[5];
        chnl.serviceId = row[6];
        chnl.streamId = row[7];
        chnl.networkId = row[8];
        channelType.push(chnl);
    }
    //return chnls;
}

function getServiceListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 2}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/,
            ServicelistModel.SERVICELIST_FIELD_SERVICE_ID,
            ServicelistModel.SERVICELIST_FIELD_TRANSPORT_STREAM_ID,
            ServicelistModel.SERVICELIST_FIELD_ORIGINAL_NETWORK_ID            
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetChannels_T.bind(this)
    );
}

function onGetChannels_T(m_event) {
    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        if (readCount == 0) {
            eventRowsToChannels(m_event.rows, allChannels_T);
            $("#total").html(allChannels_T.length);
        } else {
            eventRowsToChannels(m_event.rows, allChannels_T);
            readCount--;
            readPlus++;
            channelIterator.seekToRow(readOnce * readPlus, TableIterator.SEEK_SET);
            if (readCount != 0 || (ChCount % readOnce == 0)) {
                channelIterator.readNextRows(readOnce);
            } else {
                channelIterator.readNextRows(ChCount % readOnce);
            }
        }
    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
        allChannels_T = [];
        if (m_event.totalCount == 0) {
            onGetChannels_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        } else {
            ChCount = m_event.totalCount;
            readCount = 0;
            readPlus = 0;
            if (ChCount <= readOnce) {
                channelIterator.readNextRows(ChCount);
            } else {
                if (ChCount % readOnce != 0) {
                    readCount = Math.floor(ChCount / readOnce);
                } else {
                    readCount = Math.floor(ChCount / readOnce) - 1;
                }
                channelIterator.seekToRow(0, TableIterator.SEEK_SET);
                channelIterator.readNextRows(readOnce);
            }
        }
    } else if (m_event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
    } else {
    }
}
function getServiceListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 3}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/,
            ServicelistModel.SERVICELIST_FIELD_SERVICE_ID,
            ServicelistModel.SERVICELIST_FIELD_TRANSPORT_STREAM_ID,
            ServicelistModel.SERVICELIST_FIELD_ORIGINAL_NETWORK_ID            
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetChannels_C.bind(this)
    );
}
function onGetChannels_C(m_event) {
    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        if (readCount == 0) {
            eventRowsToChannels(m_event.rows, allChannels_C);
            $("#total").html(allChannels_C.length);
        } else {
            eventRowsToChannels(m_event.rows, allChannels_C);
            readCount--;
            readPlus++;
            channelIterator.seekToRow(readOnce * readPlus, TableIterator.SEEK_SET);
            if (readCount != 0 || (ChCount % readOnce == 0)) {
                channelIterator.readNextRows(readOnce);
            } else {
                channelIterator.readNextRows(ChCount % readOnce);
            }
        }
    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
        allChannels_C = [];
        if (m_event.totalCount == 0) {
            onGetChannels_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        } else {
            ChCount = m_event.totalCount;
            readCount = 0;
            readPlus = 0;
            if (ChCount <= readOnce) {
                channelIterator.readNextRows(ChCount);
            } else {
                if (ChCount % readOnce != 0) {
                    readCount = Math.floor(ChCount / readOnce);
                } else {
                    readCount = Math.floor(ChCount / readOnce) - 1;
                }
                channelIterator.seekToRow(0, TableIterator.SEEK_SET);
                channelIterator.readNextRows(readOnce);
            }
        }
    } else if (m_event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
    } else {
    }
}
function getServiceListS() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 4}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN,
            ServicelistModel.SERVICELIST_FIELD_SERVICE_ID,
            ServicelistModel.SERVICELIST_FIELD_TRANSPORT_STREAM_ID,
            ServicelistModel.SERVICELIST_FIELD_ORIGINAL_NETWORK_ID 
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetChannels_S_new.bind(this)
    );
}
function onGetChannels_S_new(m_event) {
    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
         eventRowsToChannels(m_event.rows,allChannels_S);
         if(totalCount==allChannels_S.length)
         {
         	$("#total").html(allChannels_S.length);
         	var curtime= new Date();
         	end_time=curtime.getTime();
         	var usedTime=(end_time-begin_time)/1000;
				 	console.log(".......end :"+usedTime);
				 	channelIterator.disconnect();
				 }
    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
				//console.log("total channels  is " + m_event.totalCount);
        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
 				totalCount = m_event.totalCount;
 				console.log("...total count :"+m_event.totalCount+":"+totalCount);
        if (m_event.totalCount == 0) {
            onGetChannels_S_new({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
        	  allChannels_S = [];
           channelIterator.readNextRows(m_event.totalCount);
           //channelIterator.readNextRows(totalCount);
        }
    }
}
function onGetChannels_S(m_event) {
    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        if (readCount == 0) {
            eventRowsToChannels(m_event.rows, allChannels_S);
            $("#total").html(allChannels_S.length);
            modeljs.dbgprint("The channel number = " + allChannels_S.length, 1);
            var curtime= new Date();
            console.log(".......end :"+curtime.getTime());
        } else {
            eventRowsToChannels(m_event.rows, allChannels_S);
            readCount--;
            readPlus++;
            channelIterator.seekToRow(readOnce * readPlus, TableIterator.SEEK_SET);
            if (readCount != 0 || (ChCount % readOnce == 0)) {
                channelIterator.readNextRows(readOnce);
            } else {
                channelIterator.readNextRows(ChCount % readOnce);
            }
        }
    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
        console.log("total channels  is " + m_event.totalCount);
        allChannels_S = [];
        if (m_event.totalCount == 0) {
            onGetChannels_S({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        } else {
            ChCount = m_event.totalCount;
            readCount = 0;
            readPlus = 0;
            if (ChCount <= readOnce) {
                channelIterator.readNextRows(ChCount);
            } else {
                if (ChCount % readOnce != 0) {
                    readCount = Math.floor(ChCount / readOnce);
                } else {
                    readCount = Math.floor(ChCount / readOnce) - 1;
                }
                channelIterator.seekToRow(0, TableIterator.SEEK_SET);
                channelIterator.readNextRows(readOnce);
            }
        }
    } else if (m_event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
    } else {
    }
}
function showServiceList(sourceType) {
    var list;
    //Insert a channel list to right side.
    $("#resultView table").html("");
    //Draw a form header.
    var table = "<table class='table'>";
    table += "<tr>" +
        "<th>Index</th>" +
        "<th>Name</th>" +
        "<th>NO</th>" +
        "<th>Type</th>" +
        "<th>Attribute</th>" +
        "</tr>"
    if (sourceType == 0)
        list = allChannels_T;
    else if (sourceType == 1)
        list = allChannels_C;
    else if (sourceType == 2)
        list = allChannels_S;
    var chan_len;
    if (list.length > 20)
        chan_len = 20;
    else
        chan_len = list.length;
    for (var i = 0; i < chan_len; i++) {
        var index = i + 1;
        table += "<tr>";
        table += "<td>" + index + "</td>";
        table += "<td>" + list[i].name + "</td>";
        table += "<td>" + list[i].id + "</td>";
        table += "<td>" + list[i].type + "</td>";
        table += "<td>" + list[i].attr + "</td>";
        table += "</tr>";
    }
    table += "</table>";

    if ($("#resultView table").length === 0) {
        $("#resultView").append(table);
    } else {
        $("#resultView table").append(table);
    }

}

function write2File(sourceType,funcName) {
    QUnit.test(funcName, function (assert) {
    	  var timerFlag;
    	  var done = assert.async(1);	
    	  $("#total").html("");    	
        function checkServiceTimeout() {
        	var list;
    			if (sourceType == 0)
        			list = allChannels_T;
    			else if(sourceType == 1)
        			list = allChannels_C;
        	else
        		  list = allChannels_S;		
    			var content ="[\n";
    			for (var i = 0; i < list.length; i++) {
       	 		content = content+"{\"name\":\"" + list[i].name +"\","+"\"uuid\":\"" + list[i].uuid +"\","+ "\"streamId\":\"" + list[i].streamId +"\","+ "\"networkId\":\"" + list[i].networkId +"\","+ "\"serviceId\":\""+list[i].serviceId+"\"}";
        		if(i<list.length-1)
        		{
        		 content = content+",\n"; 
        		} 
    			}
     			content = content+"]"; 
    			var result = fh.writeFileToNative(path, content, workRoot);
        assert.ok(true, "writeToFile ");
        done();
        }; 
         var curtime= new Date();
				 console.log(".......write2File :begin :"+curtime.getTime());
        if (sourceType == 0)   
    	  	getServiceListT();
    	  else if (sourceType == 1) 
    	  	getServiceListC(); 
    	  else
    	  	getServiceListS();	
    	  console.log("write2File");	 	            	  
				timerFlag = setTimeout(checkServiceTimeout, 1800000);            	
    });  
}
function checkServiceListTByFile(funcName) {
   			console.log("............................... checkServiceListTByFile  . ");
        QUnit.test(funcName, function (assert) {  
        	  var timerFlag;
    	  		var done = assert.async(1);	
        	  function compare()
        	  { 
            	var flag = true;
            	var serListPath = "config/serviceListDVB_T.json";
            	var serList = readJSONFileArray(serListPath);
            	if (serList.length == allChannels_T.length) {
                var i;
                for (i = 0; i < allChannels_T.length; i++) {
                    if ((serList[i].name == allChannels_T[i].name) && (serList[i].uuid == allChannels_T[i].uuid)&& (serList[i].serviceId == allChannels_T[i].serviceId)
                        && (serList[i].streamId == allChannels_T[i].streamId)&& (serList[i].networkId == allChannels_T[i].networkId))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_T.length) {
                    flag = false;
                }
            	}
            	else {
                flag = false;
           	  }
						  return flag;
           	}
           	function serviceToCompare()
           	{
           		var result=compare();
           		assert.ok(result, "checkServiceListTByFile "); 
           		done();         		
           	}
           	modeljs.dbgprint("...Begin to get T", 1);
    	  		getServiceListT();            	  
						timerFlag = setTimeout(serviceToCompare, 2000);               
        });
}
function checkServiceListCByFile(funcName) {
    		console.log("............................... checkServiceListCByFile  . ");
        QUnit.test(funcName, function (assert) {  
        	  var timerFlag;
    	  		var done = assert.async(1);	
        	  function compare()
        	  { 
            	var flag = true;
            	var serListPath = "config/serviceListDVB_C.json";
            	var serList = readJSONFileArray(serListPath);
            	if (serList.length == allChannels_C.length) {
                var i;
                for (i = 0; i < allChannels_C.length; i++) {
                    if ((serList[i].name == allChannels_C[i].name) && (serList[i].uuid == allChannels_C[i].uuid)&& (serList[i].serviceId == allChannels_C[i].serviceId)
                        && (serList[i].streamId == allChannels_C[i].streamId)&& (serList[i].networkId == allChannels_C[i].networkId))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_C.length) {
                    flag = false;
                }
            	}
            	else {
                flag = false;
           	  }
						  return flag;
           	}
           	function serviceToCompare()
           	{
           		var result=compare();
           		assert.ok(result, "checkServiceListCByFile ");   
           		done();       		
           	}
    	  		getServiceListC();            	  
						timerFlag = setTimeout(serviceToCompare, 2000);               
        });    
}
function checkServiceListSByFile(funcName) {
        QUnit.test(funcName, function (assert) {  
        	  var timerFlag;
        	  console.log(".. checkServiceListSByFile  . ");
    	  		var done = assert.async(1);	
        	  function compare()
        	  { 
            	var flag = true;
            	var serListPath = "config/serviceListDVB_S.json";
            	var serList = readJSONFileArray(serListPath);
            	if (serList.length == allChannels_S.length) {
                var i;
                for (i = 0; i < allChannels_S.length; i++) {
                    if ((serList[i].name == allChannels_S[i].name) && (serList[i].uuid == allChannels_S[i].uuid)&& (serList[i].serviceId == allChannels_S[i].serviceId)
                        && (serList[i].streamId == allChannels_S[i].streamId)&& (serList[i].networkId == allChannels_S[i].networkId))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_S.length) {
                	  console.log("...checkServiceListSByFile value is error . ");
                    flag = false;
                }
            	}
            	else {
            		console.log("...checkServiceListSByFile ,length is error : "+ allChannels_S.length);
                flag = false;
           	  }
						  return flag;
           	}
           	function serviceToCompare()
           	{
           		var result=compare();
           		if(result==false)
           			console.log(".................................................serviceToCompare Fail..."); 
           		assert.ok(result, "checkServiceListSByFile ");   
           		done();      		
           	}
           	modeljs.dbgprint("...Begin to get S", 1);
           	var curtime= new Date();
           	begin_time= curtime.getTime();
            //console.log(".......Begin to get S :"+curtime.getTime());
    	  		getServiceListS();            	  
						timerFlag = setTimeout(serviceToCompare, 40000);               
        });    
}
function checkServiceT(expectNum,flag, funcName) {
    QUnit.test(funcName, function (assert) {
    	  var timerFlag;
    	  var done = assert.async(1);	
    	  $("#total").html("");    	
        function checkServiceTTimeout() {
        		if ((allChannels_T.length > 0)&&(flag==1)) {
            		sourceType = 1;
            		showServiceList(sourceType);
       			}
        		assert.equal(allChannels_T.length, expectNum, "getServiceT ");
            done();
        }; 
    	  getServiceListT();            	  
				timerFlag = setTimeout(checkServiceTTimeout, 2000);            	
    });  
}
function checkServiceC(expectNum,flag, funcName) {
    QUnit.test(funcName, function (assert) {
    	  var timerFlag;
    	  var done = assert.async(1);	
    	  $("#total").html("");    	
        function checkServiceCTimeout() {
        		if ((allChannels_C.length > 0)&&(flag==1)) {
            		sourceType = 0;
            		showServiceList(sourceType);
       			}
        		assert.equal(allChannels_C.length, expectNum, "getServiceC ");
            done();
        }; 
    	  getServiceListC();            	  
				timerFlag = setTimeout(checkServiceCTimeout, 2000);            	
    });     
}

function checkServiceS(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
    	  var timerFlag;
    	  var done = assert.async(1);	
    	  $("#total").html("");    	
        function checkServiceSTimeout() {
        		if (allChannels_S.length > 0) {
            		sourceType = 2;
            		showServiceList(sourceType);
       			}
        		assert.equal(allChannels_S.length, expectNum, "getServiceS ");
            done();
        }; 
    	  getServiceListS();            	  
				timerFlag = setTimeout(checkServiceSTimeout, 2000);            	
    });     
}
function previousChannel_T() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allChannels_T.length - 1;
    }
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel(0, allChannels_T[currentIndex].uuid, 0, allChannels_T[currentIndex].type, allChannels_T[currentIndex].id);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function nextChannel_T() {
    currentIndex++;
    if (currentIndex >= allChannels_T.length) {
        currentIndex = 0;
    }
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel(0, allChannels_T[currentIndex].uuid, 0, allChannels_T[currentIndex].type, allChannels_T[currentIndex].id);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function randomChannel_T() {
    currentIndex = Math.ceil(Math.random() * ((allChannels_T.length - 1) - 0) + 0);
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel(0, allChannels_T[currentIndex].uuid, 0, allChannels_T[currentIndex].type, allChannels_T[currentIndex].id);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function previousChannel_C() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allChannels_C.length - 1;
    }
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel(0, allChannels_C[currentIndex].uuid, 0, allChannels_C[currentIndex].type, allChannels_C[currentIndex].id);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function nextChannel_C() {
    currentIndex++;
    if (currentIndex >= allChannels_C.length) {
        currentIndex = 0;
    }
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel(0, allChannels_C[currentIndex].uuid, 0, allChannels_C[currentIndex].type, allChannels_C[currentIndex].id);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function randomChannel_C() {
    currentIndex = Math.ceil(Math.random() * ((allChannels_C.length - 1) - 0) + 0);
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel(0, allChannels_C[currentIndex].uuid, 0, allChannels_C[currentIndex].type, allChannels_C[currentIndex].id);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function playInputedChannel(sourceType, chn, funcName) {
    QUnit.test(funcName, function (assert) {
        if (sourceType == 1) {
            model.tvservice.playChannel(0, allChannels_T[chn].uuid, 0, allChannels_T[chn].type, allChannels_T[chn].id);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel(0, allChannels_C[chn].uuid, 0, allChannels_C[chn].type, allChannels_C[chn].id);
            $("#name").html(allChannels_C[chn].name);
        }
        assert.ok(true, "check playInputedChannel");
    });
}

function playInputedChannel(sourceType, chn, func_name) {
    QUnit.test(func_name, function (assert) {
        var done = assert.async(1);
        var timerFlag;
        var format="";
        var curTime=0;
        var aspect="";
        var starttimeNow=0;
        var stoptimeNow=0;
        var flag=false;
        var channelChanged=false;
        var info="";

        function playInputedChannelTimeout() {
        	  model.tvservice.onMainPlayChanged = null;
    				model.video.onMainPlayVideoFormatInfoChanged = null;
						if((format.length!=0)&&(aspect.length!=0)&&(channelChanged==true)&&(starttimeNow>0)&&(stoptimeNow>0))
						   flag=true;
            assert.ok(flag, "playInputedChannel");
            done();
        };
        
        model.tvservice.onMainPlayChanged = function (val) {       
             channelChanged=true;
        }   
        model.video.onMainPlayVideoFormatInfoChanged = function (val) {
    			if (val.length != 0) {
        			format = val;
             	info=info+" |"+format;
						 	$("#details").html(info);

        			aspect = model.tvservice.getVideoInfoFrameaspect();
             	info=info+" |"+aspect;
						 	$("#details").html(info);       			 	
       			 	
        			var pfResultNow = model.tvservice.getEitMainNow();
        			if (pfResultNow.length == 12) {
									starttimeNow = pfResultNow[2];
      						stoptimeNow = pfResultNow[3];
      						var start_now = new Date(pfResultNow[2] * 1000);
      						var stop_now = new Date(pfResultNow[3] * 1000);
      						info=info+"|"+ pfResultNow[1] + "|" + start_now.toLocaleString() + "|" + stop_now.toLocaleString()+"|"+pfResultNow[8];
									$("#details").html(info);
        			}
    			}
        }        
        
        if (sourceType == 1) {
            model.tvservice.playChannel(0, allChannels_T[chn].uuid, 0, allChannels_T[chn].type, allChannels_T[chn].id);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel(0, allChannels_C[chn].uuid, 0, allChannels_C[chn].type, allChannels_C[chn].id);
            $("#name").html(allChannels_C[chn].name);
        }
        timerFlag = setTimeout(playInputedChannelTimeout, 4000);
    });
}


function ui_getAudioTableInfo(event) {

    if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        if (event.rows.length > 0) {
            var Array;
            var audioIndex = model.tvservice.getAudioIndex();
            for (var i = 0; i < event.rows.length; i++) {
                if (audioIndex == event.rows[i][0]) {
                    Array = event.rows[i];
                    var audioIdent = model.sound.getAudioIdent();

                }
            }
        }
    }
}


function readAudioTableInfo(onReadAudioTableInfo) {
    var m_audioTrackIterator;
    if (m_audioTrackIterator != null)
        m_audioTrackIterator.disconnect();
    m_audioTrackIterator = model.tvservice.creatAudioTableIterator(
        true,
        [],
        [
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ID,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_NAME,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ISO639,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TYPE,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_PURPOSE,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TRACK
        ],
        [
            {field: TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ID, direction: 1}
        ],
        onReadAudioTableInfo
    );
    m_audioTrackIterator.readNextRows(999);
}

function onVideoFormatChanged(val) {
    if (val.length != 0) {
        infoBar = infoBar + " /videoFormat=" + val;
        var pfAspect = model.tvservice.getVideoInfoFrameaspect();
        infoBar = infoBar + " /pfAspect=" + pfAspect;
        var pfResultNow = model.tvservice.getEitMainNow();
        if (pfResultNow.length == 12) {
            var startimeNow = new Date(pfResultNow[2] * 1000);
            var stoptimeNow = new Date(pfResultNow[3] * 1000);
            infoBar = infoBar + "/EITNow->" + ";type:" + pfResultNow[1] + ";start:" + startimeNow.toLocaleString() + ";end:" + stoptimeNow.toLocaleString();
        }
        var pfResultNext = model.tvservice.getEitMainNext();
        if (pfResultNext.length == 12) {
            var startimeNext = new Date(pfResultNext[2] * 1000);
            var stoptimeNext = new Date(pfResultNext[3] * 1000);
            infoBar = infoBar + "/EITNext->" + ";type:" + pfResultNext[1] + ";start:" + startimeNext.toLocaleString() + ";end:" + stoptimeNext.toLocaleString();
        }
        $("#details").html(infoBar);
    }
}
function onCurAudioExistChaged(val) {
    if (val == 1)
        readAudioTableInfo(ui_getAudioTableInfo);
}
function onMainPlayChanged(val) {
    var pinRequest = model.parentlock.getPinRequest();
    if (pinRequest[0] != 0)
        return;
    var utcTime = model.datetime.getCurLocalTime();
    var date = new Date(utcTime * 1000);
    infoBar = date.toLocaleString();
    $("#details").html(infoBar);
    model.tvservice.onMainPlayVideoFormatInfoChanged = onVideoFormatChanged;
    model.tvservice.onAudioExistChaged = onCurAudioExistChaged;
    readAudioTableInfo(ui_getAudioTableInfo);
}
function disableMainPlayChangedCallback() {
		model.tvservice.onMainPlayChanged = null;
    model.tvservice.onMainPlayVideoFormatInfoChanged = null;
    model.tvservice.onAudioExistChaged = null;
}

function play(direction, sourceType) {
    console.log("............play.");
    $("#details").html("");
    if (direction == 1) {
        if (sourceType == 1)
            nextChannel_T();
        else
            nextChannel_C();
    }
    else if (direction == 0) {
        if (sourceType == 1)
            previousChannel_T();
        else
            previousChannel_C();
    }
    else {
        if (sourceType == 1)
            randomChannel_T();
        else
            randomChannel_C();
    }
    model.tvservice.onMainPlayChanged = onMainPlayChanged;

    return true;
}

function switchChannel(direction, sourceType, repeat, funcName) {
    console.log("............switchChannel.");
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        //play(direction, sourceType);
        var done = assert.async(times);

        function playTimeout() {
            try {
                if (QUnit.config.interrupt === true) {
                    throw new Error("Interrupt test case in switchChannel.");
                }
                if (i < times) {
                    assert.equal(play(direction, sourceType), true, "check play ");
                    i++;
                    $("#times").html(i);
                    done();
                    if (i < times)
                        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));
                    else
                        disableMainPlayChangedCallback();
                }
            } catch (e) {
                console.log(e.message);
                for (var left = 0; left < times - i; left++) {
                    done();
                    disableMainPlayChangedCallback();
                }
                //return;
            }
        }

        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));
    });
}

function randomSwitchChannel(repeat, funcName) {
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        var currentIndexT = Math.ceil(Math.random() * ((allChannels_T.length - 1) - 0) + 0);
        var currentIndexC = Math.ceil(Math.random() * ((allChannels_C.length - 1) - 0) + 0);

        function switch_T_C(val) {
            if (val % 2 == 0) {
                model.tvservice.playChannel(0, allChannels_T[currentIndexT].uuid, 0, allChannels_T[currentIndexT].type, allChannels_T[currentIndexT].id);
                $("#name").html(allChannels_T[currentIndexT].name);
            }
            else {
                model.tvservice.playChannel(0, allChannels_C[currentIndexC].uuid, 0, allChannels_C[currentIndexC].type, allChannels_C[currentIndexC].id);
                $("#name").html(allChannels_C[currentIndexC].name);
            }
            return true;
        }

        var done = assert.async(times);
        var interval = Math.ceil(Math.random() * (10000 - 1000) + 1000);

        try {
            timer = setInterval(function () {
                if (QUnit.config.interrupt == true) {
                    throw new Error("Interrupt test in randomSwitchChannle.");
                }
                console.log("......the time is  %d", i);
                if (i < times) {
                    assert.equal(switch_T_C(i), true, "check play ");
                    i++;
                    $("#times").html(i);
                    done();
                    if (i == times)
                        clearInterval(timer);
                }
            }, interval);
        } catch (ex) {
            console.log("Interrupt randow switch channel.");
            console.log(ex.message);
            return;
        }
    });
}
function channelUpT(repeat, funcName) {
    console.log("............................... channelUpT. ");
    $("#resultView table").html("");
        var direction = 1;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
}

function channelDownT(repeat, funcName) {
    console.log("............................... channelDownT. ");
    $("#resultView table").html("");
        var direction = 0;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
}
function channelRandomT(repeat, funcName) {
    console.log("............................... channelRandomT. ");
    $("#resultView table").html("");
        var direction = 2;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
}
function channelUpC(repeat, funcName) {
    console.log("............................... channelUpC. ");
    $("#resultView table").html("");
        var direction = 1;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
}

function channelDownC(repeat, funcName) {
    console.log("............................... channelDownC. ");
    $("#resultView table").html("");
        var direction = 0;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
}
function channelRandomC(repeat, funcName) {
    console.log("............................... channelRandomC. ");
    $("#resultView table").html("");
        var direction = 2;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
}

function getServiceListT_done_check(funcName) {
    console.log("............................... getServiceListT_done_check  . ");
    if (allChannels_T.length > 0) {
        QUnit.test(funcName, function (assert) {
            var flag = true;
            var serListPath = "serviceList.json";
            var serList = fileInput(serListPath);
            if (serList.length == allChannels_T.length) {
                var i;
                for (i = 0; i < allChannels_T.length; i++) {
                    if ((serList[i].name == allChannels_T[i].name) && (serList[i].majorNum == allChannels_T[i].majorNum)
                        && (serList[i].minorNum == allChannels_T[i].minorNum))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_T.length) {
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            assert.equal(flag, true, "check serListT ");

        });
    }
}

function checkAttr(attr, flag, chNum) {
    var result = false;
    if (attr == 0) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x80) != 0)) ||
            ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x80) == 0)))
            result = true;
    }
    else if (attr == 1) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x20) != 0)) || ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x20) == 0)))
            result = true;
    }
    else if (attr == 2) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x40) != 0)) ||
            ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x40) == 0)))
            result = true;
    }
    return result;
}
function ServiceListAttrDone(attr, flag, chNum) {
    QUnit.test("checkSerListAttrT test", function (assert) {
        assert.equal(checkAttr(parseInt(attr), parseInt(flag), parseInt(chNum)), true, "check serListAttr ");
    });
}

function getSkipListDone(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToSkipListT ");
    });
}
function modifyAttr(attr, flag, uuid) {
    model.servicelist.SetServiceAttribute(attr, flag, uuid);
}

//getSkipListAllT

function getSkipListAllT(funcName) {
    getSkipListT();
    setTimeout(getSkipListCountT, 2000, funcName);
}

function getSkipListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 32},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 2}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetSkip_T.bind(this)
    );
}

function onGetSkip_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        //skipChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetSkip_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getSkipListCountT(funcName) {
    $("#details").html(skipChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getSkipListAllT ");
    });
}

function addToSkipListT(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getSkipListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addSkipListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addSkipListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToSkipListT ");
    });
}


function delFromSkipListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromSkipListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getSkipListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delSkipListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delSkipListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromSkipListT ");
    });
}


//getSkipListAllT


//getSkipListAllC


function getSkipListAllC(funcName) {
    getSkipListC();
    setTimeout(getSkipListCountC, 2000, funcName);
}

function getSkipListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 32},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 3}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetSkip_C.bind(this)
    );
}

function onGetSkip_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        //skipChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetSkip_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getSkipListCountC(funcName) {
    $("#details").html(skipChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getSkipListAllC ");
    });
}

function addToSkipListC(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getSkipListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addSkipListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addSkipListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_C.length; i++) {
        if (uuid == skipChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToSkipListC ");
    });
}


function delFromSkipListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromSkipListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getSkipListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delSkipListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function delSkipListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_C.length; i++) {
        if (uuid == skipChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromSkipListC ");
    });
}


//getSkipListAllC

//getBlockListAllT

function getBlockListAllT(funcName) {
    getBlockListT();
    setTimeout(getBlockListCountT, 2000, funcName);
}

function getBlockListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 64},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 2}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetBlock_T.bind(this)
    );
}

function onGetBlock_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        // blockChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetBlock_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getBlockListCountT(funcName) {
    $("#details").html(blockChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getBlockListAllT ");
    });
}

function addToBlockListT(attr, flag, chNum, funcName) {
    console.log("...............................addToBlockListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getBlockListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addBlockListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addBlockListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_T.length; i++) {
        if (uuid == blockChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToBlockListT ");
    });
}


function delFromBlockListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromBlockListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getBlockListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delBlockListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delBlockListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_T.length; i++) {
        if (uuid == blockChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromBlockListT ");
    });
}


//getBlockListAllT


//getBlockListAllC

function getBlockListAllC(funcName) {
    getBlockListC();
    setTimeout(getBlockListCountC, 2000, funcName);
}

function getBlockListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 64},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 3}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetBlock_C.bind(this)
    );
}

function onGetBlock_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        // blockChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetBlock_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getBlockListCountC(funcName) {
    $("#details").html(blockChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getBlockListAllC ");
    });
}

function addToBlockListC(attr, flag, chNum, funcName) {
    console.log("...............................addToBlockListC . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getBlockListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addBlockListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addBlockListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_C.length; i++) {
        if (uuid == blockChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToBlockListC ");
    });
}


function delFromBlockListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromBlockListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getBlockListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delBlockListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function delBlockListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_C.length; i++) {
        if (uuid == blockChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromBlockListC ");
    });
}


//getBlockListAllC

function getServicesT_attrT_timeout(chNum, funcName) {
    $("#details").html(allChannels_T[chNum].attr + ";fav:" + (((allChannels_T[chNum].attr & 0x80) != 0) ? 1 : 0)
        + ";skip:" + (((allChannels_T[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_T[chNum].attr & 0x40) != 0) ? 1 : 0));
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getServicesAttrT ");
    });
}

function startGetMainPlay() {
    var info = model.tvservice.getMainPlay();
    return info;
}
function getMainPlay(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetMainPlay();
        assert.notEqual(val, null, "Test getMainPlay");
        if (val != null)
            $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
    });
}
function mainPlayChanged(sourceType, chn, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function getMainPlayChangedTimeout() {
            assert.ok(false, "mainPlayChanged timeout");
            done();
        };

        model.tvservice.onMainPlayChanged = function (val) {
            clearTimeout(timerFlag);
            assert.notEqual(val, null, "Test mainPlayChanged");
            done();
            if (val != null)
                $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
        }
        if (sourceType == 1) {
            model.tvservice.playChannel(0, allChannels_T[chn].uuid, 0, allChannels_T[chn].type, allChannels_T[chn].id);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel(0, allChannels_C[chn].uuid, 0, allChannels_C[chn].type, allChannels_C[chn].id);
            $("#name").html(allChannels_C[chn].name);
        }
        timerFlag = setTimeout(getMainPlayChangedTimeout, 5000);
    });
}
function startGetNoSignalMain() {
    var sig = model.tvservice.getNoSignalMain();
    return sig;
}
function getNoSignalMain(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetNoSignalMain();
        assert.ok(true, "Test getNoSignalMain");
        $("#details").html(val);
    });
}

function startGetSignalLevel() {
    var sig = model.tvservice.getSignalMainLevels();
    return sig;
}
function getSignalLevel(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetSignalLevel();
        assert.ok(true, "Test getSignalLevel");
        $("#details").html(val);
    });
}
function startGetSignalCn() {
    var sig = model.tvservice.getSignalMainCns();
    return sig;
}
function getSignalCn(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetSignalCn();
        assert.ok(true, "Test getSignalCn");
        $("#details").html(val);
    });
}
function listUpdateNotify() {
    listUpdate = true;
}
function checkChannelListUpdate(funcName) {
    QUnit.test(funcName, function (assert) {
        assert.ok(listUpdate, "onChannelListUpdate ");
    });
}
function onChannelListUpdate(funcName) {
    listUpdate = false;
    model.tvservice.onChannelListUpdate = listUpdateNotify;
    setTimeout(checkChannelListUpdate, 10000, funcName);
}

function playFirstChannelT() {
    model.tvservice.playChannel(0, allChannels_T[0].uuid, 0, allChannels_T[0].type, allChannels_T[0].id);
}
//getFavListAllT

function getFavListAllT(funcName) {
    getFavListT();
    setTimeout(getFavListCountT, 2000, funcName);
}

function getFavListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 128},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 2}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetFav_T.bind(this)
    );
}

function onGetFav_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        //favChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetFav_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getFavListCountT(funcName) {
    $("#details").html(favChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getFavListAllT ");
    });
}

function addToFavListT(attr, flag, chNum, funcName) {
    console.log("...............................addToFavListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getFavListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addFavListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addFavListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_T.length; i++) {
        if (uuid == favChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToFavListT ");
    });
}


function delFromFavListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromFavListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getFavListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delFavListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delFavListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_T.length; i++) {
        if (uuid == favChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromFavListT ");
    });
}

//getFavListAllT


//getFavListAllC

function getFavListAllC(funcName) {
    getFavListC();
    setTimeout(getFavListCountC, 2000, funcName);
}

function getFavListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 128},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 3}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_NO,
            ServicelistModel.SERVICELIST_FIELD_TYPE,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetFav_C.bind(this)
    );
}

function onGetFav_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        //favChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetFav_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getFavListCountC(funcName) {
    $("#details").html(favChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getFavListAllC ");
    });
}

function addToFavListC(attr, flag, chNum, funcName) {
    console.log("...............................addToFavListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getFavListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addFavListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addFavListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_C.length; i++) {
        if (uuid == favChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToFavListC ");
    });
}


function delFromFavListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromFavListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getFavListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(delFavListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function delFavListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_C.length; i++) {
        if (uuid == favChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, false, "check delFromFavListT ");
    });
}

//getFavListAllC