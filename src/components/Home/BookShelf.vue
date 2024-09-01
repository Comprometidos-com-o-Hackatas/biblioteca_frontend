<script setup>
import { ref, onMounted } from 'vue';
  import { booksList, goDirection, cards } from '@/utils/home';
  import ContainerBookOut from './ContainerBookOut.vue';
  import { useBookStore } from '@/stores/index';

  const bookStore = useBookStore()
  const padding = ref(0)
 
  onMounted(() => {
    bookStore.getBooks()
    cards.value = bookStore.state.books.length
    console.log(cards.value)
}) 

</script>
<template>
    <div class="container-cards-out" v-for="(item, index) in booksList" :key="index">
        <div class="container-cards">
          <h3 class="title-container-home">{{item.title}}</h3>
          
          <ContainerBookOut :item="item.right" />
          <div class="stand-container">
          </div>
          
        </div>
        <span class="mdi mdi-arrow-right-thick rarrow" @click="goDirection('r', item)" v-if="item.right < item.sizeShow"></span>
          <span :class="`mdi mdi-arrow-left-thick larrow`" v-if="item.right > 0" @click="goDirection('l', item)"></span>
      </div>
</template>