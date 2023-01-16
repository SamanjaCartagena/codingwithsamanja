<template>
  <div class="container">
    <three-navs></three-navs>
    <div>
    <h3 class="titledisplay">Leetcode Problems {...}</h3>
    <input type="search" class="searchInput" placeholder="Search for leetcode Tutorials..."  style="text-align:center" v-model="searchVideos"/>

    </div>
    
    <center>
    <div class="videosYoutube">

      <div v-for="video in filteredVideos" :key="video" class="vids">
                <h3>{{video.title}}</h3>

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
          title:'Leetcode No.9 Palindrome Number',
           video:'https://www.youtube.com/embed/CEwO4zHRl_E'
          
        },
        {
          id:2,
          title:'Leetcode No.1 Two Sum',
          video:'https://www.youtube.com/embed/GefaCDMUpp4'
        },
        {
          id:3,
          title:'Leetcode No.20 Valid Parentheses',
          video:'https://www.youtube.com/embed/UYHwBA7HcNE'
        },
         {
          id:4,
          title:'Leetcode No.7 Reverse Integer ',
          video:'https://www.youtube.com/embed/3d5KYHW0l2E'
        },
         {
          id:5,
          title:'Leetcode No.33 Rotating Sorted Array',
          video:'https://www.youtube.com/embed/G4ZuZDNv9Rk'
        },
         {
          id:6,
          title:'Leetcode No.217 Containing Duplicates',
          video:'https://www.youtube.com/embed/N7KJFvgOfm0'
        },
        {
          id:7,
          title:'Leetcode No.442 Finding duplicates in an array',
          video:'https://www.youtube.com/embed/MM29ZuRyIhc'
        },
        {
          id:8,
          title:'Leetcode No.27 Remove Element',
          video:'https://www.youtube.com/embed/a9pZgVOTqsU'
        },
        {
          id:9,
          title:'Leetcode No.22 Generate Parentheses',
          video:'https://www.youtube.com/embed/0UER0gKjTRQ'
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
  background-color:#0a0a22;
  height:700px;
  width: 100%;;
  
}
.vids{
  background-color: white;
  border:1px solid #0a0a22;
}
.titledisplay{
  color:white;
  position: absolute;
  top:200px;
  left:37%;
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
    left:37%;
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