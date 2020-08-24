import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import services from "./modules/services";

const modules = {
    auth,
    services
};

Vue.use(Vuex);

export default new Vuex.Store({
    mutations: {
        resetState(state) {
            _.forOwn(modules.auth, (value, key) => {
                state[key] = _.cloneDeep(value.state);
            });
        },
    },
    modules
});
