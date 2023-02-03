<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div>
       <the-header></the-header>
        
   <router-view/>
   <the-footer></the-footer>
  </div>
</template>

<style>
body{
  margin:0;
  padding:0;
  background-color: #702a63;
}
</style>
