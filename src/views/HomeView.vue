<script setup>
  import { bookdetails } from '@/utils/book';
  import BookDetail from '@/components/BookDetail.vue';
  const illes = 4
  const cards = 10
</script>
<template>
  <main class="main-home">
    <section class="corners">
      <div class="container-cards" v-for="(item, index) in illes" :key="index">
          <h3 class="title-container">Mais lidos</h3>

          <div class="container-book" v-for="(itens, index) in cards" :key="index">
            <p>A17</p>
          </div>

          <span class="mdi mdi-arrow-right-thick rarrow"></span>
          <div class="stand-container">
            
          </div>
      </div>
    </section>  
    <footer class="footer-home">
      <div class="box-infos">
        <p>Get in touch:</p>
        <div class="box-icons">
          <span class="mdi mdi-twitter"></span>
          <span class="mdi mdi-instagram"></span>
          <span class="mdi mdi-facebook"></span>
        </div>
      </div>
    </footer>
  </main>
</template>
