<script setup>
  import { ref, onMounted } from 'vue';
  import { goDirection } from '@/utils/home';
  import ContainerBookOut from './ContainerBookOut.vue';
  import { useBookStore } from '@/stores/index';

  const bookStore = useBookStore()

  const organizeBooks = () => {
    for (let i = 0; i < bookStore.booksList.length; i++) {

      for (let book = 0; book < bookStore.state.books.length; book++) {

        if (bookStore.booksList[i].title == bookStore.state.books[book].generos[0].descricao) {
        bookStore.booksList[i].books.push(bookStore.state.books[book])
      }
      }
    }
    console.log(bookStore.state.books[0].generos[0].descricao)
  }
 
  onMounted( async () => {
    await bookStore.getBooks()
    bookStore.cards = bookStore.state.books.length
    organizeBooks()
}) 

</script>
<template>
    <div class="container-cards-out" v-for="(item, index) in bookStore.booksList" :key="index">
        <div class="container-cards">
          <h3 class="title-container-home">{{item.title}}</h3>
          
          <ContainerBookOut v-for="(book, index) in item.books" :key="index" :item="item.right" :data="item.books[index]" />
          <div class="stand-container">
          </div>
          
        </div>
        <span class="mdi mdi-arrow-right-thick rarrow" @click="goDirection('r', item)" v-if="item.right < item.sizeShow"></span>
          <span :class="`mdi mdi-arrow-left-thick larrow`" v-if="item.right > 0" @click="goDirection('l', item)"></span>
      </div>
</template>