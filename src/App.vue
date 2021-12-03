<template>
  <Header/>
  <router-link to="/home">Home</router-link>
  <span> | </span>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
