<script setup>
import { savedBooks } from '@/stores/saveds';
import BookDetail from '@/components/BookDetail.vue';
import { onMounted } from 'vue';
import { useBookStore } from '@/stores';
import { useSavedStore } from '@/stores/saved/saved';
const store = useSavedStore()
const books = savedBooks

onMounted(() =>{
    store.GetSavedBooks()
})
</script>
<template>
    <header class="saved-header">
        <h2 class="saved-title">Meus livros favoritos</h2>
        <div class="saved-search-btn">
            <i class="mdi mdi-magnify"/>
        </div>
    </header>
    <main class="saved-main">
        <div class="saved-book" v-for="book in store.savedbooks" :key="book.id">
            <BookDetail :url="book.livro.capa.file" :categories="book.livro.categoria" :genere="book.livro.generos" is_list="list"/>
        </div>
    </main>
</template>