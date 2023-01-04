import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutMe from '../components/AboutMe.vue';
import Books from '../views/Books.vue'
import Leetcode from '../components/LeetCode.vue'
import php from '../components/ThePHP.vue'
import javascript from '../components/JavaScript.vue'
import vuejs from '../components/VueJs.vue'
import reactjs from '../components/ReactJs.vue'
import googlecloud from '../components/GoogleCloud.vue'
import java from '../components/Java.vue'
const router=createRouter({
    history: createWebHistory(),
    routes:[
        {
         path:'/',
         component:HomePage
        },
        
        {
        path: '/home',
        redirect:'/',
    
                
    },
    {
        path:'/aboutme',
        name:'/aboutme', 
        component:AboutMe
    },
      {
        path:'/books',
        name:'/books', 
        component:Books
    },
    {
        path:'/leetcode',
        name:'/leetcode', 
        component:Leetcode
    },
      {
        path:'/php',
        name:'/php', 
        component:php
    },
    {
        path:'/javascript',
        name:'/javascript',
        component:javascript
    },
        {
        path:'/vuejs',
        name:'/vuejs',
        component:vuejs
    },
      {
        path:'/googlecloud',
        name:'/googlecloud',
        component:googlecloud
    },
     {
        path:'/reactjs',
        name:'/reactjs',
        component:reactjs
    },
       {
        path:'/java',
        name:'/java',
        component:java
    }
    
    
    
    
   
]

});

export default router;