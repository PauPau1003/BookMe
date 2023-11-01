<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/service-provider">Service Provider</router-link>
    <router-link to="/Dashboard">Dashboard</router-link>
    <router-link to="/SPHome">SPHome</router-link>
    <router-link to="/LearningAvenue">LearningAvenue</router-link>
    <router-link to="/Permits&Requirements">Permits&Requirements</router-link>  
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <main>
    <TheWelcome />
  </main>
</template>
