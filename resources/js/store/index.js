import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import services from "./services";
import news from "./news";
import profile from "./profile";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

    mutations: {

    },

    actions: {

    },

    modules: {
        auth,
        services,
        news,
        profile
    }
})
