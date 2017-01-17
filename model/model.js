// --------------------------------------------------------
/**
 * @brief Convenience model for accessing
 * the middleware model via modeljs browser plugin.
 * This implementation hides all access to the actual modeljs
 * browser plugin and allows easy access to the model. The
 * model must be extended with sub models.
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------
var GLOBAL;
GLOBAL={
	DISABLE_MESSAGE:false
};
var TVMode = ("undefined" != typeof (modeljs));
// --------------------------------------------------------
/**
 * TableIterator class.
 * Represents an iterator returned by sub models which
 * provide access to table objects.
 *
 * @param table
 *      The table object the iterator will be created for.
 * @param readOnly
 *      Whether read-only access (true) or read-write (false)
 * @param selections
 *      The selections.
 * @param fields
 *      The requested fields to return in the iterator results.
 * @param orders
 *      The requested orders.
 * @param handler
 *      The handler to notify of iterator events.
 */
function TableIterator(table, readOnly, selections, fields, orders, handler) {
    /** The modeljs iterator instance */
    var m_iterator = null;
    /** The stored handler */
    var m_handler = handler;


    // --------------------------------------------------------------
    // Notification handlers
    // --------------------------------------------------------------

    /**
     * Handles the notifyReadRow event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param rowRead
     *      The row read
     */
    var handleReadRow = function (rowRead) {
        var convertedRow = new Array();
        // For every column of row
        for (var i = 0; i < rowRead.length; i++) {
            convertedRow.push(rowRead[i]);
        }
        var event = {
            type: TableIterator.EVENT_TYPE_ROWS_READ,
            rows: [convertedRow]
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifyReadRowChunk event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param rowsRead
     *      The rows read
     */
    var handleReadRowChunk = function (rowsRead) {
        var convertedRows = new Array();
        // For every row
        for (var i = 0; i < rowsRead.length; i++) {
            var rowRead = rowsRead[i];
            var convertedRow = new Array();
            // For every column in row
            for (var j = 0; j < rowRead.length; j++) {
                convertedRow.push(rowRead[j]);
            }
            convertedRows.push(convertedRow);
        }

        var event = {
            type: TableIterator.EVENT_TYPE_ROWS_READ,
            rows: convertedRows
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifyTotalCount event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param count
     *      The total count of rows
     */
    var handleTotalCount = function (count) {
        var event = {
            type: TableIterator.EVENT_TYPE_TOTAL_COUNT,
            totalCount: count
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifySeekToRow event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param count
     *      The total count of rows
     */
    var handleSeekToRow = function (seekResult) {
        var event = {
            type: TableIterator.EVENT_TYPE_SEEK_TO_ROW,
            result: seekResult
        };
        m_handler && m_handler(event);
    }.bind(this);


    var handleCursorPosition = function (cursor) {
        var event = {
            type: TableIterator.EVENT_TYPE_CURSOR,
            cursor: cursor
        };
        m_handler && m_handler(event);
    }.bind(this);

    var handlerTableUpdated = function (result) {
        var event = {
            type: TableIterator.EVENT_TYPE_UPDATE,
            result: result
        };
        m_handler && m_handler(event);
    }.bind(this);
    // --------------------------------------------------------------
    // Iterator methods
    // --------------------------------------------------------------

    /**
     * Reads the next "count" rows. Result will be received as event.
     *
     * @param count
     *      The number of rows to read.
     */
    this.readNextRows = function (count) {
        m_iterator.readNextRows(count);
    }

    this.readNextRow = function () {
        m_iterator.readNextRow();
    }

    /**
     * Reads the previous "count" rows. Result will be received as event.
     *
     * @param count
     *      The number of rows to read.
     */
    this.readPreviousRows = function (count) {
        m_iterator.readPrevRows(count);
    }

    /**
     * Fetches the total count of available rows. Result will be received as event.
     */
    this.fetchTotalCount = function () {
        m_iterator.totalCount();
    }

    /**
     * Seeks to a certain row. Result will be received as event.
     *
     * @param offset
     *      The offset to seek to - depending on type
     * @param type
     *      The seek type: SEEK_SET/SEEK_CUR/SEEK_END
     */
    this.seekToRow = function (offset, type) {
        m_iterator.seekToRow(offset, type);
    }

    this.getCurrentRow = function () {
        return m_iterator.getCurrentRow();
    }

    this.getCurrentRows = function () {
        return m_iterator.getCurrentRows();
    }

    this.readCursorPosition = function () {
        m_iterator.readCursorPosition();
    }
    this.getTotalCount = function () {
        return m_iterator.getTotalCountFromCache();
    }

    this.disconnect = function () {
        //DBG_ALWAYS("MTK product do not need disconnect");
        return true;
        m_iterator.removeEventListener("notifyReadRow", handleReadRow);
        m_iterator.removeEventListener("notifyReadRowChunk", handleReadRowChunk);
        m_iterator.removeEventListener("notifyTotalCount", handleTotalCount);
        m_iterator.removeEventListener("notifySeekToRow", handleSeekToRow);
        m_iterator.removeEventListener("notifyCursorPosition", handleCursorPosition);
        m_iterator.removeEventListener("notifyUpdate", handlerTableUpdated);

        m_iterator = null;

        return true;

    }


    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    /**
     * Initializes the iterator.
     */
    var initialize = function (table, readOnly, selections, fields, orders, handler) {
        // Convert selections

        var convertedSelections = modeljs.createTableSelectionVector();
        if (selections) {
            for (var i = 0; i < selections.length; i++) {
                var selection = selections[i];
                var convertedSelection = modeljs.createTableSelection(
                    selection.field, selection.condition, selection.value);
                convertedSelections.push(convertedSelection);
            }
        }

        // Convert fields
        var convertedFields = modeljs.createNumberVector();
        if (fields) {
            for (var i = 0; i < fields.length; i++) {
                convertedFields.push(fields[i]);
            }
        }

        // Convert orders
        var convertedOrders = modeljs.createTableOrderVector();
        if (orders) {
            for (var i = 0; i < orders.length; i++) {
                var order = orders[i];
                var convertedSelection = modeljs.createTableOrder(
                    order.field, order.direction);
                convertedOrders.push(convertedSelection);
            }
        }

        // Create and connect iterator
        m_iterator = table.createIterator(
            (readOnly ? modeljs.ITERATOR_TYPE_READONLY_AUTOMATIC : modeljs.ITERATOR_TYPE_READWRITE_AUTOMATIC),
            convertedSelections,
            convertedFields,
            convertedOrders);

        m_iterator.addEventListener("notifyReadRow", handleReadRow);
        m_iterator.addEventListener("notifyReadRowChunk", handleReadRowChunk);
        m_iterator.addEventListener("notifyTotalCount", handleTotalCount);
        m_iterator.addEventListener("notifySeekToRow", handleSeekToRow);
        // ...
        m_iterator.addEventListener("notifyCursorPosition", handleCursorPosition);
        m_iterator.addEventListener("notifyUpdate", handlerTableUpdated);
        m_iterator.connect();

    }
    initialize(table, readOnly, selections, fields, orders);

    this.tableFlag = 'table created';

}

{
    try {
        // --------------------------------------------------------------
        // Static constants
        // --------------------------------------------------------------
        TableIterator.EVENT_TYPE_ROWS_READ = 1;
        TableIterator.EVENT_TYPE_TOTAL_COUNT = 2;
        TableIterator.EVENT_TYPE_SEEK_TO_ROW = 3;
        TableIterator.EVENT_TYPE_CURSOR = 4;
        TableIterator.EVENT_TYPE_UPDATE = 5;
        TableIterator.EVENT_TYPE_READY = 6;

        TableIterator.SEEK_SET = modeljs.LOMODEL_SEEK_SET;
        TableIterator.SEEK_CUR = modeljs.LOMODEL_SEEK_CUR;
        TableIterator.SEEK_END = modeljs.LOMODEL_SEEK_END;
    }
    catch (ex) {
        //log.error("_______________model error" + ex.message);
    }
}


// --------------------------------------------------------
/**
 * SubModel class. This class is a base class for
 * all sub models.
 *
 * @param parentModel
 *      The main model the submodel belongs to.
 */
// --------------------------------------------------------
function SubModel(parentModel, definesClass) {
    /** The parent model instance */
    var m_parentModel = parentModel;
    /** The class with internal model value defines. */
    var m_definesClass = definesClass;
    /** Registered model objects */
    var m_registrations = {};
    /** Whether sub model is ready */
    var m_isReady = false;

    var currentLoadType = MDLOADTYPE.PRELOAD;

    this.setCurrentLoadType = function(v){
        currentLoadType = v;
    }

    function checkContinueRegister(name){
        //console.error("preload[" + currentLoadType + "], name[" + name + "]");
        if(MDLOADTYPE.PRELOAD == currentLoadType) return modelConfig.preloadVal.indexOf(name) > -1;
        return modelConfig.preloadVal.indexOf(name) < 0;
    }

    /**
     * Returns the modeljs root interface.
     *
     * @returns the modeljs root interface.
     */
    this.getRootInterface = function () {
        return m_parentModel.getRootInterface();
    }

    /**
     * Registers a model object for this sub model.
     *
     * @param name
     *      The name of the object.
     * @param l
     *      The listeners to register. [ { event: x, handler: y } ]
     */
    this.registerObject = function (name, l) {
        //console.error("register object: " + name);
        m_registrations[name] = {
            object: null,
            listeners: l
        };

        // TODO: mtk has no biz...
        this.handleApiObjectAdded(name, -1);
    }

    /**
     * Internal method for registering a simple model object ( integer, string )
     */
    var registerSimpleObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        if(!checkContinueRegister(name)) return false;
        // Set default getterConverter if none specified
        if (!getterConverter) {
            getterConverter = function (value) {
                return value;
            }
        }

        // Set default setterConverter if none specified
        if (!setterConverter) {
            setterConverter = function (value) {
                return value;
            }
        }

        // Register getter if specified
        if (getterName) {
            this[getterName] = function () {
                try {
                    var object = this.getObject(name);
                    return getterConverter(object.getValue());
                }
                catch (ex) {
                    log.error("get value[" + name + "] error." + ex.message);
                    return "";
                }
            }
        }

        // Register setter if specified
        if (setterName) {
            this[setterName] = function (value) {
                try {
                    var object = this.getObject(name);
                    object.setValue(setterConverter(value));
                }
                catch (ex) {
                    log.error("set value[" + name + "] error." + ex.message);
                }
            }
        }

        // Register handler if specified
        //if (handlerName) {
        //    this[handlerName] = null;
        //}

        var handleValueChanged = function (value) {

            if (GLOBAL.DISABLE_MESSAGE) {
                return;
            }

            var handler = this[handlerName];
            if (handler) {
                handler(getterConverter(value));
            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: "notifyNewValue",
                    handler: handleValueChanged
                }
            ]);

    }.bind(this);

    /**
     * Registers an integer model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerIntegerObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter);
    }

    /**
     * Registers a string model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerStringObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter);
    }

    /**
     * Internal method for registering a vector model object (IntegerVector or StringVector).
     */
    var registerVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter, isInteger) {
        if(!checkContinueRegister(name)) return false;
        // Set default getterConverter if none specified
        if (!getterConverter) {
            getterConverter = function (value) {
                // Convert modeljs vector to javascript array
                var convertedValue = new Array();
                for (var i = 0; i < value.length; i++) {
                    var element = value[i];
                    convertedValue.push(element);
                }
                return convertedValue;
            }
        }

        // Set default setterConverter if none specified
        if (!setterConverter) {
            setterConverter = function (value) {
                // Convert javascript array to modeljs vector
                var convertedValue = (isInteger ? modeljs.createNumberVector() : modeljs.createStringVector());
                for (var i = 0; i < value.length; i++) {
                    var element = value[i];
                    convertedValue.push(element);
                }
                return convertedValue;
            }
        }

        // Register getter if specified
        if (getterName) {
            this[getterName] = function () {
                var object = this.getObject(name);
                return getterConverter(object.getVector());
            }
        }

        // Register setter if specified
        if (setterName) {
            this[setterName] = function (value) {
                var object = this.getObject(name);
                object.setVectorElements(setterConverter(value));
            }
        }

        // Register handler if specified
        //if (handlerName) {
        //    this[handlerName] = null;
        //}


        var handleValueChanged = function (value) {

            if (GLOBAL.DISABLE_MESSAGE) {
                return;
            }

            if (handlerName) {
                var handler = this[handlerName];
                if (handler) {
                    handler(getterConverter(value));
                }
            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: (isInteger ? "notifyIntegerVector" : "notifyStringVector"),
                    handler: handleValueChanged
                }
            ]);

    }.bind(this);

    /**
     * Registers an integer vector model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerIntegerVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerVectorObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, true);
    }

    /**
     * Registers an integer vector model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerStringVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerVectorObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, false);
    }

    /**
     * Registers an action model object.
     *
     * @param name
     *      The name of the object.
     * @param methods
     *      The action methods [ {name: x, method: y} ]. First parameter of
     *      the method is "object".
     * @param handlerName
     *      The name of the result handler "onX" or null.
     */
    this.registerActionObject = function (name, methods, handlerName, handlerError) {
        if(!checkContinueRegister(name)) return false;
        // Register methods
        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];

            this[method.name] = function (boundMethod) {
                newArguments = Array.prototype.slice.call(arguments);
                newArguments[0] = this.getObject(name);
                boundMethod.method.apply(this, newArguments);
            }.bind(this, method);
        }

        // Register handler if specified
        //if (handlerName) {
        //    this[handlerName] = null;
        //}

        var handleResult = function (actionId, result) {

            if (GLOBAL.DISABLE_MESSAGE) {
                return;
            }

            if (handlerName && this[handlerName]) {
                // Convert result from modeljs map to normal JS map:
                var convertedResult = new Array();
                for (var i = 0; i < result.keys.length; i++) {
                    var key = result.keys[i];
                    convertedResult[key] = result[key];
                }

                // Call handler
                this[handlerName](actionId, convertedResult);
            }
        }.bind(this);

        if (handlerError) {
            this[handlerError] = null;
        }

        var handleError = function (actionId, errorCode) {

            if (GLOBAL.DISABLE_MESSAGE) {
                return;
            }

            if (handlerError && this[handlerError]) {

                this[handlerError](actionId, errorCode);

            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: "notifyResult",
                    handler: handleResult
                },
                {
                    event: 'notifyExecutionError',
                    handler: handleError
                }
            ]);
    }

    /**
     * Registers a table model object.
     *
     * @param name
     *      The name of the object.
     * @param iteratorCreatorName
     *      The name of the iterator creator method "createX" or null.
     */
    this.registerTableObject = function (name, iteratorCreatorName) {
        if(!checkContinueRegister(name)) return false;
        // Register iterator creator if specified
        if (iteratorCreatorName) {
            this[iteratorCreatorName] = function (readOnly, selections, fields, orders, handler) {
                var object = this.getObject(name);
                return new TableIterator(object, readOnly, selections, fields, orders, handler);
            }.bind(this);
        }

        // Register object
        this.registerObject(
            name, []);
    }

    /**
     * Returns the actual modeljs object for the given name.
     *
     * @param name
     *      The name of the registered model object.
     * @returns bool
     *      The modeljs object instance.
     */
    this.getObject = function (name) {
        return m_registrations[name].object;
    }

    /**
     * Returns whether sub model is ready (i.e. for all
     * registered model objects a modeljs object instance
     * has been received.
     *
     * @returns bool
     *      Whether the sub model is ready.
     */
    this.isReady = function () {
        if (m_isReady) {
            return m_isReady;
        }
        for (var key in m_registrations) {
            var object = m_registrations[key].object;
            if (!object) {
                return false;
            }
        }
        return true;
    }

    /**
     * Handler for notifications of object instances which
     * are now available.
     *
     * @param name
     *      The name of the available object.
     * @param spec
     *      The type of the object.
     */
    this.handleApiObjectAdded = function (name, spec) {

        if (name in m_registrations) {
            var registration = m_registrations[name];

            // Create object
            var object = TVMode ? m_parentModel.getRootInterface().createObject(name) : {};

            //  Register event listeners
            if (registration.listeners) {
                for (var i = 0; i < registration.listeners.length; i++) {
                    var listener = registration.listeners[i];
                    TVMode && object.addEventListener(listener.event, listener.handler);
                }
            }
            TVMode && object.connect();

            registration.object = object;

            // Ready
            if (!m_isReady) {
                m_isReady = this.isReady();
                m_isReady && m_parentModel.handleSubModelReady();
            }
        }
    }
}

