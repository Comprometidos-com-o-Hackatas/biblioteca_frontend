<script setup>
import { savedBooks } from '@/stores/saveds';
import BookDetail from '@/components/BookDetail.vue';

const books = savedBooks
</script>

<template>
    <header class="saved-header">
        <h2 class="saved-title">SAVED BOOKS</h2>
        <div class="saved-search-btn">
            <i class="mdi mdi-magnify"/>
        </div>
    </header>
    <main class="saved-main">
        <div class="saved-book" v-for="(book, index) in books" :key="index">
            <BookDetail :url="book.img" :categories="book.category" :genere="book.genere" is_list="list"/>
        </div>
    </main>
</template>