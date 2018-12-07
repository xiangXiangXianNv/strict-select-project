import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Find from '../pages/Find/Find'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
import Tab from '../pages/Find/Tab/Tab'
import NotFound from '../components/NotFound/NotFound'
import User from '../pages/User/User'
import Search from '../pages/Search/Search'
export default [
  {
    path:'/home',
    component:Home,
    meta: {
      isShow:true
    }
  },
  {
    path:'/sort',
    component:Sort,
    meta: {
      isShow:true
    }
  },
  {
    path:'/find',
    component:Find,
    meta: {
      isShow:true
    },
    children:[
      {
        path:'tab/:index',
        component:Tab,
        meta: {
          isShow:true
        },
      },
      {
        path:'/find',
        redirect:'/find/tab/0',
        meta: {
          isShow:true
        },
      },
    ]
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta: {
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/user',
    component:User
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home',
    meta: {
      isShow:true
    },
  },
  {
    path:'/*',
    component:NotFound
  }
]
