<script setup>
import {ref,computed, onMounted} from 'vue'
import {manage_book_data, manage_category_data, setAgeLimit} from '@/utils/config'
import SearchBar from '../SearchBar.vue';
import { useBookStore } from '@/stores';
import { booksList, updateBookList } from '@/utils/home';
import ContainerBookOut from '../Home/ContainerBookOut.vue';

const bookStore = useBookStore()
const booksfiltered = ref([])

function filterbooks(search) {
  booksfiltered.value = manage_book_data.value.filter((book) => book.title.startsWith(search))
}

const books = computed(() => {
  if (booksfiltered.value.length > 0) {
    return booksfiltered.value
  }
  return manage_book_data.value
})

const organizeBooks = () => {
    for (let i = 0; i < booksList.value.length; i++) {
      bookStore.state.booksByAge.forEach((book, index)=>{
        if (booksList.value[i].title == bookStore.state.booksByAge[index].generos[0].descricao ) {
          booksList.value[i].books.push(bookStore.state.booksByAge[index])
        }
    }) 
  }
 
}

onMounted(async()=>{
  await bookStore.getBooks()
  console.log(bookStore.state.books[0])
})

</script>
<template>
    <div class="container-manage">
      <div class="manage-reading-box">
        <div class="title-reading">
        <p>Lendo: </p>
        <span class="mdi mdi-delete">Remover</span>
        </div>
        <div class="container-data-reading">
        <div class="box-reading-img">
          <ContainerBookOut :data="bookStore.state.books[0]" />
        </div>
        <div class="box-reading-data">
          <p>Datas:</p>
          <div class="box-data-informed">
            <div class="box-info-data">
              <p>Pego em</p>
              <p>13/09/2024</p>
            </div>

            <div class="box-info-data">
              <p>Dias Restantes: </p>
              <p>40</p>
            </div>

            <div class="box-info-data">
              <p>Status: </p>
              <p>Dentro do Prazo</p>
            </div>
          </div>
        </div>
        </div>

      </div>
         <div class="box-books-block">
            <div class="box-title-search">
                <p>Books: </p>
                <SearchBar @filter="filterbooks" :width="'width: 90%;'" style="font-size: 15px;" :height="'height: 65px;'" />
            </div>
            <div class="box-books-books">
                <div class="book-block-card" v-for="(item, index) in books" :key="index">

                    <img :src="item.img">

                    <button @click="item.isBlocked = !item.isBlocked" class="block"><span :class="!item.isBlocked ? 'mdi mdi-block-helper' : 'mdi mdi-lock-open' "></span></button>

                    <div class="overlay-manage" v-show="item.isBlocked"></div>
                </div>
            </div>
         </div>
    </div>
</template>