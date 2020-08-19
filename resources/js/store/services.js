import axios from "axios";
export default {
    namespaced: 'services',
    state: {
        services: []
    },
    getters: {
        servicesList(state) {
            return state.services
        },
    },
    mutations: {
        GET_SERVICES(state, services) {
            state.services = services
        }
    },
    actions: {
        async getServices({
            commit
        }) {
            try {
                let response = await axios.get("api/services")

                commit('GET_SERVICES', response.data.services)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
