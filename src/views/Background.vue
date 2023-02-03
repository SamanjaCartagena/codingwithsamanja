<template>
  <div>
    <div class="logo">
    <div class="topLogo">
    <h2>CODING</h2>
    <h3>with</h3>


    </div>
    <h1>...SAMANJA</h1>
    <div class="vl"></div>
    <div class="nav">
      <ul>
       <li v-for="nav in navBar" :key="nav">
        {{nav}}
       </li>
      </ul>
    </div>
    <center><input type="search" class="searchBar"  placeholder="Search for Youtube Videos" v-model="searchVideos"/></center>
    </div>
        <div class="videosYoutube">

        <div v-for="video in filteredVideos" :key="video" class="vids">
        <h4>{{video.title}}</h4>
<iframe width="400" height="300" :src="video.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

  </div>
</template>

<script>
export default {
 data(){
   return{
    navBar:['Blog','Courses','Stuff','Books'], 
    videos:[
         
        {
          id:1,
          title:'The differences between var, let and const in JavaScript',
          video:'https://www.youtube.com/embed/7qZgRnXZgEE'
        },{
          id:2,
          title:'functions in JavaScript',
          video:'https://www.youtube.com/embed/61pq2uO_t4U'
        },
        {
          id:3,
          title:'Create a web server using JavaScript',
          video:'https://www.youtube.com/embed/S5BvIFWEzUk'
        },
        {
          id:4,
          title:'Sets in JavaScript | Create an array from sets | add, delete sort sets',
          video:'https://www.youtube.com/embed/ztw4Gh8eogw'
        },
        {
          id:5,
          title:'Sort an array of strings, numbers and objects in JavaScript',
          video:'https://www.youtube.com/embed/DcLfV6d3LUk'
        }

      ]
   }
 },

created(){
  document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "...SAMANJA", "...SAMANJA", "...SAMANJA", "...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA","...SAMANJA"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
},
computed:{
    search(){
      return this.searchVideos
    },
    filteredVideos(){
         return this.videos.filter(video=>video.title.includes(this.search))
    }
  }
}
</script>

<style scoped>
body {
    background-color: #702a63;

  height: 100%;
  font-family: 'tradegothiclt-bold', sans-serif;
}
.nav{
  position: absolute;
  top:35%;
  left:53%;
}
.videosYoutube{
  position: relative;
  top:400px;
  display: grid;
  grid-template-columns: auto auto auto auto;
}
li{
  color:#efe2c8;
  list-style-type: none;
  padding:5px;
  font-size: 20px;
}
li:hover{
  background-color:#efe2c8 ;
  color:#702a63;
  border-radius:.5px;
  cursor: pointer;
}
.topLogo{
   display: flex;
}
.vl {
  border-left: 6px solid #d0b8a3;
  height: 8em;
  position: absolute;
  top:37%;
  left:54%;
}
.searchBar{
  position:absolute;
  top:55%;
  left:30%;
  z-index: 500;
  padding:3px;
  width:30%;
  height:40px;
  
  color:#702a63;
  font-size: 20px;
  animation:insideSearch 4s 
}
@keyframes insiderSearch {
 
}

h1 {
  position: absolute;
  top:40%;
  left:32%;
  font-size: 4em;
  color: #f7f5c9;
  text-transform: uppercase;
}
h2{
  position: absolute;
  top:35%;
  left:30%;
  font-size: 3em;
  color:#d3bfa1;
}
h3{
  position: absolute;
  top:23%;
  left:42%;
  font-size:6em;
  color:#ede6db;
}

span {
  border-right: .05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>