<template>
  <div class="container">
     <three-navs></three-navs>
    <div>
    <h3 class="titledisplay">Vue JS {...}</h3>
    <input type="search" class="searchInput" placeholder="Search for Tutorials..."  style="text-align:center" v-model="searchVideos"/>

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
          title:'Date range picker Using Element Plus UI and Vue JS',
           video:'https://www.youtube.com/embed/Y_viVcX4Hok'
          
        },
     
    
    
        {
          id:2,
          title:'Image carousel with Vue JS and Element Plus Library',
          video:'https://youtube.com/embed/XRcqUgNvShE'
        },
   
   
        {
          id:3,
          title:'How to pass props in Vue JS',
          video:'https://www.youtube.com/embed/T1sAh4DywNA'
        },
     
       
        {
          id:4,
          title:'Make a simple counter Using Vue JS and Vuex',
          video:'https://www.youtube.com/embed/W1gcmEaRSJI'
        }, {
            id:5,
            title:'Date Picker Using Element Plus and Vue JS',
            video:'https://www.youtube.com/embed/yM6Y1_XxOkQ'
        },
        {
          id:6, 
          title:'Conditional Rendering of Classes in Vue JS',
          video: 'https://www.youtube.com/embed/HFc-EMoTiQo'
        },{
          id:7,
          title:'Navbar with Vue JS',
          video:'https://www.youtube.com/embed/1XNzJjUqiBo'
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
  left:55%;
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