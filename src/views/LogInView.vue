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

        const logInForm = reactive({
            email: null,
            password: null
        });

        return { logInForm };
    },

    methods: {
        async logIn() {
            try {

                usePageStore().setIsLoading(true);
                const baseUrl = import.meta.env.VITE_APP_API_URL;
                const apiUrl = `${baseUrl}/login`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.logInForm.email,
                        password: this.logInForm.password,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const data = await response.json();

                useAuthStore().setIdToken(data.idToken);

                this.$router.push("/simulator");
            } catch (error) {
                console.error('Error en la función logIn:', error);
                throw error;
            } finally {
                usePageStore().setIsLoading(false);
            }
        }
    },

    mounted() {
        console.log(import.meta.env);
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
                                Log in
                            </h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="30bnf" class="form-label">Email: </label>
                                    <input id="30bnf" type="email" placeholder="Enter your email" class="form-control"
                                        v-model="logInForm.email">
                                </div>
                                <div class="mb-3">
                                    <label for="30b33" class="form-label">password</label>
                                    <input id="30b33" type="password" placeholder="Enter your password" class="form-control"
                                        v-model="logInForm.password">
                                </div>
                                <div class="mb-1">
                                    <button class="btn btn-primary w-100" type="button" @click="logIn()">
                                        Log in
                                    </button>
                                </div>
                                <div class="mb-3 text-right">
                                    <button class="btn btn-link small" type="button" @click="$router.push('sign-up')">
                                        Sign up
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
