<template>
  <div class="container">
    <div style=" margin-left:55px;">
   <p class="headerName" >
     CODING WITH SAMANJA
   </p>
    <ul style="position:relative; bottom:10px;">
        <li class="firstNav" v-for="nav in navItems" @click="navClicked(nav)" :key="nav">{{nav}}</li>

    </ul>
    <ul style="text-decoration:none; width: 100%; " >
      <center>
        <li v-show="sizeNav" class="secondNav" 

        style="text-decoration:none;"
         
         v-for="nav in navItems" @click="showNav" :key="nav">{{nav}}</li>
      </center>

    </ul>
    </div>
    
  <div id="top-socials">
     <ul>
        <li v-for="icon in socialIcons" :key="icon" class="socialNav">
            <img @click="socialClicked(icon)" :src="icon" style="width:25px;height:25px;"/>
        </li>    </ul>

  </div>
                         <img :src="this.listIcon"  class="listIcons" @click="showNav"/>

  </div>
</template>

<script>
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import listIcon from '../assets/listIcon.png';
import medium from '../assets/medium.png';
import email from '../assets/email.png';
export default {
    data(){
        return{
            navItems:['Home','Books', 'Leetcode','Vue JS','Angular JS','React JS','About','News'],
            socialIcons:[facebook,linkedin,twitter,youtube, medium, email],
            listIcon,
            sizeNav:false
        }
    },
    created(){
    

    },
    methods:{
      showNav(){
        this.sizeNav = !this.sizeNav;
      },
      navClicked(v){
        var a=v.split(' ').join().toLowerCase();
        console.log(a)
         this.$router.push({path:`/${a}`})
      },
      socialClicked(v){
      if(v.includes(youtube)){
        var anchor = document.createElement('a');
        anchor.href = 'https://www.youtube.com/channel/UCUe9B_qnHgGzWUTSrE_7AtQ';
        anchor.target="_blank";
        anchor.click();
       }
       else if(v.includes(twitter)){
        console.log(v);
           var anchor3 = document.createElement('a');
        anchor3.href = 'https://twitter.com/Samanja09';
        anchor3.target="_blank";
        anchor3.click();
       }
       else if(v.includes(facebook)){
         var anchor2 = document.createElement('a');
        anchor2.href = 'https://www.facebook.com/Coding-with-Samanja-100645242542738';
        anchor2.target="_blank";
        anchor2.click();
       }
       else if(v.includes(medium)){
            var anchor7 = document.createElement('a');
        anchor7.href = 'https://medium.com/@samchowdhury';
        anchor7.target="_blank";
        anchor7.click();
       }
       else if(v.includes(linkedin)){
         var anchor8 = document.createElement('a');
        anchor8.href = 'https://www.linkedin.com/in/samanja-cartagena-80aa8920a/';
        anchor8.target="_blank";
        anchor8.click();
       }
       else if(v.includes(email)){
         
    !function (c, h, i, m, p) { m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p) }
      (document, "script", "https://chimpstatic.com/mcjs-connected/js/users/5e8f1db9cb0af4c169bb7126a/1690cde44f508ac4feb3d0373.js");
       }
      },

    }
}
</script>

<style scoped>
.headerName{
    font-size: 25px;
}
.listIcons{
 width:50px;
  height:50px;
  z-index: 100;
  display: block;
  position: absolute;
  top:30px;
  right:30px;
  display:none;
 
}
.secondNav{
  position:relative;
        width:100%;
        height:35px;
        top:65px;
        right:23%;
        z-index:500;
        display:block;
        animation: sizeNavAnimate 4s;
        background-color:#f6b243;
        color:black;
        padding:10px;
        border:1px solid black;
        text-decoration:none;
}
.container{
    display:grid;
    grid-template-columns:auto auto;
    height:120px;
}
#top-socials{
    justify-self:end; margin-right:20px;
    margin-top:50px;
}
 .firstNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    right:50px;
}
.firstNav:hover{
    cursor:pointer;
}
.socialNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    right:50px;
}
.socialNav:hover{
    cursor:pointer;
}
body{
    padding:0;
    margin:0;
}
@keyframes sizeNavAnimate {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@media only screen and (min-width:700px){
  .secondNav {
    display:none;
  }
}
@media only screen and (max-width:800px){
  .headerName {
    font-size:25px;
    position: absolute;
    left:5%;
    top:5px;
    display:block;
    font-weight: bold;
  }
    .firstNav{
      text-decoration: none;
    display: inline;
    justify-self:start;
    position: relative;
    padding:10px;
    top:65px;
    right:16%;
}
.socialNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    left:15px;
}
 
}
@media only screen and (max-width: 700px) {
  .headerName {
    font-size:20px;
    position: absolute;
    left:5%;
    top:50px;
    display: none;
    font-weight: bold;
  }
  ul{
    text-decoration: none;
  }
    .container{
    display: grid;
    grid-template-columns: auto auto;
    height:80px;
  }
  #top-socials{
}
  .firstNav{
    
    display:none;
}
.socialNav{
  
    display:none;
}
.listIcons{
   width:40px;
  height:40px;
  z-index: 100;
  display: block;
  position: absolute;
  top:20px;
  right:20px;
 
}
  
  .container{
    display: grid;
    grid-template-columns: auto;
    height:80px;
  }
}
</style>