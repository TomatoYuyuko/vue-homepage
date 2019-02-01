<template>
    <div class="vc max-height">
        <div class="mask" v-show="showMask"></div>
        <Win98Dialog @confirm="toggleLayer()" v-show="showConfirm"></Win98Dialog>
        <div style="margin-bottom: 10em">
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white"><u>{{ title }}</u></h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <span class="menu-bar">
                        <a href="#" @click="jumpTo('Blog')" class="jump-tag text-shadow-white-sm">博客</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo()" class="jump-tag text-shadow-white-sm">联系</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo()" class="jump-tag text-shadow-white-sm">GitHub</a><span
                            class="abs">|</span>
                        <a href="#" @click="jumpTo()" class="jump-tag text-shadow-white-sm">关于</a>
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
                title: 'Life is Elsewhere',
                showConfirm: false,
                showMask: false
            }
        },
        props: {
            msg: String
        },
        methods: {
            jumpTo: function (address) {
                if (!address) {
                    this.toggleLayer()
                } else {
                    console.log(address);
                    this.$router.push({path: '/' + address})
                }

            },
            toggleLayer: function () {
                this.showMask = !this.showMask;
                this.showConfirm = !this.showConfirm;
            }
        },
        mounted: function () {
            document.getElementsByClassName('tr-html')[0].className += ' fade-away';
            setTimeout(function () {
                document.getElementsByClassName('tr-html')[0].remove();
            }, 800)
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media screen and (max-width: 500px) {
        .el-row u {
            position: relative;
            font-size: 36px !important;
            font-style: italic
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
        font-style: italic;
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
