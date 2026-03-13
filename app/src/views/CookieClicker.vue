<template>
  <div class ="pokemon-container">
    <PokemonCard v-for="(mon, index) in pokemon" :key="mon.name" :pokemon="mon" :id="index + 1"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import PokemonCard from '../components/PokemonCard.vue'

const pokemon = ref([])
async function getPokemon(){
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const data = await response.json()
    pokemon.value = data.results
  } catch (error){
    console.log(error)
  }
    
}

onMounted(()=>{
  getPokemon()
})

</script>

<style scoped>

.pokemon-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

</style>