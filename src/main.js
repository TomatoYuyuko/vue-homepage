import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/nes-fix.css'

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
}).$mount('#app');
