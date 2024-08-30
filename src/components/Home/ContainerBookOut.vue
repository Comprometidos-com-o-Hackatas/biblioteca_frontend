<script setup>
import {ref} from 'vue'
import { useBookStore } from '@/stores/index';
import { bookdetails } from '@/utils/book';
import BookDetail from '@/components/BookDetail.vue';
import { onMounted } from 'vue';

const bookStore = useBookStore()

const props = defineProps({
    item: {
        type: String
    }
})

onMounted(() => {
    bookStore.getBooks()
})
</script>
<template>
    <div class="container-book-out" :style="`right: ${props.item}px;`">
          <div class="container-book" v-for="(index, itens) in bookStore.state.books" :key="index">

            <div class="card-container-home" v-for="(details, index) in bookdetails" :key="index">
             <router-link :to="'/' + details.id" ><BookDetail :url="details.img" :categories="details.category" :genere="details.genere" is_list="list"/>
             </router-link>
            </div>

            <p>A17</p>
          </div>
          </div>
</template>