<template>
    <div class="vc max-height">
        <div class="mask" v-show="showMask"></div>
        <Win98Dialog @confirm="toggleLayer()" v-show="showConfirm"></Win98Dialog>
        <div style="margin-bottom: 6em;overflow: hidden">
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white">Thank you </h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white">for your efforts </h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white">in technology
                    department</h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><h1 class="text-shadow-white" style="margin-top: 10px">@Canon</h1></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Win98Dialog from "../components/Win98Dialog";
    import '../../node_modules/nes.css/css/nes.css'
    /*import '../JavaScript/three.min'
    import '../JavaScript/TweenMax.min'*/
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
        methods: {},
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
    .menu-bar {
        font-size: 20px;
        color: #fefef9;
    }

    @media screen and (max-width: 500px) {
        .el-row u {
            position: relative;
            font-size: 36px !important;
        }

        label {
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
        font-family: 'PressStart2P';
    }

    h1 {
        margin-bottom: 10px;
        font-size: 2em;
        font-family: "PressStart2P";
    }

    .nes-radio:checked + span::before {
        color: #fff;
        top: 2px;
        animation: blink 1s infinite steps(1);
    }
</style>
