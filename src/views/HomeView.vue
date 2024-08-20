<script setup>
  import { bookdetails } from '@/utils/book';
  import BookDetail from '@/components/BookDetail.vue';
  const illes = 4
</script>
<template>
  <main class="main-home">
    <section class="corners">

  
      <div class="container-cards" v-for="item in illes">
          <h3 class="title-container">Mais lidos</h3>


          <div class="stand-container">
            
          </div>
      </div>
    </section>  
  </main>
</template>
