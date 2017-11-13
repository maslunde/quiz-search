import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Browsequiz from '@/components/Browsequiz'
import CreateQuiz from '@/components/CreateQuiz'
import ViewQuiz from '@/components/ViewQuiz/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/browsequiz',
      name: 'browsequiz',
      component: Browsequiz
    },
    {
      path: '/browsequiz/create',
      name: 'quiz-create',
      component: CreateQuiz
    },
    {
      path: '/quizzes/:quizId',
      name: 'quiz',
      component: ViewQuiz
    }
  ]
})
