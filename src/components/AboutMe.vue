<template>
<div>
  <div class="container">
 <div class="pic">
 <center><img :src="this.samanja" class="pic1" /></center>

 </div>
  <div class="about">
  <center>
    <p class="introduction">
        There is a saying that "Actions speak louder than words", yes I believe in that saying. But just taking actions can also be useless if the results do not say anything.Results speak louder than actions. And lastly, effect speaks louder than results. 
        Become an effective coder by learning everything the right way. 
    I am a New York based Software Engineer with 10+ years of experience. Follow me on Linkedin, Twitter, Facebook and YouTube for daily coding tips. Will building a twitter
    clone, facebook clone or netflix clone help you break into tech? Will a super fancy portfolio with crazy animations help you break into tech. No, it wont. Only practicing codes with the right mindset would help you become a software engineer. Practice coding with me and unleash your passion first. 
    Only than you will become a super coder.  Join my discord chat group. 
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