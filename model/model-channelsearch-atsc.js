function Channelsearch_atscModelDefines() {
}
{
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_SOURCE = "de.loewe.sl2.i32.channel.search.source";
    Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_START = "de.loewe.sl2.action.channel.search.start";
    Channelsearch_atscModelDefines.SL2_TVAPI_ACTION_ATSC_CHANNEL_SEARCH_STOP = "de.loewe.sl2.action.channel.search.stop";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_PROGRESS = "de.loewe.sl2.i32.channel.search.searching.progress";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_DIGIT_SERVICES = "de.loewe.sl2.i32.channel.search.found.services";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FOUND_ANALOG_SERVICES = "de.loewe.sl2.i32.channel.search.found.analogservices";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_STATE = "de.loewe.sl2.tvapi.i32.channel.search.search.state";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FREQUENCY = "de.loewe.sl2.i32.search.frequency";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FOUND_CHANNELS = "de.loewe.sl2.table.found.channels";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_FAVOURITE_ACTION_SET = "tvapi.action.atsc.channel.search.favourite.set";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_TABLE_SKIP_ACTION_SET = "tvapi.action.atsc.channel.search.skip.set";
    Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_RUNNING = "de.loewe.sl2.i32.channel.search.running";
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_ANALOG = 10;
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_DVBT = 11;
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_DVBC = 12;
    Channelsearch_atscModelDefines.SL2_TVAPI_ATSC_CHANNEL_SEARCH_SOURCE_DVBS = 13;
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
        this.registerIntegerObject(Channelsearch_atscModelDefines.SL2_TVAPI_I32_ATSC_CHANNEL_SEARCH_FREQUENCY, "getSearchFrequency", "setSearchFrequency", "onSearchFrequencyChaged", null, null);
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
