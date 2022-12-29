import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutMe from '../components/AboutMe.vue';
import Books from '../views/Books.vue'
import Leetcode from '../components/LeetCode.vue'
import php from '../components/ThePHP.vue'
import javascript from '../components/JavaScript.vue'
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
    }
    
    
    
   
]

});

export default router;