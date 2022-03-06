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
const routes=[
    {
        path:'/',
        exact:true,
        component:Home
    },{
        path:'/pictures',
        component:Pictures
    },{
        path:'/share',
        component:Share
    },{
        path:'/logs',
        component:Logs
    },{
        path:'/about',
        component:About
    },{
        path:'/message',
        component:Message
    },{
        path:'/addArticle',
        component:AddArticle
    },{
        path:'/addAlbum',
        component:AddAlbum
    },{
        path:'/showPic/:type',
        component:ShowPic
    },{
        path:'/article',
        component:Article
    },{
        path:'/selectArticle',
        component:SelectArticle
    }
    
]
export default routes;