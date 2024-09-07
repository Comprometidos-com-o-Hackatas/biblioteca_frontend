<script setup>
    import { onMounted, ref } from 'vue';
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import { useBookStore, useRatingStore } from '@/stores/index';
    import RatingComp from '@/components/RatingComp.vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const bookStore = useBookStore()
    const ratingstore = useRatingStore()
    const isopenpopup = ref(false)
    const id = route.params.id
    onMounted(async()=>{
        bookStore.getBooks()
        authStore.getUserInfo()
        bookStore.getSavedBooks()
        console.log(bookStore.state.savedBooks())
    })

    onMounted(()=>{
        bookStore.getBooks()
        ratingstore.getRatings(id)
       setTimeout(() =>{
        console.log(bookStore.state.selectedBook.categoria)
       }, 2000)
    })
</script>
<template>
    <div class="book-detail-container">
        <div :key="index" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup" :categories="bookStore.state.selectedBook.categoria" :url="bookStore.state.selectedBook.capa.url" :genere="bookStore.state.selectedBook.generos" is_list="details"/>
            <BookDescription @rate="isopenpopup = !isopenpopup" @ownBook="ownBook"  :allow="bookStore.state.selectedBook.disponivel ? true : false" :is_avalaible="bookStore.state.selectedBook.disponivel"  :synopsis="bookStore.state.selectedBook.descricao" :title="bookStore.state.selectedBook.titulo"  :nota="bookStore.state.selectedBook.nota"/>
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>