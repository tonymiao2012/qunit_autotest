function Channelsearch_atscModelDefines() {
}
{
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_SOURCE = "de.loewe.sl2.i32.channel.search.source";
    Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_START = "de.loewe.sl2.action.channel.search.start";
    Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_STOP = "de.loewe.sl2.action.channel.search.stop";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_PROGRESS = "tvapi.i32.atsc.channel.search.progress";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_DIGIT_SERVICES = "tvapi.i32.atsc.channel.search.found.digit.services";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_ANALOG_SERVICES = "tvapi.i32.atsc.channel.search.found.analog.services";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_SERVICES_NAME = "tvapi.str.atsc.channel.search.found.services.name";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_STATE = "tvapi.i32.atsc.channel.search.state";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FOUND_CHANNELS = "tvapi.table.atsc.channel.search.found.channels";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FAVOURITE_ACTION_SET = "tvapi.action.atsc.channel.search.favourite.set";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_SKIP_ACTION_SET = "tvapi.action.atsc.channel.search.skip.set";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_RUNNING = "tvapi.i32.atsc.channel.search.running";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_DVBT = 0;
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_DVBC = 1;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_SEARCH_STATE_FINISHED = 0;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_NUMBER = 0;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_NAME = 1;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_SOURCE_TYPE = 2;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_SERVICE_TYPE = 3;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_NEW = 4;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_INDEX = 5;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_FAVOURITE = 6;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_SKIP = 7;
    Channelsearch_atscModelDefines.ENUM_ATSC_CHANNEL_SEARCH_FOUND_CHANNELS_SERVICE_TYPE_UNKNOWN = 0
}
function Channelsearch_atscModel(e,type) {
    SubModel.call(this, e, Channelsearch_atscModelDefines);
    this.registerSubObject = function () {
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_SOURCE, "getSource", "setSource", "onSourceChaged", null, null);
        this.registerActionObject(Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_START, [{
            name: "Start",
            method: function (e,type) {
                return e.invoke(type)
            }
        }], "null");
        this.registerActionObject(Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_STOP, [{
            name: "Stop",
            method: function (e) {
                return e.invoke()
            }
        }], "null");
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_PROGRESS, "getSearchingProgress", "setSearchingProgress", "onSearchingProgressChaged", null, null);
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_DIGIT_SERVICES, "getFoundDigitServices", "setFoundDigitServices", "onFoundDigitServicesChaged", null, null);
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_ANALOG_SERVICES, "getFoundAnalogServices", "setFoundAnalogServices", "onFoundAnalogServicesChaged", null, null);
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_STATE, "getSearchState", "setSearchState", "onSearchStateChaged", null, null);
        this.registerTableObject(Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FOUND_CHANNELS, "creatFoundChannelsIterator");
        this.registerActionObject(Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FAVOURITE_ACTION_SET, [{
            name: "FavouriteSet",
            method: function (e, _, n) {
                return e.invoke(n, _)
            }
        }], "onFavSetCallback");
        this.registerActionObject(Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_SKIP_ACTION_SET, [{
            name: "SkipSet",
            method: function (e, _, n) {
                return e.invoke(n, _)
            }
        }], "onSkipSetCallback");
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_RUNNING, "getRunning", "setRunning", "onRunningChaged", null, null)
    }

}
Channelsearch_atscModel.prototype = new SubModel;
Channelsearch_atscModel.prototype.constructor = Channelsearch_atscModel;
{
    SubModel.registerStaticConstants(Channelsearch_atscModel, Channelsearch_atscModelDefines, [])
}