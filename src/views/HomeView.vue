<script setup>
  import { bookdetails } from '@/utils/book';
  import BookDetail from '@/components/BookDetail.vue';
</script>
<template>
  <main>
      <div v-for="details in bookdetails" :key="details.id">
          <div class="card">
             <router-link :to="'/' + details.id" ><BookDetail :url="details.img" :categories="details.category" :genere="details.genere" is_list="list"/>
             </router-link>
            </div>
      </div>  
  </main>
</template>
