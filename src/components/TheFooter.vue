<template>
<div class="container">
    
  <table style="width:100%">
 <tr>
<td>
   <p>JavaScript</p>
    </td>
<td>
   <p>Angular JS</p>
    </td>
    <td>
   <p>React JS</p>
    </td>
    <td>
   <p>Vue JS</p>
    </td>
    <td>
   <p>Svelte</p>
    </td><td>
   <h4>Solid JS</h4>
    </td><td>
   <h4>Next JS</h4>
    </td><td>
   <h4>JavaScript</h4>
    </td>
    <td>
   <h4>JavaScript</h4>
    </td><td>
   <h4>JavaScript</h4>
    </td>
 </tr>
 <tr>
<td>
   <h4>PHP</h4>
    </td>
    <td>
   <h4>Java</h4>
    </td><td>
   <h4>Python</h4>
    </td><td>
   <h4>Ruby On Rails</h4>
    </td><td>
   <h4>Node JS</h4>
    </td><td>
   <h4>Express JS</h4>
    </td><td>
   <h4>PHP</h4>
    </td><td>
   <h4>PHP</h4>
    </td><td>
   <h4>PHP</h4>
    </td><td>
   <h4>PHP</h4>
    </td>
 </tr>
 <tr>
<td>
<h4>DataStructures</h4>
</td>
<td>
<h4>Linux</h4>
</td><td>
<h4>Unix</h4>
</td><td>
<h4>Redis</h4>
</td><td>
<h4></h4>
</td><td>
<h4></h4>
</td><td>
<h4>DataStructures</h4>
</td>

 </tr>
    </table>
</div>
</template>

<script>
export default {
    data(){
        return{
        }
    }

}
</script>

<style scoped>
a{
    text-decoration: none;
    color:white;
    position: relative;
    bottom:30px;
}
td{
    padding:2px;
    text-align: center;
    
}
.container{
    width:100%;
    height:250px;
  background-color: #702a63;
    position: relative;
    top:900px;
    color:white;
}
li{
    text-decoration: none;
    padding:5px;
}
ul{
    text-decoration: none;
}
ul li {
    text-decoration: none;
   list-style: none;
   position: relative;
   top:40px;
}

@media only screen and (max-width:900px) {
 .container{
    position: relative;
    top:2000px;
    z-index:600;
    font-size: 15px;
 }
 ul li {
    text-decoration: none;
    position: relative;
    right:5%;
   list-style: none;
   position: relative;
   top:40px;
}
}
</style>