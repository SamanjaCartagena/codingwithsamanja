import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutMe from '../components/AboutMe.vue';
import Books from '../views/Books.vue'
import Leetcode from '../components/LeetCode.vue'
import php from '../components/ThePHP.vue'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        alias:'/home',
                
        component:HomePage, 
    },
    {
        path:'/about',
        name:'/about', 
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
    }
    
    
    
   
]

});

export default router;