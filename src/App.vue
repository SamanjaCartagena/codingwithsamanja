<script setup>
import TheHeader from './components/TheHeader.vue'

</script>

<template>
  <div>
       <the-header></the-header>

   <router-view/>
  </div>
</template>

<style>
body{
  margin:0;
  padding:0;
}
</style>
