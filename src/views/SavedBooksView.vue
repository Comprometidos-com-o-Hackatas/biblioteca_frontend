<script setup>
import BookDetail from '@/components/BookDetail.vue';
import { onMounted } from 'vue';
import { useSavedStore } from '@/stores/saved/saved';
const store = useSavedStore()

onMounted(() =>{
    store.GetSavedBooks()
    console.log(store.savedbooks)
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
            <BookDetail :url="book.livro.capa.file" :categories="book.livro.categoria" :genere="book.livro.generos"  is_list="list" :is_avaible="book.livro.disponivel"/>
        </div>
    </main>
</template>