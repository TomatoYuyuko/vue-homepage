<template>
    <div class="vc max-height">
        <div class="mask" v-show="showMask"></div>
        <Win98Dialog @confirm="toggleLayer()" v-show="showConfirm"></Win98Dialog>
        <div style="margin-bottom: 10em">
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white"><u>Life Is Elsewhere</u></h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <span class="menu-bar">
                        <a href="#" @click="jumpTo(0)" class="jump-tag text-shadow-white-sm">博客</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo(2)" class="jump-tag text-shadow-white-sm">联系</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo(3)" class="jump-tag text-shadow-white-sm">GitHub</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo(0)" class="jump-tag text-shadow-white-sm">关于</a>
                    </span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Win98Dialog from "../components/Win98Dialog";

    export default {
        name: 'Main',
        components: {Win98Dialog},
        data: function () {
            return {
                showConfirm: false,
                showMask: false
            }
        },
        props: {},
        methods: {
            jumpTo: function (target) {
                switch (target) {
                    case 1: {
                        break
                    }
                    case 2: {
                        this.$router.push({
                            path: '/contact',
                        });
                        break
                    }
                    case 3: {
                        window.open('https://github.com/TomatoYuyuko');
                        break
                    }
                    case 4: {
                        break
                    }
                    default: {
                        this.toggleLayer()
                    }
                }

            },
            toggleLayer: function () {
                this.showMask = !this.showMask;
                this.showConfirm = !this.showConfirm;
            }
        },
        mounted: function () {
            if (document.getElementsByClassName('tr-html')[0]) {


                document.getElementsByClassName('tr-html')[0].className += ' fade-away';
                setTimeout(function () {
                    document.getElementsByClassName('tr-html')[0].remove();
                }, 500)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media screen and (max-width: 500px) {
        .el-row u {
            position: relative;
            font-size: 36px !important;
        }

        a {
            display: block;
            text-decoration: underline;
        }

        .abs {
            opacity: 0;
        }
    }

    .menu-bar {
        font-size: 20px;
        color: #fefef9;
    }

    .jump-tag {
        margin: 2px 15px;
        font-size: 24px;
    }

    h1 {
        margin-bottom: 10px;
        font-size: 4em;
    //font-family: "Monoton";
    }

    a:link {
        color: #fefef9;
    }

    a:visited {
        color: #fefef9;
    }

    a:hover {
        color: #fefefe;
    }

    a:active {
        color: #fefefe;
    }
</style>
