<template>
    <v-main>
        <v-container fluid grid-list-xl class="px-4 py-4">
            <books-table/>
        </v-container>
    </v-main>
</template>

<script>
    import BooksTable from '../components/BooksTable.vue';
    export default {
        name: 'Board',
        components: {
            BooksTable
        }
    }
</script>