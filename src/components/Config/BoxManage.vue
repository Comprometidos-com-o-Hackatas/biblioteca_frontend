<script setup>
import SearchBar from '../SearchBar.vue';
</script>
<template>
    <div class="container-manage">
         <div class="box-age-limitor">
            <p>Age limitor: </p>
            <p>7</p>
         </div>

         <div class="box-category-all">
            <p>Category forbid</p>
            <div class="box-category">
                <div class="box-checkbox">
                <input type="checkbox" class="checkbox-forbid" name="checkbox-forbid">
                <label for="checkbox-forbid"></label>
                </div>
            </div>
         </div>

         <div class="box-books-block">
            <div class="box-title-search">
                <p>Books: </p>
                <SearchBar :width="'width: 80%'" style="font-size: 15px;" />
            </div>
         </div>
    </div>
</template>