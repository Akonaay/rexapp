import axios from "axios";
export default {
    namespaced: 'profile',
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        REGISTER_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async createUser({
            commit
        }, data) {
            let response = await axios.post(
                "api/auth/register",
                data
            );

            if (response.data.errors) {
                console.log(response.data.errors);

            }

            return commit('REGISTER_USER', response.data)
        }

    }
}
