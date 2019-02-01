import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Blog from './views/Blog'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            children:[]
        }
    ]
})
