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
                img: 'https://i.goopics.net/OK5yK.png',
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
                img: 'https://i.goopics.net/7qk5G.png',
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
                img: 'https://i.goopics.net/YvoxJ.png',
                subCategoryLabels: {
                    natation: 'Natation',
                    all: 'Tout voir',
                    plonge: 'Plongée',
                }
            },
            rando: {
                name: 'Randonnées',
                img: 'https://i.goopics.net/vQbDg.png',
                subCategoryLabels: {
                    all: 'Tout voir',
                    camping: 'Camping',
                    bivouac: 'Bivouac',
                }
            },
            fitness: {
                name: 'Fitness',
                img: 'https://i.goopics.net/ZY2xd.png',
                subCategoryLabels: {
                    all: 'Tout voir',
                    box: 'Box',
                    muscu: 'Musculation',
                }
            },
            velo: {
                name: 'Vélo',
                img: 'https://i.goopics.net/rK9bw.png',
                subCategoryLabels: {}
            },
            equitation: {
                name: 'Equitation',
                img: 'https://i.goopics.net/x5NJy.png',
                subCategoryLabels: {}
            },
            running: {
                name: 'Running',
                img: 'https://i.goopics.net/AJ5ea.png',
                subCategoryLabels: {}
            },
            all: {
                name: 'Tous les sports',
                img: 'https://i.goopics.net/LQ3X8.png',
                subCategoryLabels: {}
            },
            game: {
                name: 'Jeux & pleins air',
                img: 'https://i.goopics.net/Rvo57.png',
                subCategoryLabels: {}
            },
            trot: {
                name: 'Trottinettes, roller, skates',
                img: 'https://i.goopics.net/5qg17.png',
                subCategoryLabels: {}
            },
            escalade: {
                name: 'Escalade & alpinisme',
                img: 'https://i.goopics.net/0W289.png',
                subCategoryLabels: {}
            },
            ski: {
                name: 'Ski & snowboard',
                subCategoryLabels: {}
            }
        },
        categoriesSport: [
            {
                img: 'https://i.goopics.net/8gVYo.png'
            },
            {
                img: 'https://i.goopics.net/OK5NK.png'
            },
            {
                img: 'https://i.goopics.net/0W2n9.png'
            },
            {
                img: 'https://i.goopics.net/x5Nly.png'
            },
            {
                img: 'https://i.goopics.net/ZY2Vd.png'
            },
            {
                img: 'https://i.goopics.net/yOlD9.png'
            },
            {
                img: 'https://i.goopics.net/1Wx8Z.png'
            },
            {
                img: 'https://i.goopics.net/LQ3X8.png'
            }
        ],
        isEverOpen: false,
        preferences: {
            peopleType: null,
            interests: []
        },
        shops: [
            {
                products: [
                    {
                        barCode: 444,
                        brand: "Tata",
                        category: "football",
                        color: "blue",
                        description: "yoyo",
                        image: "https://unsplash.it/150?image=1",
                        name: "test",
                        price: 150,
                        quantite: 200,
                        size: "m"
                    },
                    {
                        barCode: 357,
                        brand: "Kuhic Group",
                        category: "Outdoors",
                        color: "yellow",
                        description: "Practical",
                        image: "https://unsplash.it/150?image=3",
                        name: "Awesome Soft Chicken",
                        price: "663.00",
                        quantite: 23268,
                        size: "n"
                    },
                    {
                        barCode: 80704,
                        brand: "Yundt - Stark",
                        category: "Automotive",
                        color: "purple",
                        description: "Fantastic",
                        image: "https://unsplash.it/150?image=4",
                        name: "Sleek Plastic Shirt",
                        price: "801.00",
                        quantite: 86951,
                        size: "7"
                    },
                    {
                        barCode: 12210,
                        brand: "Nolan Inc",
                        category: "Books",
                        color: "fuchsia",
                        description: "Generic",
                        image: "https://unsplash.it/150?image=6",
                        name: "Handcrafted Granite Keyboard",
                        price: "455.00",
                        quantite: 59775,
                        size: "0"
                    },
                    {
                        barCode: 21506,
                        brand: "Nitzsche and Sons",
                        category: "Tools",
                        color: "plum",
                        description: "Incredible",
                        image: "https://unsplash.it/150?image=7",
                        name: "Tasty Plastic Cheese",
                        price: "588.00",
                        quantite: 44724,
                        size: "n"
                    },
                    {
                        barCode: 6881,
                        brand: "Kirlin Group",
                        category: "Sports",
                        color: "mint green",
                        description: "Intelligent",
                        image: "https://unsplash.it/150?image=8",
                        name: "Intelligent Rubber Keyboard",
                        price: "824.00",
                        quantite: 71683,
                        size: "3"
                    },
                    {
                        barCode: 22971,
                        brand: "Murphy, Keebler and Littel",
                        category: "Outdoors",
                        color: "teal",
                        description: "Tasty",
                        image: "https://unsplash.it/150?image=9",
                        name: "Practical Fresh Ball",
                        price: "901.00",
                        quantite: 91209,
                        size: "h"
                    }
                ],
                lat: "44.857738",
                lng: "-0.530906",
                name: "Intersport Sainte-Eulalie",
                distance: '6,8'
            },
            {
                products: [
                    {
                        barCode: 357,
                        brand: "Kuhic Group",
                        category: "Outdoors",
                        color: "yellow",
                        description: "Practical",
                        image: "https://unsplash.it/150?image=3",
                        name: "Awesome Soft Chicken",
                        price: "663.00",
                        quantite: 23268,
                        size: "n"
                    },
                    {
                        barCode: 80704,
                        brand: "Yundt - Stark",
                        category: "Automotive",
                        color: "purple",
                        description: "Fantastic",
                        image: "https://unsplash.it/150?image=4",
                        name: "Sleek Plastic Shirt",
                        price: "801.00",
                        quantite: 86951,
                        size: "7"
                    },
                    {
                        barCode: 45444,
                        brand: "Bernier - Crooks",
                        category: "Music",
                        color: "gold",
                        description: "Ergonomic",
                        image: "https://unsplash.it/150?image=5",
                        name: "Handcrafted Rubber Bike",
                        price: "400.00",
                        quantite: 56782,
                        size: "3"
                    },
                    {
                        barCode: 2467,
                        brand: "Schneider, Reilly and Aufderhar",
                        category: "Tools",
                        color: "gold",
                        description: "Practical",
                        image: "https://unsplash.it/150?image=10",
                        name: "Licensed Plastic Chair",
                        price: "281.00",
                        quantite: 84442,
                        size: "o"
                    },
                    {
                        barCode: 72577,
                        brand: "Ullrich - Schimmel",
                        category: "Garden",
                        color: "gold",
                        description: "Awesome",
                        image: "https://unsplash.it/150?image=11",
                        name: "Awesome Fresh Computer",
                        price: "587.00",
                        quantite: 26030,
                        size: "b"
                    },
                    {
                        barCode: 15964,
                        brand: "Reynolds, Lesch and Ferry",
                        category: "Computers",
                        color: "lime",
                        description: "Refined",
                        image: "https://unsplash.it/150?image=12",
                        name: "Incredible Cotton Chicken",
                        price: "147.00",
                        quantite: 13205,
                        size: "9"
                    }
                ],
                lat: "44.803749",
                lng: "-0.631680",
                name: "Intersport Pessac",
                distance: "16,6"
            },
            {
                products: [
                    {
                        barCode: 51373,
                        brand: "Keeling, Altenwerth and Keeling",
                        category: "Health",
                        color: "black",
                        description: "Sleek",
                        image: "https://unsplash.it/150?image=1",
                        name: "Handmade Soft Ball",
                        price: "671.00",
                        quantite: 64711,
                        size: "8"
                    },
                    {
                        barCode: 6881,
                        brand: "Kirlin Group",
                        category: "Sports",
                        color: "mint green",
                        description: "Intelligent",
                        image: "https://unsplash.it/150?image=8",
                        name: "Intelligent Rubber Keyboard",
                        price: "824.00",
                        quantite: 71683,
                        size: "3"
                    },
                    {
                        barCode: 22971,
                        brand: "Murphy, Keebler and Littel",
                        category: "Outdoors",
                        color: "teal",
                        description: "Tasty",
                        image: "https://unsplash.it/150?image=9",
                        name: "Practical Fresh Ball",
                        price: "901.00",
                        quantite: 91209,
                        size: "h"
                    },
                    {
                        barCode: 68374,
                        brand: "Smith - Deckow",
                        category: "Music",
                        color: "indigo",
                        description: "Generic",
                        image: "https://unsplash.it/150?image=15",
                        name: "Awesome Rubber Chips",
                        price: "821.00",
                        quantite: 50483,
                        size: "d"
                    },
                    {
                        barCode: 70605,
                        brand: "Kuhn LLC",
                        category: "Electronics",
                        color: "fuchsia",
                        description: "Fantastic",
                        image: "https://unsplash.it/150?image=16",
                        name: "Unbranded Steel Chair",
                        price: "274.00",
                        quantite: 45898,
                        size: "4"
                    },
                    {
                        barCode: 85578,
                        brand: "Bailey - Paucek",
                        category: "Beauty",
                        color: "magenta",
                        description: "Tasty",
                        image: "https://unsplash.it/150?image=17",
                        name: "Incredible Frozen Sausages",
                        price: "177.00",
                        quantite: 38142,
                        size: "s"
                    }
                ],
                lat: "44.876591",
                lng: "-0.519290",
                name: "Intersport Libourne",
                distance: "19,2"

            },
            {
                products: [
                    {
                        barCode: 79339,
                        brand: "Towne, Zulauf and Lockman",
                        category: "Garden",
                        color: "lime",
                        description: "Tasty",
                        image: "https://unsplash.it/150?image=2",
                        name: "Tasty Steel Mouse",
                        price: "565.00",
                        quantite: 72029,
                        size: "c"
                    },
                    {
                        barCode: 357,
                        brand: "Kuhic Group",
                        category: "Outdoors",
                        color: "yellow",
                        description: "Practical",
                        image: "https://unsplash.it/150?image=3",
                        name: "Awesome Soft Chicken",
                        price: "663.00",
                        quantite: 23268,
                        size: "n"
                    },
                    {
                        barCode: 72577,
                        brand: "Ullrich - Schimmel",
                        category: "Garden",
                        color: "gold",
                        description: "Awesome",
                        image: "https://unsplash.it/150?image=11",
                        name: "Awesome Fresh Computer",
                        price: "587.00",
                        quantite: 26030,
                        size: "b"
                    },
                    {
                        barCode: 15964,
                        brand: "Reynolds, Lesch and Ferry",
                        category: "Computers",
                        color: "lime",
                        description: "Refined",
                        image: "https://unsplash.it/150?image=12",
                        name: "Incredible Cotton Chicken",
                        price: "147.00",
                        quantite: 13205,
                        size: "9"
                    },
                    {
                        barCode: 96412,
                        brand: "Marvin LLC",
                        category: "Baby",
                        color: "pink",
                        description: "Refined",
                        image: "https://unsplash.it/150?image=13",
                        name: "Awesome Steel Hat",
                        price: "202.00",
                        quantite: 96483,
                        size: "i"
                    },
                    {
                        barCode: 59594,
                        brand: "Bechtelar LLC",
                        category: "Baby",
                        color: "black",
                        description: "Ergonomic",
                        image: "https://unsplash.it/150?image=14",
                        name: "Fantastic Frozen Gloves",
                        price: "11.00",
                        quantite: 10847,
                        size: "d"
                    }
                ],
                lat: "44.807499",
                lng: "-0.548870",
                name: "Intersport St-Medard-en-Jalles",
                distance: "20,1"
            },
            {
                products: [
                    {
                        barCode: 51373,
                        brand: "Keeling, Altenwerth and Keeling",
                        category: "Health",
                        color: "black",
                        description: "Sleek",
                        image: "https://unsplash.it/150?image=1",
                        name: "Handmade Soft Ball",
                        price: "671.00",
                        quantite: 64711,
                        size: "8"
                    },
                    {
                        barCode: 79339,
                        brand: "Towne, Zulauf and Lockman",
                        category: "Garden",
                        color: "lime",
                        description: "Tasty",
                        image: "https://unsplash.it/150?image=2",
                        name: "Tasty Steel Mouse",
                        price: "565.00",
                        quantite: 72029,
                        size: "c"
                    },
                    {
                        barCode: 357,
                        brand: "Kuhic Group",
                        category: "Outdoors",
                        color: "yellow",
                        description: "Practical",
                        image: "https://unsplash.it/150?image=3",
                        name: "Awesome Soft Chicken",
                        price: "663.00",
                        quantite: 23268,
                        size: "n"
                    },
                    {
                        barCode: 80704,
                        brand: "Yundt - Stark",
                        category: "Automotive",
                        color: "purple",
                        description: "Fantastic",
                        image: "https://unsplash.it/150?image=4",
                        name: "Sleek Plastic Shirt",
                        price: "801.00",
                        quantite: 86951,
                        size: "7"
                    },
                    {
                        barCode: 45444,
                        brand: "Bernier - Crooks",
                        category: "Music",
                        color: "gold",
                        description: "Ergonomic",
                        image: "https://unsplash.it/150?image=5",
                        name: "Handcrafted Rubber Bike",
                        price: "400.00",
                        quantite: 56782,
                        size: "3"
                    },
                    {
                        barCode: 12210,
                        brand: "Nolan Inc",
                        category: "Books",
                        color: "fuchsia",
                        description: "Generic",
                        image: "https://unsplash.it/150?image=6",
                        name: "Handcrafted Granite Keyboard",
                        price: "455.00",
                        quantite: 59775,
                        size: "0"
                    },
                    {
                        barCode: 459,
                        brand: "nike",
                        category: "basket",
                        color: "red",
                        description: "testtest",
                        image: "https://unsplash.it/150?image=9",
                        name: "shoes",
                        price: 555,
                        quantite: 741,
                        size: "p"
                    }
                ],
                lat: "44.837789",
                lng: "-0.579180",
                name: "Intersport Biganos",
                distance: "59,3"
            },
        ],
        searchQuery: '',
        productList: [
            {
                id: 1,
                name: "Levi",
                img: "~/assets/images/home/news/accueil_nouveaute1.png",
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 2,
                name: "Levi",
                img: "~/assets/images/home/news/accueil_nouveaute2.png",
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 3,
                name: "Levi",
                img: "~/assets/images/home/news/accueil_nouveaute3.png",
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 4,
                name: 'Solar',
                img: 'https://i.goopics.net/Rvoav.png',
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 5,
                name: 'Cairn',
                img: 'https://i.goopics.net/vQbGA.png',
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 6,
                name: 'Firefly',
                img: 'https://i.goopics.net/7qkWm.png',
                brand: "Energetics",
                color: "black",
                price: "10€"
            },
            {
                id: 7,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-1.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 8,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-2.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 9,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-3.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 10,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-4.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 11,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-5.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 12,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-6.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 13,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-7.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

            {
                id: 14,
                name: 'Chaussure',
                img: '~/assets/images/products/chaussure-foot-8.png',
                brand: "Nike",
                color: "black",
                price: "59,99€"
            },

        ],
        nbProductCart: 1,
        favoris: [],
        cart: [],
        needSeller: false
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
        setSearchQuery: (state, searchQuery) => {
            state.searchQuery = searchQuery;
        },
        addFavoris: (state, favoris) => {
            state.favoris = favoris;
        },
        addCart: (state, cart) => {
            state.cart = cart
        },
        setNeedSeller: (state, needSeller) => {
            state.needSeller = needSeller
        }
    },
    actions: {}
});
