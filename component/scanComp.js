/**
 * Created by miaozixiong on 2017/3/2.
 */
var scanArray = readMenuArray("../config/mainConfig.json")[0];

new Vue({
    component: {
        'ScanMenu': scanMenu
    },
    data: {
        name: scanArray[0]["name"],
        testcase: scanArray[0]["testcase"],
        iconclass: scanArray[0]["icon-class"]
    }
});

var scanMenu = {
    template: "<li><span>{{}}</span></li>"
}