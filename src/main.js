import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

import numbers from './filters/numbers.filter';

Vue.filter('numbers', numbers);

Vue.config.productionTip = false;

new Vue({
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
