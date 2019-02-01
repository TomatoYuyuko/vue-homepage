<template>
    <div id="app">
        <el-container>
            <el-main>
                <transition name="el-fade-in-linear">
                    <Loading v-show="showLoading" :loading-msg="loadingMsg"></Loading>
                </transition>

                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Loading from './components/Loading.vue'
    import 'element-ui/lib/theme-chalk/base.css';

    export default {
        name: 'app',
        components: {
            Loading,
        },
        data: function () {
            return {
                showMenuList: false,
                showLoading: false,
                loadingMsg:'loading'
            }
        },
        methods: {

        },
        mounted:function () {

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