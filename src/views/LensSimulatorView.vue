<script lang="ts">
import LensPreview from '../components/LensPreview.vue'
import { reactive, ref } from 'vue';

export default {

    components: {
        LensPreview
    },
    setup() {
        const defaultLensmakerForm = {
            n: 1.5,
            r1: 20,
            r2: -20,
            d: 10,
        }
        const lensmakerForm = reactive({
            n: 1.5,
            r1: 20,
            r2: -20,
            d: 10,
        });
        // expose to template and other options API hooks
        return {
            lensmakerForm,
            defaultLensmakerForm
        }
    },

    methods: {
        reset() {
            this.lensmakerForm.n = this.defaultLensmakerForm.n;
            this.lensmakerForm.r1 = this.defaultLensmakerForm.r1;
            this.lensmakerForm.r2 = this.defaultLensmakerForm.r2;
            this.lensmakerForm.d = this.defaultLensmakerForm.d;
        }
    },

    mounted() {

    }
}



</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        Lens Curvature Simulator
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <LensPreview :n="lensmakerForm.n" :r1="lensmakerForm.r1" :r2="lensmakerForm.r2" :d="lensmakerForm.d" />
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class="row">
                <form>
                    <div class="mb-3">
                        <label for="30bnf" class="form-label">Refractive index</label>
                        <input id="30bnf" type="number" name="n" placeholder="Refractive index (n)" class="form-control"
                            v-model="lensmakerForm.n">
                    </div>
                    <div class="mb-3">
                        <label for="30b33" class="form-label">Radius of curvature (R1)</label>
                        <input id="30b33" type="number" name="r1" placeholder="Radius of curvature (R2)"
                            class="form-control" v-model="lensmakerForm.r1">
                    </div>
                    <div class="mb-3">
                        <label for="30112" class="form-label">Radius of curvature (R2)</label>
                        <input id="30112" type="number" name="r2" placeholder="Radius of curvature (R2)"
                            class="form-control" v-model="lensmakerForm.r2">
                    </div>
                    <div class="mb-3">
                        <label for="3ag12" class="form-label">Thickness of the lens</label>
                        <input id="3ag12" type="number" name="d" placeholder="Thickness of the lens" class="form-control"
                            v-model="lensmakerForm.d">
                    </div>

                    <div class="mb-1">
                        <button class="btn btn-primary w-100" type="button">
                            Save
                        </button>
                    </div>
                    <div class="mb-3 text-right">
                        <button class="btn btn-link small" type="button" @click="reset()">
                            Reset
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </main>
</template>
