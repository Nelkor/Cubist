import Vue from 'vue';
import Vuex from 'vuex';

import cubist from './stores/cubist';

Vue.use(Vuex);

const modules = {
    cubist,
};

export default new Vuex.Store({ modules });
