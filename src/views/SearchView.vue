<script setup>
import { computed, onMounted, ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import { useBookStore } from '@/stores/index';
import router from '@/router';
import BookDetail from '@/components/BookDetail.vue';

const booksfiltered = ref([])

const bookStore = useBookStore()

onMounted(async ()=>{
  await bookStore.getBooks()
})

const books = computed(() => {
  if (booksfiltered.value.length > 0) {
    return booksfiltered.value
  }
  return bookStore.state.booksByAge
})

function filterbooks(search) {
  booksfiltered.value = bookStore.state.books.filter((book) => book.titulo.startsWith(search))
}

function toRoute(data) {
   bookStore.state.selectedBook = data
   router.push('/detail/' + data.id.toString())
}
</script>
<template>
  <div class="search-page-container">
    <SearchBar @filter="filterbooks" :width="'width: 100%'" :sizeIcon="'font-size: 5px'" />
    <div class="filtered-books-container">
      <div v-for="details, index in books" :key="index" class="page-filter-container">
        <span class="linkBooks" @click="toRoute(details)">
          <BookDetail
          @rate="isopenpopup = !isopenpopup"
          :categories="details.categoria"
          :genere="details.generos"
          :is_avaible="details.disponivel"
          :url="details.capa ? details.capa.url : ''"
          is_list="list"
         />
    </span>
      </div>
    </div>
  </div>
</template>

