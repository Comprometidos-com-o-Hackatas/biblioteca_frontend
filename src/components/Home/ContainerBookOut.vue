<script setup>
import { useBookStore } from '@/stores/index';
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
    }
})

onMounted(async () => {
    await bookStore.getBooks()
})

function toRoute(data) {
    bookStore.state.selectedBook = data
   router.push('/detail/' + data.id.toString())
}
</script>
<template>
    <div class="container-book-out" :style="`right: ${props.item}px;`">
          <div class="container-book">

            <div class="card-container-home">
             <span class="linkBooks" @click="toRoute(props.data)" ><BookDetail :url="props.data.capa" :categories="props.data.categoria" :genere="props.data.generos" is_list="list"/>
             </span>
            </div>

            <p>A17</p>
          </div>
        </div>
</template>