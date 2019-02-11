<template>
    <div id="app">
        <el-container>
            <el-main>
                <transition name="el-fade-in-linear">
                    <Loading v-show="showLoading" :loading-msg="loadingMsg"></Loading>
                </transition>
                <!--<Main msg="Life Is Elsewhere"/>-->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    //import Main from './components/Main.vue'
    import Loading from './components/Loading.vue'
    import router from './router/router'

    export default {
        name: 'app',
        router,
        components: {
            Loading,
            //Main
        },
        data: function () {
            return {
                showMenuList: false,
                showLoading: false,
                loadingMsg: 'loading'
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style>
    html, body {
        height: 100%;
        background: #333 url("assets/bg-part.jpg");
        margin: 0;
    }

    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: 28px;
    }
</style>