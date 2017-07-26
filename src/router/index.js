import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BirthdayCake from '@/components/BirthdayCake'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/BirthdayCake',
            name: 'BirthdayCake',
            component: BirthdayCake
        }
    ]
})