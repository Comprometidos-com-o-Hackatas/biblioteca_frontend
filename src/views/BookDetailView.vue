<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import { useBookStore } from '@/stores/index';
    import RatingComp from '@/components/RatingComp.vue';
    import router from '@/router';
    const bookStore = useBookStore()
    const isopenpopup = ref(false)
    onMounted(()=>{
       bookStore.getBooks()
       setTimeout(() =>{
        console.log(bookStore.state.selectedBook.categoria)
        console.log('caiu aqui')
       }, 2000)
    })

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

</script>
<template>
    <div class="book-detail-container">
        <div :key="index" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup" :categories="bookStore.state.selectedBook.categoria" :url="bookStore.state.selectedBook.capa.url" :genere="bookStore.state.selectedBook.generos" is_list="details"/>
            <BookDescription @rate="isopenpopup = !isopenpopup" @ownBook="ownBook(bookStore.state.selectedBook)"  :allow="bookStore.state.selectedBook.disponivel ? true : false" :is_avalaible="bookStore.state.selectedBook.disponivel"  :synopsis="bookStore.state.selectedBook.descricao" :title="bookStore.state.selectedBook.titulo"  :nota="bookStore.state.selectedBook.nota"/>
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>