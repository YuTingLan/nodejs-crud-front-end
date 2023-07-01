<template>
    <!-- {{books}} -->
    <div v-for="book in books" v-bind:key="book.id" >
        <h2> {{book.name}} </h2>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "BookView", 
        data() {
            return{
                //  宣告空陣列，要存取後端取得的資料
                books: [],
            };
        },
        async created() {
            // 進到這個檔案第一次就會新增（在這打ＡＰＩ）
            const result = await axios.get('/api/books');
            const books = result.data;
            this.books = books;
        }        
    }
</script>

<style>

</style>