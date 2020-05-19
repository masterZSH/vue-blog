import Index from '../components/Index.vue'
import Home  from '../components/Home.vue'

export default  [
    { path: '/', component: Index,
      children: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        
      ]
    }
  ]