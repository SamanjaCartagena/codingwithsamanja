<template>
  <div class="container">
     <three-navs></three-navs>
    <div>
    <h3 class="titledisplay">JavaScript</h3>
    <input type="search" class="searchInput" placeholder="Search for Tutorials..."  style="text-align:center" v-model="searchVideos"/>

    </div>
    
    <center>
    <div class="videosYoutube">
   
      <div v-for="video in filteredVideos" :key="video" >
<iframe width="400" height="300" :src="video.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
   
    
    </div>
    </center>
  </div>
</template>

<script>
import image1 from '../assets/background.jpg';
import threeNavs from '../components/ThreeNavs.vue'
export default {
  components:{
    threeNavs
  },
  data(){
    return{
      image1,
      searchVideos:'',
     
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
  }, computed:{
    search(){
      return this.searchVideos.toLowerCase()
    },
    filteredVideos(){
         return this.videos.filter(video=>video.title.toLowerCase().includes(this.search))
    }
  }

}
</script>

<style scoped>


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
.titledisplay{
  color:white;
  position: absolute;
  top:200px;
  left:45%;
  animation:  titledis 2s;

}
.titledisplay{
  font-size: 45px;
}
@keyframes titledis{
  0%{
    left:0%;
  }
  100%{
    left:45%;
  }
  
}
body{
  padding:0;
  margin:0;
}
.videosYoutube{
  position: relative;
  top:400px;
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.searchInput{
  width:40%;
   height:40px; 
   position: relative;
    top:200px; 
    left:30%;
     }

      @media only screen and (max-width:1000px) {
.videosYoutube{
  position: relative;
  top:200px;
  display: grid;
  margin:10px;
  grid-template-columns: auto auto;
}
    .titledisplay{
      font-size: 35px;
    
    }
  }
@media only screen and (max-width:900px) {
.videosYoutube{
  position: relative;
   top:150px;
  display: grid;
  margin:10px;
  grid-template-columns: auto auto;
}
.titledisplay{
  font-size: 20px;
  position: relative;
  top:20px;
  left:25%;
}


    
  }
     @media only screen and (max-width:800px) {
.videosYoutube{
  position: relative;
  top:150px;
  display: grid;
  margin:10px;
  grid-template-columns: auto auto;
}
   .titledisplay{
    font-size: 30px;
   } 
  }
   @media only screen and (max-width:700px) {
.videosYoutube{
  position: relative;
  top:150px;
  display: grid;
  margin:10px;
  grid-template-columns: auto;
}
.titledisplay{
  font-size: 25px;
}    
  }
      @media only screen and (max-width:600px) {
.videosYoutube{
  position: relative;
  display: grid;
  top:150px;
  margin:10px;
  grid-template-columns: auto ;
}
.titledisplay{
  font-size: 20px;
}
    .searchInput{
  width:60%;
   height:40px; 
   position: relative;
    top:100px; 
    left:18%;
     }
  }
iframe{
  height:250px;
  width:300px;
}
</style>