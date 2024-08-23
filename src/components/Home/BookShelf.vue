<script setup>
import { ref } from 'vue';
  import { bookdetails } from '@/utils/book';
  import { booksList, cards, goDirection } from '@/utils/home';
  import BookDetail from '@/components/BookDetail.vue';
  
  const padding = ref(0)
</script>
<template>
    <div class="container-cards-out" v-for="(item, index) in booksList" :key="index">
        <div class="container-cards">
          <h3 class="title-container-home">{{item.title}}</h3>
          <div class="container-book-out" :style="`right: ${item.right}px;`">
          <div class="container-book" v-for="(index, itens) in cards" :key="index">

            <div class="card-container-home" v-for="(details, index) in bookdetails" :key="index">
             <router-link :to="'/' + details.id" ><BookDetail :url="details.img" :categories="details.category" :genere="details.genere" is_list="list"/>
             </router-link>
            </div>

            <p>A17</p>
          </div>
          </div>
          
          <div class="stand-container">
            
          </div>
          
        </div>
        <span class="mdi mdi-arrow-right-thick rarrow" @click="goDirection(index, 'r')" v-if="item.right < item.sizeShow"></span>
          <span :class="`mdi mdi-arrow-left-thick larrow`" v-if="item.right > 0" @click="goDirection(index, 'l')"></span>
      </div>
</template>