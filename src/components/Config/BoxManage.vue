<script setup>
import SearchBar from '../SearchBar.vue';
</script>
<template>
    <div class="container-manage">
         <div class="box-age-limitor">
            <p>Age limitor: </p>
                <input type="text" placeholder="7" maxlength="2" >
         </div>

         <div class="box-category-all">
            <p>Category forbid:</p>
            <div class="box-category">
                <div class="box-checkbox">
                <input type="checkbox" class="checkbox-forbid" name="checkbox-forbid">
                <label for="checkbox-forbid">Adventure</label>
                </div>
            </div>
         </div>

         <div class="box-books-block">
            <div class="box-title-search">
                <p>Books: </p>
                <SearchBar :width="'width: 90%;'" style="font-size: 15px;" :height="'height: 65px;'" />
            </div>
            <div class="box-books-books">
                <div class="book-block-card">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg">
                    <button class="block"><span class="mdi mdi-block-helper"></span></button>
                </div>
            </div>
         </div>
    </div>
</template>