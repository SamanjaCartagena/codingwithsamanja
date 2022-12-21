<template>
  <div class="container">
   <center> <img :src="this.image1" class="book1" /> </center>
    
  </div>
</template>

<script>
import image1 from '../assets/books.jpg'
import image2 from '../assets/back.jpg'
export default {
    data(){
        return {
            image1, image2
        }
    }

}
</script>

<style scoped>
.container{
  height:600px;
  width:100%;
  background-image: url('../assets/back.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}
.book1{
 position: relative;
 top:50px;
}
</style>