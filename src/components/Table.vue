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
                    <td v-for="(header, colIndex) in headers" :key="colIndex">{{ item[header] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script lang="ts">

export default {
    props: {
        items: {
            type: Array<any>,
            required: true,
        },
        headers: {
            type: Array<string>,
            required: true,
        },
    },
};
</script>
  
<style scoped>
/* Estilos específicos del componente si es necesario */
</style>