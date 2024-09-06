<template>
    <div class="box-critic-container">
        <div class="user-box">
            <div>
                <img :src="photo !== null ? 'https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png' : photo">
            </div>
            <div id="rate">
                <StarsComp :is_rating="true" :userrate="rate"/>
                <p>{{ rate }}</p>
            </div>
        </div>
        <div class="box-content">
            <p>{{ description }}</p>
        </div>
    </div>
</template>
<script setup> 
    import StarsComp from './StarsComp.vue';
    defineProps({
        photo:{
            type: URL,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        rate:{
            type: String,
            required: true
        }
    })
</script>