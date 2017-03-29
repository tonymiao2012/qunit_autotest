// --------------------------------------------------------
/**
 * @brief Javascript debug tools
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

var tv = true;
var usrAgent = navigator.userAgent;
var FUNC_INDEX = (usrAgent.indexOf('Opera') > -1 || usrAgent.indexOf('Firefox') > -1) ? 2 : 4;
var versionInfo = '| hisenseUI ' +
    'Revision[31046], ' +
    'Language Revision[31012], ' +
    'Date[2017-03-24 T15:42:08.680877Z] |';

var isLogOn = true, addTestOnlyJs = null;

tv ? log.warn(versionInfo) : console.log(versionInfo);

function DebugLevel() {

}

DebugLevel.ALWAYS = 1;
DebugLevel.ERROR = 1000;
DebugLevel.WARNING = 2000;
DebugLevel.INFO = 3000;


/**
 * Prints a debug message into debug HTML element.
 *
 * @param content1
 *      The string to print.
 */

function debugPrint(content, debugLevel) {
    try {
        debugFuncAndLine(content, debugLevel);
    }
    catch (ex) {
        console.log(content + debugLevel);
    }
}

function DBG_INFO(content, debugLevel) {

    (isNaN(debugLevel)) && (debugLevel = DebugLevel.INFO);
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, debugLevel);

}

function DBG_ERROR(content) {
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, DebugLevel.ERROR);
}

function DBG_WARN(content) {
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, DebugLevel.WARNING);
}

function DBG_ALWAYS(content) {
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, DebugLevel.ALWAYS);
}

function DBG_TODO(content) {
    debugFuncAndLine("[TODO][" + content + "]", DebugLevel.ERROR);
}

function DBG_ONXX(module, onxx) {
    if (tv) return false;
    console.log("%c[" + module + "][" + onxx + "]", "color:#ff0ff0");
    //debugFuncAndLine("[" + module + "][" + onxx + "]", DebugLevel.ERROR);
}

function debugWhoCallMe(func) {
    try {
        throw Error('')
    }
    catch (err) {
        try {
            //var idx = usrAgent.indexOf('Opera') > -1 ? 2 : 4; // Chrome = 4
            var caller_func_line = err.stack.split("\n")[FUNC_INDEX].split("@")[0];
            if (!!caller_func_line) {
                var debugStr = "[" + func + "][caller]" + caller_func_line;
                tv ? log.error(debugStr) : console.log("%c" + debugStr, "color:red");
            }
        }
        catch (ex) {
            tv ? log.error(ex.message) : console.log(ex.message);
        }
    }
}

function debugFuncAndLine(content, debugLevel) {
    if (!isLogOn && DebugLevel.ERROR != debugLevel) {
        return;
    }
    isNaN(debugLevel) && (debugLevel = DebugLevel.INFO);
    try {
        throw Error('');
    }
    catch (err) {
        //var idx = usrAgent.indexOf('Opera') > -1 ? 2 : 4; // Chrome = 4
        var caller_func_line = err.stack.split("\n")[FUNC_INDEX];
        var arrs, fuc_line;
        if (!!caller_func_line) {
            arrs = caller_func_line.split(/\)|\//g);
            fuc_line = arrs[arrs.length - 2];
        }
        else {
            fuc_line = '';
        }
        var logStr = fuc_line + ": " + content;
        switch (debugLevel) {
            case DebugLevel.INFO:
                tv ? log.info(logStr) : console.log(logStr);
                break;
            case DebugLevel.ERROR:
                tv ? log.error(logStr) : console.log("%c" + logStr, "color:red");
                break;
            case DebugLevel.ALWAYS:
            case DebugLevel.WARNING:
                tv ? log.warn(logStr) : console.log("%c" + logStr, "color: blue");
                break;

            default :
                tv ? log.error(logStr) : console.log(logStr);
                break;
        }
    }
}

//function printVersion() {
//    if(!tv) {
//        return;
//    }
//
//    log.warn('~~~~~~~~~~~~~~~~| hisenseUI ' + verNum + ' |~~~~~~~~~~~~~~~~');
//    log.warn(' ');
//    log.warn(verDate);
//    log.warn(' ');
//    log.warn('--------------------------------------------------');
//}
//printVersion();

function objToString(obj) {
    return JSON.stringify(obj);
}

function strToObject(str) {
    var obj = null;
    try {
        obj = JSON.parse(str);
    }
    catch (ex) {
        obj = str;
        //DBG_INFO(str + ' to object error: ' + ex.message, DebugLevel.ERROR);
    }
    return obj;
}

tv == false && (addTestOnlyJs = new AddTestOnlyJs());
function AddTestOnlyJs() {
    try {
        DBG_INFO('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AddTestOnlyJs()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        var testOnlyJs = 'module/setting/testonly.js';
        var tmpScript = document.createElement('script');
        tmpScript.type = "text/javascript";
        tmpScript.src = testOnlyJs;
        document.head.appendChild(tmpScript);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
