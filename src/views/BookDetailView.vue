<script setup>
    import { onMounted, ref } from 'vue';
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import { useBookStore } from '@/stores/index';
    import RatingComp from '@/components/RatingComp.vue';
    const bookStore = useBookStore()
    const isopenpopup = ref(false)

    onMounted(()=>{
        bookStore.getBooks()
    })
</script>
<template>
    <div class="book-detail-container">
        <div :key="index" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup" :categories="bookStore.state.selectedBook.categoria" :genere="bookStore.state.selectedBook.generos" is_list="details"/>
            <BookDescription @rate="isopenpopup = !isopenpopup" :is_avalaible="bookStore.state.selectedBook.disponivel"  :synopsis="bookStore.state.selectedBook.descricao" :title="bookStore.state.selectedBook.titulo" />
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>