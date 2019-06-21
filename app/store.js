import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerHasImage: true,
        headerLabel: null,
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
        setCurrentShop: (state, shop) => {
            state.currentShop = shop;
        },
        setHeaderLabel: (state, headerLabel) => {
            state.headerLabel = headerLabel;
        },
    },
    actions: {}
});