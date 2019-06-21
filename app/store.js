import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerHasImage: true,
        user: null,
        currentPage: 'home',
        currentShop: null
    },
    mutations: {
        setHeader: (state, type) => {
            state.headerHasImage = type;
        },
        setUser: (state, user) => {
            state.user = user;
        },
        setCurrentPage: (state, page) => {
            state.currentPage = page;
        },
        setShop: (state, shop) => {
            state.currentShop = shop;
        },
    },
    actions: {}
});