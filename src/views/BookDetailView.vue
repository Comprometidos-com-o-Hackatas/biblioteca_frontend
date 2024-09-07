<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import { useBookStore, useAuthStore } from '@/stores/index';

    import RatingComp from '@/components/RatingComp.vue';
    import api from '@/plugins/api';
    import router from '@/router';
    const bookStore = useBookStore()
    const authStore = useAuthStore()
    const isopenpopup = ref(false)
    const savedBooks = ref([])

    onMounted(async()=>{
        bookStore.getBooks()
        authStore.getUserInfo()
        bookStore.getSavedBooks()
        console.log(bookStore.state.savedBooks())
    })

        // if (data.results.filter(s => s.titulo === bookStore.state.selectedBook.titulo)) {
        //     return true
        // } else {
        // return false
    

    async function ownBook(book) {
        const changedBook = reactive({...bookStore.state.selectedBook})
        changedBook.disponivel = false
        await bookStore.putBooks(changedBook)
        router.push('/home')
        setTimeout(()=> {
            window.location.reload()
        }, 1000)
        const changedUser = reactive({})
    }

    const saveBook = async(book)=> {
        if (seeSaved() == true) {
        // if (setSave.value = true) {
            const {data} = await api.delete(`/favorito/${savedBooks.value.findIndex(s => s.titulo === bookStore.state.selectedBook.titulo)}`)
            return data.results
        } else {
            const {data} = await api.post(`/favorito/`, book)
            return data.results
        }
        // } else {
        // const {data} = await api.delete(`/favorito/${index}`)
        // return data.results
        // }
        
    }

  

</script>
<template>
    <div class="book-detail-container">
        <div :key="index" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup" :categories="bookStore.state.selectedBook.categoria" :genere="bookStore.state.selectedBook.generos" is_list="details"/>
            <BookDescription @saveBook="saveBook({usuario: authStore.userID, livro: bookStore.state.selectedBook.id}, bookStore.state.selectedBook.id)" @rate="isopenpopup = !isopenpopup" @ownBook="ownBook(bookStore.state.selectedBook)"  :allow="bookStore.state.selectedBook.disponivel ? true : false" :is_avalaible="bookStore.state.selectedBook.disponivel"  :synopsis="bookStore.state.selectedBook.descricao" :title="bookStore.state.selectedBook.titulo"  :nota="bookStore.state.selectedBook.nota"/>
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>