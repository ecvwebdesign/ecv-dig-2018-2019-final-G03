import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerHasImage: true,
    },
    mutations: {
        setHeader: (state, type) => {
            state.headerHasImage = type;
        },
    },
    actions: {}
});