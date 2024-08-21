<script setup>
  import { bookdetails } from '@/utils/book';
  import BookDetail from '@/components/BookDetail.vue';
import { reactive } from 'vue';
  const illes = 4
  const cards = 10

  const booksList = reactive({
    mostRead: [],
    popular: [],
    launched: [],
    romance: []
  })

  function moveRight() {

  }
</script>
<template>
  <main class="main-home">
    <section class="corners">
      <div class="container-cards" v-for="(item, index) in illes" :key="index">
          <h3 class="title-container">Mais lidos</h3>

          <div class="container-book-out">
          <div class="container-book" v-for="(index, itens) in cards" :key="index">

            <div class="card-container-home" v-for="(details, index) in bookdetails" :key="index">
             <router-link :to="'/' + details.id" ><BookDetail :url="details.img" :categories="details.category" :genere="details.genere" is_list="list"/>
             </router-link>
            </div>

            <p>A17</p>
          </div>
          </div>
          <span class="mdi mdi-arrow-right-thick rarrow" @click="moveRight(index)"></span>
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
