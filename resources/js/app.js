require("./bootstrap");

import Vue from "vue";
import router from "./router";
import store from "./store";
import MainApp from "./MainApp.vue";
import Vuesax from "vuesax";
import VueCarousel from "@chenfengyuan/vue-carousel";

// css stylesheet
import "bulma/css/bulma.css";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

Vue.use(Vuesax);
Vue.use(VueCarousel);

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
    new Vue({
        el: "#app",
        router,
        store,
        components: {
            MainApp
        }
    });
});