{
    // --------------------------------------------------------------
    // Static functions
    // --------------------------------------------------------------
    /**
     * Registers all static constants starting with groupPrefix from definesClass
     * with modelClass. In modelClass the stripPrefix will be stripped from
     * the name.
     */
    SubModel.registerStaticConstants = function (modelClass, definesClass, groups) {
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var groupPrefix = group.groupPrefix;
            var stripPrefix = group.stripPrefix;
            for (var key in definesClass) {
                if (key.indexOf(groupPrefix) == 0) {
                    var strippedKey = key.substr(stripPrefix.length);
                    modelClass[strippedKey] = definesClass[key];
                }
            }
        }

    }

}


/**
 * The main Model class.
 */
function Model() {
    /** The registered sub models. */
    var m_registrations = {};
    /** Number of sub models which are not yet ready. */
    var m_registrationsNotReady = 0;

    // --------------------------------------------------------------
    // Methods
    // --------------------------------------------------------------
    /**
     * Registers a sub model.
     * @param name
     *       The name of the sub model.
     * @param modelClass
     *       The class to instantiate in order to create
     *       the sub model.
     */
    var registerModel = function (name, modelClass, loadType) {
        if (!m_registrations[name]) {
            if (TVMode && -1 == modeljs.createmodel("servicemode" == name ? ".servicemode." : name))return;
            this[name] = m_registrations[name] = new modelClass(this);
        }
        this[name].setCurrentLoadType(loadType);
        if (this[name].registerSubObject) this[name].registerSubObject(loadType);
    }.bind(this);

    this.createSubModel = function (configArr, loadType) {
        configArr.forEach(function (v, k) {
            //if (!TVMode) console.log("create sub model: " + v.name + ", " + v.modelClass);
            registerModel(v.name, eval(v.modelClass), loadType);
        });
    }

    /**
     * Initializes the model. This method must be called
     * after registering all event listeners but before
     * accessing the model.
     */
    this.initialize = function () {
        if (TVMode) rootInterface.connect();
    }

    /**
     * Handles a sub model ready notfication and calls
     * the onModelReady handler if all sub models are ready.
     */
    this.handleSubModelReady = function () {
        m_registrationsNotReady--;

        if (m_registrationsNotReady == 0) {
            this.onModelReady && this.onModelReady();
        }
        return true;
    };

    /**
     * Returns the modeljs root interface.
     */
    this.getRootInterface = function () {
        return rootInterface;
    };

    /** Handler to be called when model is ready. */
    this.onModelReady = null;

    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    // Create model root interface
    var rootInterface = TVMode ? modeljs.createRootInterface() : {};
    //rootInterface.addEventListener("apiObjectAdded", handleApiObjectAdded);
}

