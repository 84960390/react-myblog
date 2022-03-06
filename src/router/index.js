import Home from '../pages/home';
import Pictures from '../pages/pictrues';
import Share from '../pages/share';
import Logs from '../pages/logs';
import About from '../pages/about';
import Message from '../pages/message';
import AddArticle from '../pages/addArticle';
import AddAlbum from '../pages/addAlbum';
import ShowPic from '../pages/showPic';
import Article from '../pages/article';
import SelectArticle from '../pages/selectArticle';
import UserPage from '../pages/userPage';
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';
const routes=[
   {
       path:'/',
       exact:true,
       render:()=><Redirect to='/userPage'/>,
   },{
       path:'/userPage',
       component:UserPage,
       routes:[
        {
            path:'/userPage',
            exact:true,
            render:()=><Redirect to='userPage/home'/>,
        },
        {
            path:'/userPage/home',
            component:Home
        },{
            path:'/userPage/pictures',
            component:Pictures
        },{
            path:'/userPage/share',
            component:Share
        },{
            path:'/userPage/logs',
            component:Logs
        },{
            path:'/userPage/about',
            component:About
        },{
            path:'/userPage/message',
            component:Message
        },{
            path:'/userPage/addArticle',
            component:AddArticle
        },{
            path:'/userPage/addAlbum',
            component:AddAlbum
        },{
            path:'/userPage/showPic/:type',
            component:ShowPic
        },{
            path:'/userPage/article',
            component:Article
        },{
            path:'/userPage/selectArticle',
            component:SelectArticle
        }
       ]
   },
   {
       path:'/login',
       component:Login
   }
    
]
export default routes;