<template>
    <div class="card">
        <h2>{{ animal.name }}</h2>
        <h3>{{ animal.species }}</h3>
    </div>
</template>

<script setup>
defineProps({
    animal:{
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 200px;
    border: 3px solid black;
}
</style>