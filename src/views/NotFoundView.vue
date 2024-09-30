<script setup>
    const token = localStorage.getItem('access')
</script>
<template>
    <div class="not-found-container">
        <h1>pagina não encontrada</h1>
        <p>{{!token ? 'por favor faça o login' : 'continue navegando nas páginas ao lado'}}</p>
    </div>
</template>