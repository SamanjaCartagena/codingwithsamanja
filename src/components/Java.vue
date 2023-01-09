 <template>
  <div class="container">
     <three-navs></three-navs>
    <div>
    <h3 class="titledisplay">{...Java}</h3>
    <input type="search" class="searchInput" placeholder="Search for Tutorials..."  style="text-align:center" v-model="searchVideos"/>

    </div>
    
    <center>
    <div class="videosYoutube">
   
      <div v-for="video in filteredVideos" :key="video" class="vids">
<iframe width="400" height="300" :src="video.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
   
    
    </div>
    </center>
  </div>
</template>

<script>
import image1 from '../assets/background.jpg';
import threeNavs from './ThreeNavs.vue'
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
            title:'Linked List in Java',
            video:'https://www.youtube.com/embed/J7173O0VCZA'
          },

      
        {
          id:2,
          title:'Palindrome in Java',
          video:'https://www.youtube.com/embed/b36aX-xoDYg'
        },
       
        {
          id:3,
          title:'final variable, blank final variable, static final variable and static blank final variable',
          video:'https://www.youtube.com/embed/nTTtTSkytys'
        },
     
        {
          id:4,
          title:'Swapping two variables in Java using temp',
          video:'https://www.youtube.com/embed/ts9MvYkVoCk'
        }, 
        {
          id:5,
          title:'Reversing an Integer in Java',
          video:'https://www.youtube.com/embed/W7z0Yi02xpc'
        }, 
   
         {
           id:6,
           title:'Recursion in Java',
          video:'https://www.youtube.com/embed/JFvUWv7C5o8'
        },
          {
            id:7,
            title:'Linked List in Java',
            video:'https://www.youtube.com/embed/66my5RCN-F0'
          },
          {
            id:8, 
            title:'For loop while loop and do while loop in Java',
            video:'https://www.youtube.com/embed/AXgxhhrEyPI'
          },
          {
            id:9,
            title:'Swapping two variables in Java',
            video:'https://www.youtube.com/embed/ts9MvYkVoCk'
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
 background-color: #0a0a22;
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
  top:50px;
  left:39%;
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