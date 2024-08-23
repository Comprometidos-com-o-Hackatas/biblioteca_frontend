<script setup>
import { ref } from 'vue';
  import { booksList, goDirection } from '@/utils/home';
  import ContainerBookOut from './ContainerBookOut.vue';
  
  const padding = ref(0)
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