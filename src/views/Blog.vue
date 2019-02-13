<template>
    <div class="vc max-height">
        <div class="mask" v-show="showMask"></div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data: function () {
            return {
                showMask: false,
            }
        }
    }
</script>

<style scoped>

</style>