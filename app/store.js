import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerHasImage: true,
        headerLabel: null,
        user: null,
        currentPage: 'home',
        currentShop: null,
        history: ['home'],
        currentCategory: null,
        currentSubCategory: null,
        categoryLabels: {
            football: 'Football',
            velo: 'Vélo',
            tennis: 'Tennis',
            basket: 'Basket-ball',
        },
        subCategoryLabels: {
            maillot: 'Maillot',
            chaussure: 'Chaussure',
            ballon: 'Ballon',
            short: 'Short',
            raquette: 'Raquette',
        },
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
        addToHistory: (state, page) => {
            state.history.push(page);
        },
        goBackHistory: (state) => {
            state.currentPage = state.history.length <= 1 ? 'home' : state.history[state.history.length - 2];
            state.history.pop();
        },
        setCurrentCategory: (state, category) => {
            state.currentCategory = category;
        },
        setCurrentSubCategory: (state, subCategory) => {
            state.currentSubCategory = subCategory;
        },
    },
    actions: {}
});
