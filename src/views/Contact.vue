<template>
    <div class="vc max-height">
        <div class="stick-container">
            <div class="nes-container is-rounded is-dark stick-menu">
                <div>
                    <p>QQ:648030786</p>
                    <p>邮箱:dxmo_001@qq.com</p>
                </div>
                <div>
                    <label @click="menuJump()">
                        <input type="radio" class="nes-radio" name="menu" checked="checked">
                        <span>返回首页</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../node_modules/nes.css/css/nes.css'
    export default {
        name: "Contact",
        components: {},
        methods: {
            handleClick(tab, event) {
                // eslint-disable-next-line
                console.log(tab, event);
            },
            menuJump() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .vc {
        position: relative;
    }

    .stick-container {
        z-index: 10;
        background: #000;
        position: absolute;
        top: 50%;
        margin: -150px 0 0 0;
    }

    .stick-menu {
        font-size: 24px;
        font-family: 'CN_8bit';
        margin: 7px;
        padding: 12px 7px 7px;
        z-index: 20;
    }

    .nes-radio:checked + span::before {
        color: #fff;
    }
</style>