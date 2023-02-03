<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
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
  background-color: #702a63;
  height: 5000px;
}
</style>
