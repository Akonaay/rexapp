import axios from "axios";
export default {
    namespaced: 'news',
    state: {
        news: []
    },
    getters: {
        newsList(state) {
            return state.news
        },
    },
    mutations: {
        GET_NEWS(state, news) {
            state.news = news
        }
    },
    actions: {
        getNews({
            commit
        }) {
            axios.get("api/news").then(response => {
                commit('GET_NEWS', response.data.news)
            });
        }
    }
}
