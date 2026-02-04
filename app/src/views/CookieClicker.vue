<template>
  <div class="container">
    <h1>Cookie Clicker</h1>
    <img  @click = "increment" src="/cookie.png" alt="Cookie" />
    <h2>{{count}}</h2>\
    <button @click = "reset"> reset </button>
  </div>
</template>

<script setup> /*javascript*/
import {ref} from 'vue'
const count = ref(0)
function increment(){
  count.value++
}
function reset(){
  count.value = 0
}
</script>

<style scoped> /*css*/
img {
  width: 200px;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
}

</style>