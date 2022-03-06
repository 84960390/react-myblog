import style from './index.module.scss';
import { HomeOutlined,SettingOutlined  } from '@ant-design/icons/lib/icons';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';
function Header(props){
    // let list=[{
    //     title:'文章',
    //     path:'/userPage/selectArticle'
    // },{
    //     title:'图库',
    //     path:'/userPage/pictures'
    // },{
    //     title:'说说',
    //     path:'/userPage/share'
    // },{
    //     title:'留言',
    //     path:'/userPage/message'
    // },{
    //     title:'发布',
    //     path:'/userPage/addArticle'
    // },{
    //     title:'上传',
    //     path:'/userPage/addAlbum'
    // },{
    //     title:'日志',
    //     path:'/userPage/logs'
    // },{
    //     title:'关于',
    //     path:'/userPage/about'
    // }]
    const histroy=useHistory();
    const toPath=useCallback(
      (path) => {
          histroy.push(path);
            props.setPath(path);
      },
      [],
    )
    

    return (
        <header>
            <div className={style.left}><HomeOutlined  onClick={()=>{toPath(props.indexURL||'/')}}/></div>
            <div className={style.center}>
                {   
                    props.list.map(item=>{
                        return <div className={`${style.list} ${props.nowPath===item.path&&style.active}`} key={item.path} onClick={()=>{toPath(item.path)}}>{item.title}</div>
                    })
                }
            </div>
            <div className={style.right} onClick={()=>histroy.push('/login')}><SettingOutlined /></div>
        </header>
    )
}
export default Header