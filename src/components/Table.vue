<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, rowIndex) in items" :key="rowIndex">
                    <td v-for="(value, colIndex) in headers" :key="colIndex">{{ item[value] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script lang="ts">

export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        headers: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
/* Estilos específicos del componente si es necesario */
</style>