import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Find from '../pages/Find/Find'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
import Recommend from '../pages/Find/Recommend/Recommend'
import Expert from '../pages/Find/Expert/Expert'
import TopNew from '../pages/Find/TopNew/TopNew'
import ShowList from '../pages/Find/ShowList/ShowList'
import FindHome from '../pages/Find/FindHome/FindHome'
import NotFound from '../components/NotFound/NotFound'
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
        path:'recommend',
        component:Recommend,
        meta: {
          isShow:true
        },
      },
      {
        path:'expert',
        component:Expert,
        meta: {
          isShow:true
        },
      },
      {
        path:'showlist',
        component:ShowList,
        meta: {
          isShow:true
        },
      },
      {
        path:'topnew',
        component:TopNew,
        meta: {
          isShow:true
        },
      },
      {
        path:'find-home',
        component:FindHome,
        meta: {
          isShow:true
        },
      },
      {
        path:'/find',
        redirect:'/find/recommend',
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
