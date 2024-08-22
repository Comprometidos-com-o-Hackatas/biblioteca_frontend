<script setup>
    defineProps({
        days: Number,
        fines: Number
    })
</script>
<template>
        <div class="info-taxes">
            <p>{{ days }}</p>
            <p>-</p>
            <p>R$ {{ fines }}</p>
        </div>
</template>