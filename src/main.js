import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'
//import $ from 'jquery'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    //$,
    render: h => h(App),
}).$mount('#app')
