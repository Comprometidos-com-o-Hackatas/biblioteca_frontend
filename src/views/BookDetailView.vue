<script setup>
    import BookDetail from '@/components/BookDetail.vue';
    import BookDescription from '@/components/BookDescription.vue';
    import RatingComp from '@/components/RatingComp.vue';
    import { bookdetails } from '@/utils/book';
    import { ref } from 'vue';
    const isopenpopup = ref(false)
</script>
<template>
    <div class="book-detail-container">
        <div v-for="details in bookdetails" :key="details.id" class="page-detail-container">
            <BookDetail @rate="isopenpopup = !isopenpopup" :url="details.img" :categories="details.category" :genere="details.genere" is_list="details"/>
            <BookDescription @rate="isopenpopup = !isopenpopup" :is_avalaible="details.is_available" :location="details.location" :synopsis="details.synopsis" :title="details.title" />
        </div>
        <div :class=" isopenpopup ? 'rate-container' : null" >
            <RatingComp v-show="isopenpopup" @rate="isopenpopup = !isopenpopup"/>
        </div>
    </div>
</template>