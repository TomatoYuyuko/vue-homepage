<template>
    <div class="vc max-height">
        <div class="mask" v-show="showMask"></div>
        <Win98Dialog @confirm="toggleLayer()" v-show="showConfirm"></Win98Dialog>
        <div style="margin-bottom: 10em">
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white"><u>Life is ElseWhere</u></h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <span class="menu-bar nes-container">
                        <label>
                            <input type="radio" @click="jumpTo(0)" class="nes-radio jump-tag"
                                   v-model="checkedStatus" value="blog"><span class="jump-tag">博客</span>
                        </label>
                        <label>
                            <input type="radio" @click="jumpTo(2)" class="nes-radio jump-tag"
                                   v-model="checkedStatus" value="contact"><span class="jump-tag">联系</span>
                        </label>
                        <label>
                            <input type="radio" @click="jumpTo(3)" class="nes-radio jump-tag"
                                   v-model="checkedStatus" value="gh"><span class="jump-tag">GitHub</span>
                        </label>
                        <label>
                            <input type="radio" @click="jumpTo(0)" class="nes-radio jump-tag"
                                   v-model="checkedStatus" value="about"><span class="jump-tag">关于</span>
                    </label>
                    </span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Win98Dialog from "../components/Win98Dialog";
    import '../../node_modules/nes.css/css/nes.css'

    export default {
        name: 'Main',
        components: {Win98Dialog},
        data: function () {
            return {
                showConfirm: false,
                showMask: false,
                checkedStatus: 'blog'
            }
        },
        props: {},
        methods: {
            jumpTo: function (target) {
                switch (target) {
                    case 1: {
                        this.$router.push({
                            path: '/blog',
                        });
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
        created: function () {

        },
        mounted: function () {
            if (document.getElementsByClassName('tr-html')[0]) {
                setTimeout(function () {
                    document.getElementsByClassName('tr-html')[0].className += ' fade-away';
                }, 500);
                setTimeout(function () {
                    document.getElementsByClassName('tr-html')[0].remove();
                }, 1000)
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
        label{
            display: block;
        }
    }

    .menu-bar {
        font-size: 20px;
        color: #fefef9;
    }

    .jump-tag {
        margin: 2px 18px;
        font-size: 24px;
        font-family: 'CN_8bit';
    }

    h1 {
        margin-bottom: 10px;
        font-size: 4em;
        font-family: "CN_8bit";
    }

    .nes-radio:checked + span::before {
        color: #fff;
        top: 2px;
        animation: blink 1s infinite steps(1);
    }
</style>