{
    try {
        // --------------------------------------------------------------
        // Static constants
        // --------------------------------------------------------------
        Model.FIELD_COND_NONE = modeljs.FIELD_COND_NONE;
        Model.FIELD_COND_EQUAL = modeljs.FIELD_COND_EQUAL;
        Model.FIELD_COND_CONTAINS = modeljs.FIELD_COND_CONTAINS;
        Model.FIELD_COND_LESS = modeljs.FIELD_COND_LESS;
        Model.FIELD_COND_LESSEQUAL = modeljs.FIELD_COND_LESSEQUAL;
        Model.FIELD_COND_GREATER = modeljs.FIELD_COND_GREATER;
        Model.FIELD_COND_GREATEREQUAL = modeljs.FIELD_COND_GREATEREQUAL;
        Model.FIELD_COND_ALL_BITS_SET = modeljs.FIELD_COND_ALL_BITS_SET;
        Model.FIELD_COND_ALL_BITS_CLEARED = modeljs.FIELD_COND_ALL_BITS_CLEARED;
        Model.FIELD_COND_ANY_BIT_SET = modeljs.FIELD_COND_ANY_BIT_SET;
        Model.FIELD_COND_ANY_BIT_CLEARED = modeljs.FIELD_COND_ANY_BIT_CLEARED;
        Model.FIELD_COND_NOT_EQUAL = modeljs.FIELD_COND_NOT_EQUAL;
        Model.FIELD_COND_END = modeljs.FIELD_COND_END;
    }
    catch (ex) {
        //debugPrint("_______________model error" + ex.message);
    }
}


