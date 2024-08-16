<template>
  <div class="detail-container">
    <div class="book-details">
      <div class="book-details-in" v-for="details in bookdetails" :key="details.id">
        <div class="box-img">
          <img :src="details.img" />
        </div>
        <div class="box-list-container">
            
          <div class="list-container">
               <li id="genere">{{ details.genere.description }}</li> 
              <li v-for="categories in details.category" :key="categories.id"  :class="categories.description === 'Aventura' ? 'category-adventure' : 'category-romance'">{{ categories.description }}</li>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>
<script setup>
import { bookdetails } from '@/utils/book'
</script>