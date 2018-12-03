import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Find from '../pages/Find/Find'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/find',
    component:Find
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/home'
  },
]
