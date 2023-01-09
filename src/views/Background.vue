<template>
  <div class="container">
     <three-navs></three-navs>
    <div>
    <h3 class="titledisplay"> Coding with Samanja {...}</h3>
    <input type="search" class="searchInput" placeholder="Search for Tutorials..."  style="text-align:center" v-model="searchVideos"/>

    </div>
    
    <center>
    <div class="videosYoutube">
   
      <div v-for="video in filteredVideos" :key="video" class="vids">
       <h4> {{video.title}}</h4>
<iframe width="400" height="300" :src="video.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
   
    
    </div>
    </center>
  </div>
</template>

<script>
import image1 from '../assets/background.jpg';
import threeNavs from '../components/ThreeNavs.vue'
import logo from '../assets/logo.jpg'
export default {
  components:{
    threeNavs
  },
  data(){
    return{
      image1,
      searchVideos:'',
      logo,
     
      videos:[
        {
          id:1,
          title:'Date range picker Using Element Plus UI and Vue JS',
           video:'https://www.youtube.com/embed/Y_viVcX4Hok'
          
        },
        {
          id:2,
          title:'Palindrome in Java',
          video:'https://www.youtube.com/embed/b36aX-xoDYg'
        },
           {
          id:3,
          title:'Linked List in Java',
          video:'https://www.youtube.com/embed/J7173O0VCZA'
        },
      
         {
          id:4,
          title:'static final variable and static blank final variable',
          video:'https://www.youtube.com/embed/nTTtTSkytys'
        },
        {
          id:5,
          title:'Image carousel with Vue JS and Element Plus Library',
          video:'https://youtube.com/embed/XRcqUgNvShE'
        },
        {
          id:6,
          title:'Swapping two variables in Java using temp',
          video:'https://www.youtube.com/embed/ts9MvYkVoCk'
        }, 
        {
          id:7,
          title:'Reversing an Integer in Java',
          video:'https://www.youtube.com/embed/W7z0Yi02xpc'
        }, 
        {
          id:8,
          title:'Sorting an array of strings, numbers and objects in JavaScript',
          video:'https://www.youtube.com/embed/DcLfV6d3LUk'
        },
        {
          id:9,
          title:'The differences between var, let and const in JavaScript',
          video:'https://www.youtube.com/embed/7qZgRnXZgEE'
        },{
          id:10,
          title:'functions in JavaScript',
          video:'https://www.youtube.com/embed/61pq2uO_t4U'
        },
        {
          id:11,
          title:'How to pass props in Vue JS',
          video:'https://www.youtube.com/embed/T1sAh4DywNA'
        },
        {
          id:12,
          title:'Create a web server using JavaScript',
          video:'https://www.youtube.com/embed/S5BvIFWEzUk'
        },
         {
           id:13,
           title:'Recursion in Java',
          video:'https://www.youtube.com/embed/JFvUWv7C5o8'
        },
       

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

background-color: #0a0a22;
  height:700px;
  width: 100%;;
  
}
.titledisplay{
  color:white;
  position: absolute;
  top:200px;
  left:36%;
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
    left:36%;
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