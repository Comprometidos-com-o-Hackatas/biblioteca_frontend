<script setup>
import {ref} from 'vue'
const set = ref(false)

const emits = defineEmits(
    'setAge'
)

const props = defineProps({
    state: {
        type: Boolean
    }
})
</script>
<template>
    <div class="box-settings">
        <div class="box-switch-age">
            <p>Age limitor: </p>
            <button class="box-switch" :class="{active: props.state}" @click="emits('set')">
                <span class="btn-switch" ></span>
            </button>
        </div>
    </div>
</template>