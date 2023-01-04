<template>
     <div class="threeNavs">
      
      <ul>
         <li class="topnav" @click="subscription">
         <p class="topnavpara">Subscribe</p>
         </li>
<li class="topnav">
        <p class="topnavpara">Patreon</p>
         </li>
         <li class="topnav">
         <p class="topnavpara">Hire</p>
         </li>
      </ul>
      

    </div>
</template>

<script>
export default {
  methods:{
    subscription(){
          var an = document.createElement('a');
        an.href = 'https://www.youtube.com/@codingwithsamanja8315/playlists';
        an.target="_blank";
        an.click();
    }
  }
}
</script>

<style scoped>
.threeNavs  {

}
.topnav{
  width:100px;
  height:100px;
  background-color:#005fb6;
  color:white;
  display: inline-block;
  opacity: .5;
  z-index:500;
  margin:5px;
  position: relative;
  left:40%;
  animation: box 3s;

}
.topnavpara{
  z-index:600; 
  opacity:1;
   position:relative;
    top:20px;
  font-size:15px;
  text-align: center;
}
@keyframes box {
  0%{
    width:50px;
    height:50px;
  }
  100%{
    width:100px;
    height: 100px;
  }
}
.topnav:hover{
  background-color: white;
  opacity: 1;
  color:black;
  cursor:pointer;
}
.container{
  height:600px;
  position: relative;
  bottom:20px;
width:100%;
  background-image: url('../assets/coding.jpg');
  background-repeat: no-repeat;
  background-size:100%;
  height:700px;
  width: 100%;;
  
}

body{
  padding:0;
  margin:0;
}


      @media only screen and (max-width:1000px) {

  }
@media only screen and (max-width:900px) {

.topnav{
  width:60px;
  height:60px;
  background-color:black;
  color:white;
  display: inline-block;
  opacity: .5;
  z-index:500;
  position: relative;
  left:14%;
  z-index:2;
  margin:5px;
  animation: box 3s;
}
.topnavpara{
  z-index:600; 
  opacity:1;
   position:relative;
    top:10px;
  font-size:10px;
}
    
  }
     @media only screen and (max-width:800px) {

   
  }
   @media only screen and (max-width:700px) {
 
  }
      @media only screen and (max-width:600px) {

  }




</style>