<template>
  <div class="container">
    <three-navs></three-navs>
    <div>
    <h3 class="titledisplay">Search for Books</h3>
    <input type="search" class="searchInput" placeholder="Search for Tutorials..."  style="text-align:center" v-model="searchVideos"/>

    </div>
    
    <center>
   
    <div class="books" @click="bookclicked">
     <img :src="this.book" />
    </div>
    
    </center>
  </div>
</template>

<script>
import image1 from '../assets/background.jpg';
import book from '../assets/books.jpg'
import threeNavs from '../components/ThreeNavs.vue'
export default {
  components:{
    threeNavs
  },
  data(){
    return{
      image1,
      searchVideos:'',
      book,
      videos:[
     
      ]

    }
  }, computed:{
    search(){
      return this.searchVideos.toLowerCase()
    },
    filteredVideos(){
         return this.videos.filter(video=>video.title.toLowerCase().includes(this.search))
    }
  },
  methods:{
    bookclicked(){
        var anchor3 = document.createElement('a');
        anchor3.href = 'https://www.amazon.com/dp/B0BLGP59B4?ref_=pe_3052080_397514860';
        anchor3.target="_blank";
        anchor3.click();
    }
  }

}
</script>

<style scoped>


.books{
  position: relative;
  top:400px;
}
.books:hover{
  cursor:pointer;
}

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
  left:40%;
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
    left:40%;
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