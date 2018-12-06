import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Find from '../pages/Find/Find'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
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
    }
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
    redirect:'/sort',
    meta: {
      isShow:true
    }
  },
]
