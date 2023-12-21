<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Loader from './components/Loader.vue'
import { usePageStore } from './stores/pageStore';
import { useAuthStore } from './stores/authStore';
import { computed } from 'vue';

const pageIsLoading = computed(() => {
    return usePageStore().isLoading;
})

const logOut = (e: Event) => {
    useAuthStore().clearIdToken();
}
</script>

<template>
    <header>
        <div class="wrapper">
            <HelloWorld msg="Lens curvature simulator" />

            <nav>

                <RouterLink to="/log-in" v-if="!useAuthStore().isAuthorized()">Log in</RouterLink>
                <RouterLink to="/log-in" v-if="useAuthStore().isAuthorized()" @click="logOut">Log out</RouterLink>
                <RouterLink to="/simulator">Simulator</RouterLink>
                <RouterLink to="/parameters">Parameters</RouterLink>
            </nav>
        </div>
    </header>
    <main>
        <Loader :loading="pageIsLoading"></Loader>
        <RouterView />
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
