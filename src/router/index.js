import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutMe from '../components/AboutMe.vue';
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
    }
    
   
]

});

export default router;