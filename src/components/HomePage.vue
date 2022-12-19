<template>
  <div>
   <the-header></the-header>
   <books></books>
   <img :src="this.image1" style="z-index:100; height:600px; width:100%;"/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Books from '../components/Books.vue';
import image1 from '../assets/books.jpg'
export default {
  components:{
    TheHeader, Books
  },
  data(){
    return {
      image1
    }
  }

}
</script>

<style>

</style>