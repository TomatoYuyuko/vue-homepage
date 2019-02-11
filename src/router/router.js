import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../views/Main'
import Blog from '../views/Blog'
import Contact from '../views/Contact'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            children: []
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
