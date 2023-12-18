<template>
    <div class="container">
        <div class="row">
            f:{{ f }}
        </div>
        <div class="row">
            <div class="col">
                <svg width="200" height="200" version="1.1" id="svg10" xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg">
                    <defs id="defs14">
                        <rect x="168.59427" y="105.24052" width="15.599139" height="20.522106" id="rect174" />
                    </defs>
                    <rect width="100%" height="100%" fill="white" id="rect2" />
                    <path :d="'M 95 50 a 500 500 0 0 0 0 100 l ' + d + ' 0 a 300 300 0 0 0 0 -100 Z'" stroke="#7393B3"
                        stroke-width="2" fill="none" id="path4" />
                    <path d="M 0 100 l 200 0" stroke="black" stroke-width="2" fill="none" id="path6" />
                    <path :d="'M 0 70 l 110 0 l ' + f + ' 50'" stroke="red" stroke-width="2" fill="none" id="path8" />
                    <text xml:space="preserve" id="text172"
                        style="font-style:normal;font-weight:normal;font-size:13.3333px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;white-space:pre;shape-inside:url(#rect174);display:inline;fill:#000000;fill-opacity:1;stroke:none"
                        transform="translate(4.5206915,-21.295449)">
                        <tspan :x="100 + f" y="117.03708" id="tspan290">f</tspan>
                    </text>
                </svg>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, ref } from 'vue';

export default {
    setup(props) {

        // const f = computed(() => ((props.n - 1) * ((1 / props.r1) - (1 / props.r2) + ((props.n - 1) * props.d / (props.n * props.r1 * props.r2)))) / 1);
        // const f = computed(() => (1 / ((props.n - 1) * ((1 / props.r1) - (1 / props.r2)) + ((props.n - 1 * props.d) / (props.n * props.r1 * props.r2)))));
        const f = computed(() => (1 / ((props.n - 1) * ((1 / props.r1) - (1 / props.r2)) + (((props.n - 1) * props.d) / (props.n * props.r1 * props.r2)))));
        // const f = computed(() => props.n - 1);
        console.log(f)
        return {
            f
        }
    },
    props: {
        n: {
            type: Number,
            required: true
        },
        r1: {
            type: Number,
            required: true
        },
        r2: {
            type: Number,
            required: true
        },
        d: {
            type: Number,
            required: true
        }
    },
    methods: {
        calculateFocalLengthWithLensmakerEquation() {
            return ((this.n - 1) * ((1 / this.r1) - (1 / this.r2) + ((this.n - 1) * this.d / (this.n * this.r1 * this.r2)))) / 1;
        }
    }
}
</script>

<style scoped></style>
