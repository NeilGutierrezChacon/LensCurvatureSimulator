<script lang="ts">
import LensPreview from '../components/LensPreview.vue'
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { usePageStore } from '../stores/pageStore';

export default {

    components: {
        LensPreview
    },
    setup() {

        const signUpForm = reactive({
            email: null,
            password: null
        });

        return { signUpForm };
    },

    methods: {
        async signUp() {
            try {

                usePageStore().setIsLoading(true);

                const apiUrl = `${import.meta.env.VITE_APP_API_URL}/signUp`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.signUpForm.email,
                        password: this.signUpForm.password,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const data = await response.json();

                this.$router.push(`/verify?email=${this.signUpForm.email}`)
            } catch (error) {
                console.error('Error en la función logIn:', error);
                throw error;
            } finally {
                usePageStore().setIsLoading(false);
            }
        }
    },

    mounted() {
        if (useAuthStore().isAuthorized()) {
            this.$router.push("/simulator");
        }
    }
}



</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h3>
                                Sign up
                            </h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="30bnf" class="form-label">Email: </label>
                                    <input id="30bnf" type="email" placeholder="Enter your email" class="form-control"
                                        v-model="signUpForm.email">
                                </div>
                                <div class="mb-3">
                                    <label for="30b33" class="form-label">password</label>
                                    <input id="30b33" type="password" placeholder="Enter your password" class="form-control"
                                        v-model="signUpForm.password">
                                </div>
                                <div class="mb-1">
                                    <button class="btn btn-primary w-100" type="button" @click="signUp()">
                                        Sign up
                                    </button>
                                </div>
                                <div class="mb-3 text-right">
                                    <button class="btn btn-link small" type="button" @click="$router.push('log-in')">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
    </main>
</template>
