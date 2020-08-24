import ApiService from "./../../api/api.service";
import JwtService from "./../../common/jwt.service";
import Vue from "vue";

export default {
    namespaced: 'auth',
    state: {
        errors: {
            login: [],
            register: []
        },
        token: null,
        user: null,
        isAuthenticated: false,
    },
    getters: {
        getLoginErrors(state) {
            return state.errors.login;
        },
        getRegistrationErrors(state) {
            return state.errors.register;
        },
        getErrors(state) {
            return state.errors;
        },
        currentUser(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    mutations: {
        clearErrors(state) {
            state.errors = [];
        },

        setError(state, {
            target,
            errors
        }) {

            Vue.set(state.errors, target, []);

            for (let key in errors)
                state.errors[target].push(errors[key][0]);
        },
        setUser(state, data) {
            state.isAuthenticated = true;
            state.user = data;
            state.token = data.token;
            state.errors = {
                login: [],
                register: []
            };
            JwtService.setToken(data.token);
        },
        logout(state, payload) {
            state.isAuthenticated = false;
            JwtService.unsetToken();
        },
    },
    actions: {
        login(context, credentials) {
            return new Promise((resolve, reject) => {
                ApiService.post("/api/auth/signin", credentials)
                    .then(({
                        data
                    }) => {
                        context.commit("clearErrors");
                        context.commit(
                            "setUser", {
                                user: data.userId,
                                token: data.token
                            }
                        );
                        resolve(data);
                    })
                    .catch(({
                        response
                    }) => {
                        context.commit(
                            "setError", {
                                target: 'login',
                                message: response.data.error
                            }
                        );
                        reject(response);
                    });
            });
        },
        logout(context, payload) {
            context.commit("logout");
            context.commit("resetState", null, {
                root: true
            });
            return new Promise((resolve, reject) => {
                ApiService.get("api/auth/signout")
                    .then(({
                        data
                    }) => {
                        context.commit("logout");
                        resolve(data);
                    })
                    .catch(({
                        response
                    }) => {
                        context.commit(
                            "setError", {
                                target: 'logout',
                                message: response.data.error
                            }
                        );
                        reject(response);
                    });
            });
        },
        register(context, credentials) {
            return new Promise((resolve, reject) => {
                ApiService.post("api/auth/register", credentials)
                    .then(({
                        data
                    }) => {
                        context.commit("setUser", {
                            user: data,
                            token: data.token
                        });
                        resolve(data);
                    })
                    .catch(({
                        response
                    }) => {

                        if (response.status === 422) {

                            context.commit(
                                "setError", {
                                    target: 'register',
                                    errors: response.data.errors
                                }
                            );
                        }
                        reject(response);
                    });
            });
        },
        checkAuth(context) {
            if (JwtService.getToken()) {
                ApiService.setHeader();
                ApiService.get("api/auth/me ")
                    .catch(({
                        response
                    }) => {
                        context.commit("logout");
                    });
            } else {
                context.commit("logout");
            }
        },
    }
}
