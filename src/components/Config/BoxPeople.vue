<script setup>
import { useFamilyStore } from '@/stores/userbooks/family';
import { onMounted } from 'vue';

const familyStore = useFamilyStore()
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

onMounted(()=>{
    familyStore.getFamilies()
})
</script>
<template>
                <div class="card-people">
                    <div class="card-people-img">
                        <img src="https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png" alt="">
                    </div>
                    <div class="id-people">
                        <span :class="props.icon" />
                        <p style="width: 100%;">{{props.name}}</p>
                    </div>
                </div>
</template>