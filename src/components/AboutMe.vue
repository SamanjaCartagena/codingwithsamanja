<template>
<div>
  <div class="container">
 <div class="pic">
 <center><img :src="this.samanja" class="pic1" /></center>

 </div>
  <div class="about">
  <center>
    <p class="introduction">
       I am a senior software engineer. Check out some of my freelancing work. Join my discord chat group.  
  </p>
  
  </center>
  </div>
  </div>
  <div class="projects">
    
            <img :src="this.image1" class="projectImages"/>
         
            <img :src="this.image2" class="projectImages"/>
         
            <img :src="this.image3" class="projectImages"/>

                         <img :src="this.image4" class="projectImages"/>

  
  </div>
  </div>
  
</template>

<script>
import samanja from '../assets/samanja.jpg'
import image1 from '../assets/memorandum.png'
import image2 from '../assets/salonZiba.png'
import image3 from '../assets/mark.png'
import image4 from '../assets/santorini.jpg'
export default {
    data(){
        return{
            samanja, image1, image2,image3, image4
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
 
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size:100%;
 color:white;

}
.pic{
    width:40%;
    height:600px;

    position:relative;
    left:10%;   
    opacity: 0.5;
    
    animation: pic 4s;
}
@keyframes pic {
0%{
  opacity: 0;
}
100%{
 opacity: .5;
}
    
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