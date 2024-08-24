<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>
<template>
                <div class="card-people">
                    <div class="card-people-img">
                        <img src="../../assets/media/renas.png" alt="">
                    </div>
                    <div class="id-people">
                        <span :class="props.icon" />
                        <p>{{props.name}}</p>
                    </div>
                </div>
</template>