<script lang="ts">
import LensPreview from '../components/LensPreview.vue'
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { usePageStore } from '../stores/pageStore';
import Table from '../components/Table.vue'

export default {

    components: {
        LensPreview,
        Table
    },
    setup() {

        let tableParameters = reactive({
            headers: ['f', 'n', 'r1', 'r2', 'd', 'createdAt'],
            items: []
        });
        return {
            tableParameters
        }
    },

    computed: {
        idToken() {
            return useAuthStore().idToken;
        },
    },
    methods: {

        async getParameters() {
            try {

                usePageStore().setIsLoading(true);
                const apiUrl = `${import.meta.env.VITE_APP_API_URL}/getParametersByUserId`;

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.idToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const data = await response.json();

                this.tableParameters.items = data;
            } catch (error) {
                console.error('Error on load list parameters:', error);
                throw error;
            } finally {
                usePageStore().setIsLoading(false);
            }
        }
    },

    async mounted() {
        if (!useAuthStore().isAuthorized()) {
            this.$router.push("/log-in");
        }

        await this.getParameters()
    }
}



</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        Your parameters
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <Table :headers="tableParameters.headers" :items="tableParameters.items"></Table>
                </div>
            </div>
        </div>
    </main>
</template>
