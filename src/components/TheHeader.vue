<template>
  <div class="container">
    <div style=" margin-left:55px;">

   <p class="headerName" >
     CODING WITH SAMANJA
   </p>
    <ul style="position:relative; bottom:10px;">
        <li class="firstNav" v-for="nav in navItems" @click="navClicked(nav)"  :key="nav">{{nav}}</li>

    </ul>
    <ul style="text-decoration:none; width: 100%; " >
      <center>
        <li v-show="sizeNav" class="secondNav" 

        style="text-decoration:none;"
         
         v-for="nav in navItems" @click="navClicked(nav)"  :key="nav">{{nav}}</li>
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
                         <div class="frontend" v-if="this.showfrontend"  style="z-index:700">
                          <ul>
                            <li class="frontli" v-for="front in frontend" :key="front" style="z-index:700">
                                 {{front}}
                            </li>
                          </ul>
                         </div>
                              <div class="backend" v-if="this.showbackend"  style="z-index:700">
                          <ul>
                            <li  v-for="back in backend" :key="back" style="z-index:700">
                                 {{back}}
                            </li>
                          </ul>
                         </div>
  </div>
</template>

<script>
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import listIcon from '../assets/listIcon.png';
import bracket1 from '../assets/bracket1.jpg';
import bracket2 from '../assets/bracket2.jpg';

export default {
    data(){
        return{
            navItems:['Home','Books', 'Leetcode','Frontend','Backend','AboutMe',],
            socialIcons:[facebook,linkedin,twitter,youtube],
            frontend:['JavaScript','Vue Js','React Js'],
            backend:['Java', 'Python','RubyonRails'],
            listIcon,
            sizeNav:false,
            showfrontend:false,
            showbackend:false,
            bracket1,
            bracket2
        }
    },
    created(){
    

    },
    methods:{
      showNav(){
        this.sizeNav = !this.sizeNav;
      },
       hovereffect(v){
        
          console.log(v+' was hovered')
        
       },
      navClicked(v){
        
        var a=v.split(' ').join().toLowerCase();
        if(a=='frontend'){
         this.showfrontend = ! this.showfrontend
         this.showbackend= false;
        
        }
        else if(a=='backend'){
         this.showbackend = ! this.showbackend
         this.showfrontend= false;
        }
        else{
        console.log(a)
          this.sizeNav= false;
         this.$router.push({path:`/${a}`})
        }
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
      
       else if(v.includes(linkedin)){
        console.log(v)
         var anchor8 = document.createElement('a');
        anchor8.href = 'https://www.linkedin.com/in/samanja-cartagena-80aa8920a/';
        anchor8.target="_blank";
        anchor8.click();
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
.frontend{
  background-color: transparent;


  padding: 5px;
  width:150px;
  height:80px;
 position: relative;
 left:20%;
 top:1px;
}
.frontend ul{
  text-decoration: none;
  list-style-type: none;
  
}
.frontend li{
  border:.02px solid gray;
  text-align: center;
  width:150px;
  color:white;
  background-color: black;
 opacity: .5;
  height:30px;
  position: relative;
  right:40px;
  bottom:20px;
  padding:10px;
}
.frontend li:hover{
  background-color: white;
  color:black;
  cursor:pointer;
  opacity: 1;
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
.backend{
  background-color: transparent;

  top:1px;
  padding: 5px;
  width:150px;
  height:80px;
 position: relative;
 left:28%;
}
.backend ul{
  text-decoration: none;
  list-style-type: none;
  
}
.backend li{
  border:.02px solid gray;
  text-align: center;
  width:150px;
  color:white;
  background-color: black;
 opacity: .5;
  height:30px;
  position: relative;
  right:40px;
  bottom:20px;
  padding:10px;
}
.backend li:hover{
  background-color: white;
  color:black;
  cursor:pointer;
  opacity: 1;
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
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>