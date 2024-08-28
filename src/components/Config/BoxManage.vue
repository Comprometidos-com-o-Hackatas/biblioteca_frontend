<script setup>
import {ref,computed} from 'vue'
import {manage_book_data, manage_category_data, setAgeLimit} from '@/utils/config'
import SearchBar from '../SearchBar.vue';


const booksfiltered = ref([])

function filterbooks(search) {
  booksfiltered.value = manage_book_data.value.filter((book) => book.title.startsWith(search))
  console.log(booksfiltered.value)
}

const books = computed(() => {
  if (booksfiltered.value.length > 0) {
    return booksfiltered.value
  }
  return manage_book_data.value
})

</script>
<template>
    <div class="container-manage">
         <div class="box-age-limitor">
            <p>Age limitor: </p>
                <input type="number" :placeholder="!setAgeLimit ? 'Off': '7'" maxlength="2" :disabled="!setAgeLimit" >
         </div>

         <div class="box-category-all">
            <p>Category forbid:</p>
            <div class="box-category">
                <div class="box-checkbox" v-for="(item, index) in manage_category_data" :key="index">
                <input type="checkbox" class="checkbox-forbid" name="checkbox-forbid" :value="item.label">
                <label for="checkbox-forbid">{{item.label}}</label>
                </div>
            </div>
         </div>

         <div class="box-books-block">
            <div class="box-title-search">
                <p>Books: </p>
                <SearchBar @filter="filterbooks" :width="'width: 90%;'" style="font-size: 15px;" :height="'height: 65px;'" />
            </div>
            <div class="box-books-books">
                <div class="book-block-card" v-for="(item, index) in books" :key="index">

                    <img :src="item.img">

                    <button @click="item.isBlocked = !item.isBlocked" class="block"><span :class="!item.isBlocked ? 'mdi mdi-block-helper' : 'mdi mdi-lock-open' "></span></button>

                    <div class="overlay-manage" v-show="item.isBlocked"></div>
                </div>
            </div>
         </div>
    </div>
</template>