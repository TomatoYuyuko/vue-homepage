<template>
    <div class="tr-html">
        <div class="tr-body">
            <div class="triangle-wrapper">
                <div class="triangle triangle-1"></div>
                <div class="triangle triangle-2"></div>
                <div class="triangle triangle-3"></div>
                <div class="triangle triangle-4"></div>
                <div class="triangle triangle-5"></div>
                <p class="triangle-loading">{{loadingMsg}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    /* eslint-disable */
    export default {
        name: "Loading",
        props: {
            loadingMsg: String
        },
        mounted: function () {
            (() => {
                const $triangles = document.querySelectorAll('.triangle');
                const template = `<svg class="triangle-svg" viewBox="0 0 140 141">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <polygon class="triangle-polygon"  points="70 6 136 138 4 138"></polygon>
                    </g>
                  </svg>`;

                Array.prototype.forEach.call($triangles, ($triangle, index) => {
                    $triangle.innerHTML = template
                })
            })()
        }
    }
</script>

<style>
    .tr-html {
        height: 100%;
        position: absolute;
        width: 100%;

    }

    .tr-body {
        align-items: center;
        background: #000;
        display: flex;
        height: 100%;
        justify-content: center;
    }

    @keyframes grow-and-fade {
        0% {
            opacity: 0;
            transform: scale(0.1) translatez(0);
        }
        40% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1) translatez(0);
        }
    }

    @keyframes pulsing-fade {
        0% {
            opacity: 0.8;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.8;
        }
    }

    .triangle {
        animation: grow-and-fade 2000ms linear infinite;
        height: 150px;
        left: 0;
        opacity: 0;
        width: 150px;
        position: absolute;
        top: 0%;
        transform: translatez(0);
        transform-origin: 50% 60%;
        will-change: opacity, transform;
    }

    .triangle-wrapper {
        height: 150px;
        position: relative;
        width: 150px;
    }

    .triangle-loading {
        animation: pulsing-fade 6000ms ease infinite;
        color: white;
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 300;
        left: 50%;
        letter-spacing: 8px;
        margin-left: 4px;
        margin-top: 10px;
        opacity: 0;
        position: absolute;
        top: 100%;
        transform: translate3d(-50%, -50%, 0);
        text-transform: uppercase;
    }

    .triangle-svg {
        margin-top: -20px;
        opacity: 0.5;
        overflow: visible;
    }

    .triangle-polygon {
        stroke-width: 5px;
    }

    .triangle-1 {
        animation-delay: 0ms;
    }

    .triangle-1 .triangle-polygon {
        stroke: hotpink;
    }

    .triangle-2 {
        animation-delay: 400ms;
    }

    .triangle-2 .triangle-polygon {
        stroke: aqua;
    }

    .triangle-3 {
        animation-delay: 800ms;
    }

    .triangle-3 .triangle-polygon {
        stroke: cornflowerblue;
    }

    .triangle-4 {
        animation-delay: 1200ms;
    }

    .triangle-4 .triangle-polygon {
        stroke: yellow;
    }

    .triangle-5 {
        animation-delay: 1600ms;
    }

    .triangle-5 .triangle-polygon {
        stroke: white;
    }
</style>