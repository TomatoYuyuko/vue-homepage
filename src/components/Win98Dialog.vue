<template>
    <div class="win98">
        <div class='window'>
            <div class='header'>
                <img class='icon' src='http://contra.io/windows_98.css/icons/exe.gif'/>
                tomato.exe
            </div>

            <div class='content'>
                <p>页面施工中</p>
                <div>
                    <button @click="confirm()" style="width: 50px">yes(<u>Y</u>)</button>
                    <!--<button disabled>Say NO</button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Win98Dialog",
        methods: {
            confirm: function () {
                this.$emit('confirm')
            }
        }
    }
</script>

<style scoped>
    .win98 {
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        font-size: 11px;
        font-family: Tahoma, Verdana;
        color: #070707;
        position: absolute;
        top: 30%;
        z-index: 1000;
    }

    .win98 .window {
        background: #bfbfbf;
        border: 1px solid;
        border-top-color: #dfdfdf;
        border-left-color: #dfdfdf;
        border-right-color: #808080;
        border-bottom-color: #808080;
        box-shadow: 1px 1px 0 0 #000;
        width: 360px;
        cursor: default;
    }

    .win98 .window .content {
        padding: 7px 10px;
    }

    .win98 .window .header {
        margin: 2px 2px 0;
        padding: 1px 2px;
        color: #fff;
        background: -webkit-linear-gradient(left, #000080, #1084d0);
        background: linear-gradient(to right, #000080, #1084d0);
        font-weight: bold;
        font-size: 11px;
        line-height: 16px;
    }

    .win98 .window .header .icon {
        width: 16px;
        height: 16px;
        float: left;
        margin-right: 2px;
    }

    .win98 .window .header .buttons {
        height: 14px;
        max-height: 14px;
        float: right;
    }

    .win98 .window .header .buttons button {
        vertical-align: text-top;
        font-weight: bold;
        line-height: 12px;
        padding: 0;
        max-height: 14px;
        height: 14px;
        width: 14px;
    }

    .win98 button {
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        font-size: 11px;
        font-family: Tahoma, Verdana;
        color: #070707;
        background: #bfbfbf;
        border: 1px solid;
        border-top-color: #dfdfdf;
        border-left-color: #dfdfdf;
        border-right-color: #808080;
        border-bottom-color: #808080;
        box-shadow: 1px 1px 0 0 #000;
        text-align: center;
        outline: none;
        padding: 4px;
        cursor: default;
    }

    .win98 button:enabled {
        color: #070707;
    }

    .win98 button:disabled {
        color: #818181;
        text-shadow: 1px 1px #fff;
    }

    .win98 button:active:enabled {
        box-shadow: 1px 1px 0 0 #000 inset;
        border-top-color: #808080;
        border-left-color: #808080;
        border-right-color: #dfdfdf;
        border-bottom-color: #dfdfdf;
    }

    .win98 input {
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        font-size: 11px;
        font-family: Tahoma, Verdana;
        color: #070707;
        box-shadow: -1px -1px 0 0 #808080, 1px 1px 0 0 #fff;
        border: 1px solid;
        border-top-color: #000;
        border-left-color: #000;
        border-right-color: #dfdfdf;
        border-bottom-color: #dfdfdf;
    }

    .win98 .resizable {
        overflow: auto;
        resize: both;
    }

</style>