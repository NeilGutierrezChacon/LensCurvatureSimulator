<template>
    <div v-if="loading" class="loader-container">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    props: {
        loading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000;
    /* Asegúrate de que sea mayor que el z-index de los demás elementos en la página */
}
</style>