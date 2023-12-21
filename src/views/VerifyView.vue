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


        const verifyForm = reactive({
            email: null,
            verificationCode: null
        });

        return { verifyForm };
    },

    methods: {
        async verify() {
            try {

                usePageStore().setIsLoading(true);

                const apiUrl = `${import.meta.env.VITE_APP_API_URL}/verify`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.verifyForm.email,
                        verificationCode: this.verifyForm.verificationCode,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const data = await response.json();

                this.$router.push("/log-in")
            } catch (error) {
                console.error('Error in the verify account:', error);
                throw error;
            } finally {
                usePageStore().setIsLoading(false);
            }
        },

        getEmailFromQuery() {
            const emailQueryParam = this.$route.query.email;

            // Verifica si el parámetro email existe en la query
            if (emailQueryParam !== undefined) {
                // Devuelve el valor del parámetro email
                return emailQueryParam;
            } else {
                // Si el parámetro email no existe, retorna null
                return null;
            }
        },
    },

    mounted() {
        if (useAuthStore().isAuthorized()) {
            this.$router.push("/simulator");
        }

        this.verifyForm.email = this.getEmailFromQuery()
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
                            <h4>
                                Verify your account
                            </h4>
                            <p>
                                Check your email, you should have received a verification code
                            </p>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="30bnf" class="form-label">Email: </label>
                                    <input id="30bnf" type="email" placeholder="Enter your email" class="form-control"
                                        v-model="verifyForm.email">
                                </div>
                                <div class="mb-3">
                                    <label for="30b33" class="form-label">Code: </label>
                                    <input id="30b33" type="text" placeholder="Enter your verify code" class="form-control"
                                        v-model="verifyForm.verificationCode">
                                </div>
                                <div class="mb-1">
                                    <button class="btn btn-primary w-100" type="button" @click="verify()">
                                        Verify
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
