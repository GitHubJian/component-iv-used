import '@/theme-chalk/index.scss';

import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);

import UIComponent from '@/index';
Vue.use(UIComponent);

import App from './App.vue';

new Vue({
    render: h => h(App),
}).$mount('#app');
