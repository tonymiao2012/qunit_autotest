/**
 * Created by miaozixiong on 2017/3/2.
 */
var array = new readMenuArray("config/mainConfig.json");

new Vue({
    el: "#scan",
    data: {
        name: array[0]["name"],
        testcase: array[0]["testcase"],
        iconclass: array[0]["icon-class"]
    }
});

