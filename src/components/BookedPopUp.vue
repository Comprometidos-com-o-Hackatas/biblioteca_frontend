<script setup>
    defineProps({
        id: Number,
        title: String,
        status: String,
        fine: Number,
        booked_in: String,
        expire_in: String,
        days: Number
    })

</script>
<template>
        <div class="popup-card">
            <div class="back">
                <div class="actions">
                    <button @click="$emit('back')">X</button>
                    <button v-if="status === 'pendente'" @click="$emit('devolver', id)" id="devolver">devolver</button>
                </div>
                <p>{{ title }}</p>
            </div>
            <div class="data-container">
            <div class="box-data">
                <div class="title-data">
                    <p>Status:</p>
                    <p>Taxa:</p>
                    <p>Booked in:</p>
                    <p>Expira em:</p>
                    <p>Dias restantes:</p>
                </div>
                <div class="data-items">
                    <p>{{ status }}</p>
                    <p>{{ fine }}</p>
                    <p>{{ booked_in }}</p>
                    <p>{{ expire_in }}</p>
                    <p>{{ days }}</p>
                </div>
            </div>
                <div class="fines-page">
                    <router-link :to="'/booked/taxes/' + id"><button ><i class="mdi mdi-information-variant"></i></button></router-link>
                    <p>Fines ?</p>
                </div>
            </div>
        </div>
</template>