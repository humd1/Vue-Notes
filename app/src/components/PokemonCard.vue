<template>
    <router-link :to="pkmnPath">
    <div class="card">
        <h2>{{ pokemon.name }}</h2>
        <h3>{{ id }}</h3>
    </div>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    pokemon: {
        type: Object,
        required: true,
    },
    id:{
        type: Number,
        required: true,
     }
})

const pkmnPath = computed(()=>{
    return `/pkmn/${props.pokemon.name}`
})
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 300px;
    border: 3px solid rgb(161, 177, 201);
    margin: 10px;
    background-color: rgb(224, 237, 255);
    border-radius: 10px;
    color:  rgb(74, 88, 109);
    
}

</style>