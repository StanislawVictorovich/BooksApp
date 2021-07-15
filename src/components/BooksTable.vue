<template>
    <v-main>
        <v-data-table
            dense
            :loading="loading"
            :headers="headers"
            :items="books"
            :items-per-page="5"
            class="elevation-1"
        >
        <template v-slot:item.publishDate="{ item }">
            {{item.publishDate | formatDate}}
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
        </template>
        </v-data-table>
    </v-main>
</template>

<script>
    import dataService from '../services/data-service';
    export default {
        name: 'BooksTable',
        components: {},
        data: () => ({
            headers: [
                {
                    text: 'Title',
                    align: 'start',
                    sortable: true,
                    value: 'title'
                },
                {
                    text: 'Description',
                    align: 'start',
                    sortable: false,
                    value: 'description'
                },
                {
                    text: 'Publish Date',
                    align: 'start',
                    sortable: true,
                    value: 'publishDate'
                },
                {
                    text: 'Actions',
                    align: 'start',
                    sortable: false,
                    value: 'actions'
                },
            ],
            books: [],
            loading: true,
        }),
        methods: {
            async deleteItem(item) {
                const index = this.books.findIndex((book) => book.id === item.id);
                this.loading = true;

                try {
                    await dataService.deleteBook(item.id);
                    this.books.splice(index, 1);
                } catch (e) {
                    console.log(e);
                } finally {
                    this.loading = false;
                }
            }
        },
        async mounted() {
            const { data } = await dataService.getBooks();
            this.books = data;
            this.loading = false;
        }
    }
</script>

<style lang="scss">

</style>