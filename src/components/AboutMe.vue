<template>
  <div class="container">
 <div class="pic">
 <center><img :src="this.samanja" class="pic1" /></center>

 </div>
  <div class="about">
  <center>
    <h3 class="introduction">
    I am a New York based Software Engineer with 10+ years of experience. Follow me on Linkedin, Twitter, Facebook and YouTube for daily coding tips. 

    

  </h3>
  </center>
  </div>
  </div>
</template>

<script>
import samanja from '../assets/samanja.jpg'
export default {
    data(){
        return{
            samanja
        }
    }

}
</script>

<style scoped>
.pic1{
    position: relative;
    top:90px;
    height:400px;
    width:300px;
}
.container{
    display: flex;
   width:100%;
   height:600px;
   width:100%;
}
.pic{
    width:40%;
    height:600px;
}
.introduction{
    position: relative;
    top:90px;
    width:60%;
    height:400px;
}
</style>