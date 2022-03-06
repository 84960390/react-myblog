import style from './index.module.scss';
import { HomeOutlined,SettingOutlined  } from '@ant-design/icons/lib/icons';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';
function Header(props){
    let list=[{
        title:'文章',
        path:'/selectArticle'
    },{
        title:'图库',
        path:'/pictures'
    },{
        title:'说说',
        path:'/share'
    },{
        title:'留言',
        path:'/message'
    },{
        title:'发布',
        path:'/addArticle'
    },{
        title:'上传',
        path:'/addAlbum'
    },{
        title:'日志',
        path:'/logs'
    },{
        title:'关于',
        path:'/about'
    }]
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
            <div className={style.left}><HomeOutlined  onClick={()=>{toPath('/')}}/></div>
            <div className={style.center}>
                {   
                    list.map(item=>{
                        return <div className={`${style.list} ${props.nowPath===item.path&&style.active}`} key={item.path} onClick={()=>{toPath(item.path)}}>{item.title}</div>
                    })
                }
            </div>
            <div className={style.right} onClick={()=>{alert('开发中')}}><SettingOutlined /></div>
        </header>
    )
}
export default Header