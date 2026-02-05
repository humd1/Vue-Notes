<template>
    <div>
    <form @submit.prevent = "login(user)">
        <label for="username">Username</label>
        <input type ="text" v-model="user.username"/>
        <label for="password">Password</label>
        <input type ="password" v-model="user.password"/>
        <button type="submit">Login</button>
    </form>
    <h2 v-if ="loggedin"> {{user.username}} logged in!</h2>
    <h2 v-else>log in pls</h2> 
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
const user = reactive({username: '', password: ''})

const loggedin = ref(false)

function login(user){
    console.log(user)
    loggedin.value = true
}

</script>

<style lang="scss" scoped>

</style>