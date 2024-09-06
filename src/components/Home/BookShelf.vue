<script setup>
  import { ref, onMounted } from 'vue';
  import { goDirection } from '@/utils/home';
  import ContainerBookOut from './ContainerBookOut.vue';
  import { useBookStore } from '@/stores/index';
  import { booksList, updateBookList } from '@/utils/home';

  const bookStore = useBookStore()

  const organizeBooks = () => {
    for (let i = 0; i < booksList.value.length; i++) {
      bookStore.state.books.forEach((book, index)=>{
        if (booksList.value[i].title == bookStore.state.books[index].generos[0].descricao ) {
          booksList.value[i].books.push(bookStore.state.books[index])
        }
    })
    
  }
 
}

  onMounted( async () => {
    bookStore.count++
    await bookStore.getBooks()
    bookStore.cards = bookStore.state.books.length

    if (bookStore.count < 2) {
    organizeBooks()
    updateBookList()
    }
}) 

</script>
<template>
    <div class="container-cards-out" v-for="(item, index) in booksList" :key="index">
        <div class="container-cards">
          <h3 class="title-container-home">{{item.title}}</h3>
          
          <div class="cardsOrganized">
          <ContainerBookOut v-for="(book, index) in item.books" :key="index" :item="item.right" :data="item.books[index]" :location="item.location + index" />
          </div>
          <div class="stand-container">
          </div>
          
        </div>
        <span class="mdi mdi-arrow-right-thick rarrow" @click="goDirection('r', item)" v-if="item.right < item.sizeShow"></span>
          <span :class="`mdi mdi-arrow-left-thick larrow`" v-if="item.right > 0" @click="goDirection('l', item)"></span>
      </div>
</template>