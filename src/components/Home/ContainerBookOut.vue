<script setup>
import { useBookStore } from '@/stores/index';
import BookDetail from '@/components/BookDetail.vue';
import { onMounted } from 'vue';
import router from '@/router';

const bookStore = useBookStore()

const props = defineProps({
    item: {
        type: String
    }
})

onMounted(async () => {
    await bookStore.getBooks()
    console.log(bookStore.state.books)
})

function toRoute(data) {
    bookStore.state.selectedBook = data
   router.push('/detail/' + data.id.toString())
}
</script>
<template>
    <div class="container-book-out" :style="`right: ${props.item}px;`">
          <div class="container-book" v-for="(book, index) in bookStore.state.books" :key="index">

            <div class="card-container-home">
             <span class="linkBooks" @click="toRoute(book)" ><BookDetail :url="book.capa" :categories="book.categoria" :genere="book.generos" is_list="list"/>
             </span>
            </div>

            <p>A17</p>
          </div>
          </div>
</template>