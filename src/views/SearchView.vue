<script setup>
import { bookstofilter } from '@/utils/searchbooks'
import SearchBar from '@/components/SearchBar.vue'
import BookDetail from '@/components/BookDetail.vue'

import { computed, ref } from 'vue'
const booksfiltered = ref([])

const books = computed(() => {
  if (booksfiltered.value.length > 0) {
    return booksfiltered.value
  }
  return bookstofilter.value
})

function filterbooks(search) {
  booksfiltered.value = bookstofilter.value.filter((book) => book.title.startsWith(search))
  console.log(booksfiltered.value)
}
</script>
<template>
  <div class="search-page-container">
    <SearchBar @filter="filterbooks" :width="'width: 100%'" :sizeIcon="'font-size: 5px'" />
    <div class="filtered-books-container">
      <div v-for="details in books" :key="details.id" class="page-filter-container">
        <router-link :to="'/' + details.id"><BookDetail
          @rate="isopenpopup = !isopenpopup"
          :url="details.img"
          :categories="details.category"
          :genere="details.genere"
          is_list="list"
        />
    </router-link>
      </div>
    </div>
  </div>
</template>

