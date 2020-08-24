import ApiService from "./../../api/api.service";

export default {
    namespaced: "services",
    state: {
        services: []
    },
    getters: {
        servicesList(state) {
            return state.services;
        }
    },
    mutations: {
        setServices(state, services) {
            state.services = services;
        }
    },
    actions: {
        getServices(context) {
            new Promise((resolve, reject) => {
                ApiService.get("/api/services")
                    .then(response => {
                        context.commit("setServices", response.data);
                        console.log(response.data);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
