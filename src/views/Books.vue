<template>
  <div class="container">
   <center> <img :src="this.image1" class="book1" @click="published"/> </center>
    
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
    },
    methods:{
      published(){
         var anchor8 = document.createElement('a');
        anchor8.href = 'https://www.amazon.com/dp/B0BLGP59B4?ref_=pe_3052080_397514860';
        anchor8.target="_blank";
        anchor8.click();
        
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
.book1:hover{
  cursor: pointer;
}
</style>