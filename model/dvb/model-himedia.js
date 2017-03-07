function TableIterator(e, t, r, n, o, i) {
    var a = null;
    var s = i;
    var l = function (e) {
        var t = new Array;
        for (var r = 0; r < e.length; r++) {
            t.push(e[r])
        }
        var n = {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: [t]};
        s && s(n)
    }.bind(this);
    var d = function (e) {
        var t = new Array;
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            var o = new Array;
            for (var i = 0; i < n.length; i++) {
                o.push(n[i])
            }
            t.push(o)
        }
        var a = {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: t};
        s && s(a)
    }.bind(this);
    var c = function (e) {
        var t = {type: TableIterator.EVENT_TYPE_TOTAL_COUNT, totalCount: e};
        s && s(t)
    }.bind(this);
    var u = function (e) {
        var t = {type: TableIterator.EVENT_TYPE_SEEK_TO_ROW, result: e};
        s && s(t)
    }.bind(this);
    var E = function (e) {
        var t = {type: TableIterator.EVENT_TYPE_CURSOR, cursor: e};
        s && s(t)
    }.bind(this);
    var f = function (e) {
        var t = {type: TableIterator.EVENT_TYPE_UPDATE, result: e};
        s && s(t)
    }.bind(this);
    this.readNextRows = function (e) {
        a.readNextRows(e)
    };
    this.readNextRow = function () {
        a.readNextRow()
    };
    this.readPreviousRows = function (e) {
        a.readPrevRows(e)
    };
    this.fetchTotalCount = function () {
        a.totalCount()
    };
    this.seekToRow = function (e, t) {
        a.seekToRow(e, t)
    };
    this.getCurrentRow = function () {
        return a.getCurrentRow()
    };
    this.getCurrentRows = function () {
        return a.getCurrentRows()
    };
    this.readCursorPosition = function () {
        a.readCursorPosition()
    };
    this.getTotalCount = function () {
        return a.getTotalCountFromCache()
    };
    this.disconnect = function () {
        a.removeEventListener("notifyReadRow", l);
        a.removeEventListener("notifyReadRowChunk", d);
        a.removeEventListener("notifyTotalCount", c);
        a.removeEventListener("notifySeekToRow", u);
        a.removeEventListener("notifyCursorPosition", E);
        a.removeEventListener("notifyUpdate", f);
        a = null;
        return true
    };
    var v = function (e, t, r, n, o, i) {
        var s = modeljs.createTableSelectionVector();
        if (r) {
            for (var v = 0; v < r.length; v++) {
                var h = r[v];
                var _ = modeljs.createTableSelection(h.field, h.condition, h.value);
                s.push(_)
            }
        }
        var T = modeljs.createNumberVector();
        if (n) {
            for (var v = 0; v < n.length; v++) {
                T.push(n[v])
            }
        }
        var m = modeljs.createTableOrderVector();
        if (o) {
            for (var v = 0; v < o.length; v++) {
                var O = o[v];
                var _ = modeljs.createTableOrder(O.field, O.direction);
                m.push(_)
            }
        }
        a = e.createIterator(t ? modeljs.ITERATOR_TYPE_READONLY_AUTOMATIC : modeljs.ITERATOR_TYPE_READWRITE_AUTOMATIC, s, T, m);
        a.addEventListener("notifyReadRow", l);
        a.addEventListener("notifyReadRowChunk", d);
        a.addEventListener("notifyTotalCount", c);
        a.addEventListener("notifySeekToRow", u);
        a.addEventListener("notifyCursorPosition", E);
        a.addEventListener("notifyUpdate", f);
        a.connect()
    };
    v(e, t, r, n, o);
    this.tableFlag = "table created"
}
{
    try {
        TableIterator.EVENT_TYPE_ROWS_READ = 1;
        TableIterator.EVENT_TYPE_TOTAL_COUNT = 2;
        TableIterator.EVENT_TYPE_SEEK_TO_ROW = 3;
        TableIterator.EVENT_TYPE_CURSOR = 4;
        TableIterator.EVENT_TYPE_UPDATE = 5;
        TableIterator.SEEK_SET = modeljs.LOMODEL_SEEK_SET;
        TableIterator.SEEK_CUR = modeljs.LOMODEL_SEEK_CUR;
        TableIterator.SEEK_END = modeljs.LOMODEL_SEEK_END
    } catch (ex) {
        DBG_ERROR(ex.message)
    }
}
function SubModel(e, t) {
    var r = e;
    var n = t;
    var o = {};
    var i = false;
    this.getRootInterface = function () {
        return r.getRootInterface()
    };
    this.registerObject = function (e, t) {
        if (tv) {
            o[e] = {object: null, listeners: t}
        } else {
            o[e] = {
                object: {
                    getValue: function () {
                    }, setValue: function (e) {
                        if (!!t) {
                            t[0].handler(e)
                        }
                    }, getVector: function () {
                    }, setVector: function (e) {
                        if (!!t) {
                            t[0].handler(e)
                        }
                    }, invoke: function () {
                    }
                }, listeners: t
            }
        }
        this.handleApiObjectAdded(e, -1)
    };
    var a = function (e, t, r, n, o, i) {
        if (!o) {
            o = function (e) {
                return e
            }
        }
        if (!i) {
            i = function (e) {
                return e
            }
        }
        if (t) {
            this[t] = function () {
                var t = this.getObject(e);
                return o(t.getValue())
            }
        }
        if (r) {
            this[r] = function (t) {
                var r = this.getObject(e);
                r.setValue(i(t))
            }
        }
        if (n) {
            this[n] = null
        }
        var a = function (e) {
            var t = this[n];
            if (t) {
                t(o(e))
            }
        }.bind(this);
        this.registerObject(e, [{event: "notifyNewValue", handler: a}])
    }.bind(this);
    this.registerIntegerObject = function (e, t, r, n, o, i) {
        a(e, t, r, n, o, i)
    };
    this.registerStringObject = function (e, t, r, n, o, i) {
        a(e, t, r, n, o, i)
    };
    var s = function (e, t, r, n, o, i, a) {
        if (!o) {
            o = function (e) {
                var t = new Array;
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    t.push(n)
                }
                return t
            }
        }
        if (!i) {
            i = function (e) {
                var t = a ? modeljs.createNumberVector() : modeljs.createStringVector();
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    t.push(n)
                }
                return t
            }
        }
        if (t) {
            this[t] = function () {
                var t = this.getObject(e);
                return o(t.getVector())
            }
        }
        if (r) {
            this[r] = function (t) {
                var r = this.getObject(e);
                r.setVectorElements(i(t))
            }
        }
        if (n) {
            this[n] = null
        }
        var s = function (e) {
            if (n) {
                var t = this[n];
                if (t) {
                    t(o(e))
                }
            }
        }.bind(this);
        this.registerObject(e, [{event: a ? "notifyIntegerVector" : "notifyStringVector", handler: s}])
    }.bind(this);
    this.registerIntegerVectorObject = function (e, t, r, n, o, i) {
        s(e, t, r, n, o, i, true)
    };
    this.registerStringVectorObject = function (e, t, r, n, o, i) {
        s(e, t, r, n, o, i, false)
    };
    this.registerActionObject = function (e, t, r, n) {
        for (var o = 0; o < t.length; o++) {
            var i = t[o];
            this[i.name] = function (t) {
                newArguments = Array.prototype.slice.call(arguments);
                newArguments[0] = this.getObject(e);
                t.method.apply(this, newArguments)
            }.bind(this, i)
        }
        if (r) {
            this[r] = null
        }
        var a = function (e, t) {
            if (r && this[r]) {
                var n = new Array;
                for (var o = 0; o < t.keys.length; o++) {
                    var i = t.keys[o];
                    n[i] = t[i]
                }
                this[r](e, n)
            }
        }.bind(this);
        if (n) {
            this[n] = null
        }
        var s = function (e, t) {
            if (n && this[n]) {
                this[n](e, t)
            }
        }.bind(this);
        this.registerObject(e, [{event: "notifyResult", handler: a}, {event: "notifyExecutionError", handler: s}])
    };
    this.registerTableObject = function (e, t) {
        if (t) {
            this[t] = function (t, r, n, o, i) {
                var a = this.getObject(e);
                return new TableIterator(a, t, r, n, o, i)
            }.bind(this)
        }
        this.registerObject(e, [])
    };
    this.getObject = function (e) {
        return o[e].object
    };
    this.isReady = function () {
        if (i) {
            return i
        }
        for (var e in o) {
            var t = o[e].object;
            if (!t) {
                return false
            }
        }
        return true
    };
    this.handleApiObjectAdded = function (e, t) {
        if (e in o) {
            var n = o[e];
            try {
                var a = r.getRootInterface().createObject(e)
            } catch (s) {
            }
            if (n.listeners) {
                for (var l = 0; l < n.listeners.length; l++) {
                    var d = n.listeners[l];
                    a.addEventListener(d.event, d.handler)
                }
            }
            a.connect();
            n.object = a;
            if (!i) {
                i = this.isReady();
                i && r.handleSubModelReady()
            }
        }
    }
}
{
    SubModel.registerStaticConstants = function (e, t, r) {
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            var i = o.groupPrefix;
            var a = o.stripPrefix;
            for (var s in t) {
                if (s.indexOf(i) == 0) {
                    var l = s.substr(a.length);
                    e[l] = t[s]
                }
            }
        }
    }
}
function Model() {
    var e = {};
    var t = 0;
    var r = function (r, n) {
        var o = modeljs.createmodel("servicemode" == r ? ".servicemode." : r);
        modelInstance = new n(this);
        e[r] = modelInstance;
        this[r] = modelInstance;
        if (!modelInstance.isReady()) {
            t++
        }
    }.bind(this);
    this.initialize = function () {
        n.connect()
    };
    this.handleSubModelReady = function () {
        t--;
        if (t == 0) {
            this.onModelReady && this.onModelReady()
        }
        return true
    };
    this.getRootInterface = function () {
        return n
    };
    this.onModelReady = null;
    try {
        var n = modeljs.createRootInterface()
    } catch (o) {
    }
    r("sound", SoundModel);
    r("language", LanguageModel);
    r("network", NetworkModel);
    r("parentlock", Parental_lockModel);
    r("system", SystemModel);
    r("video", VideoModel);
    r("picture", PictureModel);
    r("mpctrl", MpCtrlModel);
    r("usb", UsbModel);
    r("volume", VolumeModel);
    r("directory", DirectoryModel)
}
{
    try {
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
        Model.FIELD_COND_END = modeljs.FIELD_COND_END
    } catch (ex) {
        DBG_ERROR(ex.message)
    }
}
function ModelLoader(e) {
    var t = ["model/model-sound.js", "model/model-language.js", "model/model-parental-lock.js", "model/model-system.js", "model/model-network.js", "model/model-video.js", "model/model-picture.js", "model/model-mpctrl.js", "model/model-usb.js", "model/model-volume.js", "model/model-directory.js"];
    var r = 0;
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.src = o;
        i.onload = function () {
            r++;
            if (r == t.length) {
                e()
            }
        };
        document.head.appendChild(i)
    }
}
var model = null;
var modelLoader = new ModelLoader(function () {
    model = new Model
});