<script setup>
    defineProps({
        action: String,
        book: String,
        started: String,
        finished: String
    })
</script>
<template>
<div class="booked-info">
    <p>{{ action }}</p>
    <p>{{ book }}</p>
    <p>{{ started }}</p>
    <p>{{ finished }}</p>
</div>
</template>
