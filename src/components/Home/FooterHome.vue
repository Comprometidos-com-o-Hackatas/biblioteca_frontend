<script setup>
import router from '@/router';

  function goReport() {
    router.push('/report')
  }
</script>
<template>
    <footer class="footer-home">
      <div class="pdf-box">
        <button class="pdf-box-btn" @click="goReport()"> <span class="mdi mdi-book-multiple"></span> Available Collection</button>
        <button class="pdf-box-btn" @click="goReport()"> <span class="mdi mdi-book-alert"></span> Loans</button>
      </div>
      <div class="box-infos">
        <p>Get in touch:</p>
        <div class="box-icons">
          <span class="mdi mdi-twitter"></span>
          <span class="mdi mdi-instagram"></span>
          <span class="mdi mdi-facebook"></span>
        </div>
      </div>
    </footer>
</template>