/**
 * ModelLoader class responsible for loading
 * all sub model javascript files.
 * 加入load模块数组判断
 */
function ModelLoader(onLoadedHandler, configArr) {

    /// List of modules to load in given order

    var MODEL_MODULES = [];
    configArr.forEach(function (v, k) {
        MODEL_MODULES.push(v.path);
    });
    /// Number of loaded modules
    var loadedModules = 0;

    for (var i = 0; i < MODEL_MODULES.length; i++) {
        var module = MODEL_MODULES[i];
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = module;
        script.onload = function () {
            loadedModules++;
            if (loadedModules == MODEL_MODULES.length) {
                onLoadedHandler();
            }
        };
        document.head.appendChild(script);
    }
}

var modelConfig = {
    preloadVal: [
        "de.loewe.sl2.i32.sound.main.volume",
        "de.loewe.sl2.i32.sound.main.mute",
        "tvapi.i32.system.stop.animation",
        "tvapi.str.system.am.msg",
        "tvapi.str.system.cur.brand",
        "tvapi.i32.system.open.from.standby",
        "tvapi.i32.system.firstInstallation",
        "tvapi.i32.system.user.mode",
        "tvapi.i32.system.menu.highlight.control",
        "tvapi.i32.system.input.current.inLock",
        "tvapi.str.basic.settings.tvset.location",
        "de.loewe.sl2.i32.basic.settings.menu.delay.disappear",
        "tvapi.i32.language.osd",
        "de.loewe.sl2.i32.cec.functionality",
        "tvapi.i32.cec.judge.audio.device.exist",
        "de.loewe.sl2.i32.cec.hdmi.devices.arc.state",
        "de.loewe.sl2.datetime.timezone",
        "tvapi.i32.timerfunctions.time.format",
        "de.loewe.sl2.i64.datetime.time.utc",
        "de.loewe.sl2.i64.datetime.local.time",
        //"de.loewe.sl2.i32.hisfactory.state.open", ToDo
        "tvapi.i32.hisfactory.state.open",
        "de.loewe.sl2.i32.hisfactory.aging",
        "de.loewe.sl2.i32.hisfactory.current.source",
        "de.loewe.sl2.i32.hisfactory.tofactory.opition",
        "tvapi.i32.tts.switch.status",
        "de.loewe.sl2.i32.tvservice.nosignal.main",
        "de.loewe.sl2.i32.tvservice.played.success.livetv",
        "tvapi.i32.tvservice.lock.status",
        "de.loewe.sl2.vstr.tvservice.play.main",
        "tvapi.i32.tvservice.play.fav.channel.list",
        "tvapi.i32.tvservice.list.saved",
        "tvapi.str.tvservice.video.format.info",
        "tvapi.str.tvservice.audio.information",
       // "tvapi.action.tvservice.get.pfinfo",
       // "tvapi.action.tvservice.get.pfinfo2",
        "de.loewe.sl2.vstr.tvservice.eit.main-now",
        "de.loewe.sl2.vstr.tvservice.eit.main-next",
        //"tvapi.vint32.servicemode.tunerinfo.signallevels",
        //"tvapi.vint32.servicemode.tunerinfo.signalqualities",
        "de.loewe.sl2.i32.servicemode.tunerinfo.enable",
        "de.loewe.sl2.vint.tunerinfo.signal.rflevel",
        "de.loewe.sl2.vint.tunerinfo.signal.cn",
        "tvapi.vstr.source.input.name",
        "tvapi.i32.source.input.current",
        "de.loewe.sl2.str.parental.lock.pin",
        "de.loewe.sl2.i32.parental.lock.switch.mode",
        "tvapi.i32.parental.lock.current.time.inLock",
        "tvapi.table.servicelist.list",
        "tvapi.str.tvservice.source.video.format.info",
        "tvapi.action.software.update.start.search",
        "tvapi.i32.system.screen.saver.control",
        "tvapi.i32.system.notifications.control",
        "tvapi.i32.source.input.mhl.available",
        "de.loewe.sl2.i32.channel.search.source",
        "tvapi.i32.timerfunctions.new.area.time.zone",
        "tvapi.i32.timerfunctions.daylight.savings",
        "tvapi.str.system.feature.code",
        "tvapi.i32.network.enum.network.config",
        "tvapi.action.network.test.start",
        "tvapi.i32.system.bluetooth.support",
        "de.loewe.sl2.table.servicelist.list",
        "de.loewe.sl2.str.video.format.info",
        "de.loewe.sl2.str.video.frame.aspect",
        "de.loewe.sl2.i32.video.cc.exist",
        "de.loewe.sl2.tvservice.audio.table",
        "de.loewe.sl2.i32.sound.enum.ident",
        "de.loewe.sl2.i32.datetime.deviation.fromutc",
        "de.loewe.sl2.i32.datetime.format"
    ],
    "preload": [
        {name: "sound", modelClass: "SoundModel", path: "model/model-sound.js"},
        {name: "system", modelClass: "SystemModel", path: "model/model-system.js"}
    ],
    "common": [
        {name: "sound", modelClass: "SoundModel", path: "model/model-sound.js"},
        {name: "servicelist", modelClass: "ServicelistModel", path: "model/model-servicelist.js"},
        {name: "tvservice", modelClass: "TvserviceModel", path: "model/model-tvservice.js" },
        {name: "closedcaption", modelClass: "ClosedcaptionModel", path: "model/model-closedcaption.js"},
        {name: "parentlock", modelClass: "Parental_lockModel", path: "model/model-parental-lock.js"},
        {name: "servicemode", modelClass: "ServiceModeModel", path: "model/model-servicemode.js"},
        {name: "timerfunc", modelClass: "Timer_functionsModel", path: "model/model-timer-functions.js"},
        {name: "video", modelClass: "VideoModel", path: "model/model-video.js"},
        {name: "channelSearch", modelClass: "Channelsearch_atscModel", path: "model/model-channelsearch-atsc.js"}
    ],
    "NA": [
        {name: "servicemode", modelClass: "ServiceModeModel", path: "model/model-servicemode.js"},
        {name: "channelSearch", modelClass: "Channelsearch_atscModel", path: "model/model-channelsearch-atsc.js"}
    ],
    "SA": [
        {name: "epg", modelClass: "EpgModel", path: "model/model-epg.js"},
        {name: "timerlist", modelClass: "TimerlistModel", path: "model/model-timerlist.js"},
        {name: "timeshift", modelClass: "TimeshiftModel", path: "model/model-timeshift.js"},
        {name: "ci", modelClass: "Common_interfaceModel", path: "model/model-ci.js"},
        {name: "channelSearch", modelClass: "Channelsearch_isdbModel", path: "model/model-channelsearch-isdb.js"},
        {name: "ginga", modelClass: "GingaModel", path: "model/model-ginga.js"},
        {name: "mheg5", modelClass: "Mheg5Model", path: "model/model-mheg5.js"},
        {name: "bluetooth", modelClass: "BluetoothModel", path: "model/model-bluetooth.js"},
        {name: "speech", modelClass: "SpeechModel", path: "model/model-speech.js"},
        {name: "pvr", modelClass: "PvrModel", path: "model/model-pvr.js"},
        {name: "hotel", modelClass: "HotelModel", path: "model/model-hotel.js"}
    ],
    "COL": [
        {name: "epg", modelClass: "EpgModel", path: "model/model-epg.js"},
        {name: "timerlist", modelClass: "TimerlistModel", path: "model/model-timerlist.js"},
        {name: "timeshift", modelClass: "TimeshiftModel", path: "model/model-timeshift.js"},
        {name: "ci", modelClass: "Common_interfaceModel", path: "model/model-ci.js"},
        {name: "channelSearch", modelClass: "Channelsearch_dvbModel", path: "model/model-channelsearch.js"},
        {name: "pvr", modelClass: "PvrModel", path: "model/model-pvr.js"},
        {name: "hotel", modelClass: "HotelModel", path: "model/model-hotel.js"}
    ],
    "EU": [
        {name: "epg", modelClass: "EpgModel", path: "model/model-epg.js"},
        {name: "timerlist", modelClass: "TimerlistModel", path: "model/model-timerlist.js"},
        {name: "timeshift", modelClass: "TimeshiftModel", path: "model/model-timeshift.js"},
        {name: "ci", modelClass: "Common_interfaceModel", path: "model/model-ci.js"},
        {name: "channelSearch", modelClass: "Channelsearch_dvbModel", path: "model/model-channelsearch.js"},
        {name: "mheg5", modelClass: "Mheg5Model", path: "model/model-mheg5.js"},
        {name: "bluetooth", modelClass: "BluetoothModel", path: "model/model-bluetooth.js"},
        {name: "satellite", modelClass: "SatelliteModel", path: "model/model-satellite.js"},
        {name: "speech", modelClass: "SpeechModel", path: "model/model-speech.js"},
        {name: "pvr", modelClass: "PvrModel", path: "model/model-pvr.js"},
        {name: "hotel", modelClass: "HotelModel", path: "model/model-hotel.js"}
    ],
    "EM": [
        {name: "epg", modelClass: "EpgModel", path: "model/model-epg.js"},
        {name: "timerlist", modelClass: "TimerlistModel", path: "model/model-timerlist.js"},
        {name: "timeshift", modelClass: "TimeshiftModel", path: "model/model-timeshift.js"},
        {name: "ci", modelClass: "Common_interfaceModel", path: "model/model-ci.js"},
        {name: "channelSearch", modelClass: "Channelsearch_dvbModel", path: "model/model-channelsearch.js"},
        {name: "mheg5", modelClass: "Mheg5Model", path: "model/model-mheg5.js"},
        {name: "bluetooth", modelClass: "BluetoothModel", path: "model/model-bluetooth.js"},
        {name: "speech", modelClass: "SpeechModel", path: "model/model-speech.js"},
        {name: "pvr", modelClass: "PvrModel", path: "model/model-pvr.js"},
        {name: "hotel", modelClass: "HotelModel", path: "model/model-hotel.js"},
    ]
};

// Load modules and create global model instance when finished
//var model = null;
//var modelLoader = new ModelLoader(function () {
//    model = new Model();
//    model.createSubModel(modelConfig.preload);
//}, modelConfig.preload);

function MDLOADTYPE() {
}
MDLOADTYPE.PRELOAD = 0;
MDLOADTYPE.REMAIN = 1;
var model = new Model();
function createModel(callback, loadType) {
    var modelArr = modelConfig.common;
    if (MDLOADTYPE.PRELOAD == loadType) {
        new ModelLoader(function () {
            model.createSubModel(modelArr, loadType);
            callback();
        }, modelArr);
    }
    else {
        model.createSubModel(modelArr, loadType);
        callback();
    }
}
