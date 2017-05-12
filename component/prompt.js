/**
 * Created by miaozixiong on 2017/5/4.
 */
new Vue({
    el: "#prompt",
    data: {
        message: "",
        icon: "fa fa-bomb fa-6",
        cornerInfo: "Press 'OK' return",
        hidden: false
    }
});

Vue.component('prompt', {
    props: ['info'],
    template: "<span></span><p>{{ info }}</p>"
});