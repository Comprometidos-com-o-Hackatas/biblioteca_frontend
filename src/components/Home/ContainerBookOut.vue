<script setup>
import { useBookStore, useAuthStore } from '@/stores/index';
import BookDetail from '@/components/BookDetail.vue';
import { onMounted } from 'vue';
import router from '@/router';

const bookStore = useBookStore()

const props = defineProps({
    item: {
        type: String
    },
    data: {
        type: Object
    },
    location: {
        type: String
    },
})

onMounted(async () => {
    await bookStore.getBooks()
})

function toRoute(data) {
    if(props.data.disponivel){
        bookStore.state.selectedBook = data
        router.push('/detail/' + data.id.toString())
    }
}
</script>
<template>
    <div class="container-book-out" :style="`right: ${props.item}px;`">
          <div class="container-book">

            <div class="card-container-home">
             <span class="linkBooks" @click="toRoute(props.data)" ><BookDetail :categories="props.data.categoria" :url="props.data.capa.url" :genere="props.data.generos" :is_avaible="props.data.disponivel" is_list="list"/>
             </span>
            </div>

            <p>{{ props.location }}</p>
          </div>
        </div>
</template>