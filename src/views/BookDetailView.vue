<script setup>
    import { onMounted, ref } from 'vue';
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import { useBookStore, useRatingStore } from '@/stores/index';
    import RatingComp from '@/components/RatingComp.vue';
    import { useRoute } from 'vue-router';
    import { useUserBooks } from '@/stores/userbooks/userbooks';
    import axios from 'axios';
    import router from '@/router';
    const date = new Date()
    const route = useRoute()
    const bookStore = useBookStore()
    const userbookstore = useUserBooks()
    const ratingstore = useRatingStore()
    const isopenpopup = ref(false)
    const id = route.params.id
    
    async function ownBook(id){
        const email = localStorage.getItem('email')
        const {data} = await axios.get('http://127.0.0.1:8000/api/usuarios/')
        const finduser = data.results.find(user => user.email === email)
        const bookgot = {
            usuario: finduser.id,
            livro: Number(id),
            data_devolucao: `${date.getFullYear()}-${Number(date.getMonth() + 3).toString()}-${date.getDate()}`
        }
        userbookstore.CreateUserBooks(bookgot)
        location.reload()
    }

    onMounted(()=>{
        bookStore.getBooks()
        ratingstore.getRatings(id)
    })
</script>
<template>
    <div class="book-detail-container">
        <div :key="index" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup"  :categories="bookStore.state.selectedBook.categoria" :url="bookStore.state.selectedBook.capa.url" :genere="bookStore.state.selectedBook.generos" is_list="details"/>
            <BookDescription @rate="isopenpopup = !isopenpopup" @ownBook="ownBook" :allow="bookStore.state.selectedBook.disponivel ? true : false" :is_avalaible="bookStore.state.selectedBook.disponivel"  :synopsis="bookStore.state.selectedBook.descricao" :title="bookStore.state.selectedBook.titulo"  :nota="bookStore.state.selectedBook.nota"/>
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>