<script setup>
  import BookShelf from '@/components/Home/BookShelf.vue'
</script>
<template>
  <main class="main-home">
    <section class="corners">
      <BookShelf />
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
