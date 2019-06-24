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
        currentProduct: null,
        currentCategory: null,
        currentSubCategory: null,
        currentSubSubCategory: null,
        categoryLabels: {
            sportCo: {
                name: 'Sports collectifs',
                subCategoryLabels: {
                    all: {
                        name: 'Tout voir',
                        subSubCategoryLabels: {}
                    },
                    foot: {
                        name: 'Football',
                        subSubCategoryLabels: {
                            all: 'Tout voir',
                            chaussure: 'Chaussures de footbal',
                            maillotNat: 'Maillots et teenues de sélections nationales',
                            maillotClub: 'Maillots et tenues de club',
                            equipement: 'Equipement et accessoires',
                            tenues: 'Tenues d\'entrainement',
                            event: 'Evènements',
                        }
                    },
                    basket: {
                        name: 'Basket-ball',
                        subSubCategoryLabels: {}
                    },
                    volley: {
                        name: 'Volley-ball',
                        subSubCategoryLabels: {}
                    },
                    hand: {
                        name: 'Handball',
                        subSubCategoryLabels: {}
                    },
                    rugby: {
                        name: 'Rugby',
                        subSubCategoryLabels: {}
                    },
                }
            },
            sportRaquette: {
                name: 'Sports de raquettes',
                subCategoryLabels: {
                    all: 'Tout voir',
                    tennis: 'Tennis',
                    bad: 'Badminton',
                    squash: 'Squash',
                    padel: 'Padel',
                    pong: 'Tennis de table',
                }
            },
            sportEau: {
                name: 'Sports d\'eau',
                subCategoryLabels: {
                    natation: 'Natation',
                    all: 'Tout voir',
                    plonge: 'Plongée',
                }
            },
            rando: {
                name: 'Randonnées',
                subCategoryLabels: {
                    all: 'Tout voir',
                    camping: 'Camping',
                    bivouac: 'Bivouac',
                }
            },
            fitness: {
                name: 'Fitness',
                subCategoryLabels: {
                    all: 'Tout voir',
                    box: 'Box',
                    muscu: 'Musculation',
                }
            },
            velo: {
                name: 'Vélo',
                subCategoryLabels: {}
            },
            equitation: {
                name: 'Equitation',
                subCategoryLabels: {}
            },
            running: {
                name: 'Running',
                subCategoryLabels: {}
            },
            all: {
                name: 'Tous les sports',
                subCategoryLabels: {}
            },
            game: {
                name: 'Jeux & pleins air',
                subCategoryLabels: {}
            },
            trot: {
                name: 'Trottinettes, roller, skates',
                subCategoryLabels: {}
            },
            escalade: {
                name: 'Escalade & alpinisme',
                subCategoryLabels: {}
            },
            ski: {
                name: 'Ski & snowboard',
                subCategoryLabels: {}
            },
        },
        isEverOpen: false,
        preferences: {
            peopleType: null,
            interests: []
        }

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
        setIsEverOpen: (state, isEver0pen) => {
            state.isEverOpen = isEver0pen;
        },
        setPreferenceFor: (state, peopleType) => {
            state.preferences.peopleType = peopleType;
        },
        setInterests: (state, interests) => {
            state.preferences.interests = interests;
        },
        setCurrentSubSubCategory: (state, subSubCategory) => {
            state.currentSubSubCategory = subSubCategory;
        },
        setCurrentProduct: (state, product) => {
            state.currentProduct = product;
        },
    },
    actions: {}
});
