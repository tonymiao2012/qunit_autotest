/**
 * Created by miaozixiong on 2017/3/2.
 */
var array = new readMenuArray("config/mainConfig.json");

new Vue({
    el: "#repeat",
    data: {
        name: array[1]["name"],
        testcase: array[1]["testcase"],
        iconclass: array[1]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#scan",
    data: {
        name: array[2]["name"],
        testcase: array[2]["testcase"],
        iconclass: array[2]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#play",
    data: {
        name: array[3]["name"],
        testcase: array[3]["testcase"],
        iconclass: array[3]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#serviceList",
    data: {
        name: array[4]["name"],
        testcase: array[4]["testcase"],
        iconclass: array[4]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#PC",
    data: {
        name: array[5]["name"],
        testcase: array[5]["testcase"],
        iconclass: array[5]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#CC",
    data: {
        name: array[6]["name"],
        testcase: array[6]["testcase"],
        iconclass: array[6]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#infoBar",
    data: {
        name: array[7]["name"],
        testcase: array[7]["testcase"],
        iconclass: array[7]["icon-class"],
        ariaAttr: true
    }
});

new Vue({
    el: "#pvr",
    data: {
        name: array[8]["name"],
        testcase: array[8]["testcase"],
        iconclass: array[8]["icon-class"],
        ariaAttr: true
    }
});
