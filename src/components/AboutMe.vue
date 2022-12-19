<template>
<div>
  <div class="container">
 <div class="pic">
 <center><img :src="this.samanja" class="pic1" /></center>

 </div>
  <div class="about">
  <center>
    <p class="introduction">
    I am a New York based Software Engineer with 10+ years of experience. Follow me on Linkedin, Twitter, Facebook and YouTube for daily coding tips.
    I have worked in millions of projects. Ok not exactly a million. I am exaggerating a little bit. But I have been free lancing for what seems like forever. Please check out some of my projects. 
    Follow me on Twitter for regular coding tips and advice.  
  </p>
  
  </center>
  </div>
  </div>
  <div class="projects">
    
            <img :src="this.image1" class="projectImages"/>
         
            <img :src="this.image2" class="projectImages"/>
         
            <img :src="this.image3" class="projectImages"/>

   
  
  </div>
  </div>
  
</template>

<script>
import samanja from '../assets/samanja.jpg'
import image1 from '../assets/memorandum.png'
import image2 from '../assets/salonZiba.png'
import image3 from '../assets/mark.png'
export default {
    data(){
        return{
            samanja, image1, image2,image3
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
.projects{
    display: grid;
    grid-template-columns: auto auto auto auto;
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
    position:relative;
    left:10%;
}
.projectImages{
    width:300px;
    height:400px;
}
.projectImages:hover{
    width:400px;
    height:600px;
    cursor:pointer;
}
.introduction{
    position: relative;
    top:90px;
    width:60%;
    height:400px;
}
p{
    font-size:15px;
    font-weight: bold;
}
</style>