<script setup>
    import BookedBooks from '@/components/BookedBooks.vue';
    import { usertaxes } from '@/utils/taxes';
</script>
<template>
<div class="taxed-container">
<div class="box-container">
    <div v-for="taxes in usertaxes" :key="taxes.id" :class="taxes.id % 2 === 0 ? 'box-pair' : 'box-odd'">
        <BookedBooks :action="taxes.action" :book="taxes.book" :started="taxes.started" :finished="taxes.finished"/>
    </div>
</div>
</div>
</template>
