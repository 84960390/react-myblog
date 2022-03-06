
import style from './index.module.scss';
import Header from '../../commonets/header';
import Footer from '../footer';
import {MenuOutlined} from '@ant-design/icons/lib/icons'
import HeaderRight from '../../commonets/headerRight';
import { useState,useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
  const  list=[{
        title:'文章',
        path:'/userPage/selectArticle'
    },{
        title:'图库',
        path:'/userPage/pictures'
    },{
        title:'说说',
        path:'/userPage/share'
    },{
        title:'留言',
        path:'/userPage/message'
    },{
        title:'发布',
        path:'/userPage/addArticle'
    },{
        title:'上传',
        path:'/userPage/addAlbum'
    },{
        title:'日志',
        path:'/userPage/logs'
    },{
        title:'关于',
        path:'/userPage/about'
    }]
function UserPage(props) {
  const histroy=useHistory();
  const [nowPath,setPath]=useState(histroy.location.pathname);
  // 显示右侧tab栏
  const [isHeaderShow,setHeaderShow]=useState(false);
  // 改变右侧tab栏显示状态
  const changeHeaderShow=useCallback(()=>{
    setHeaderShow(!isHeaderShow)
  },[isHeaderShow])
  return (
    <div className={style.container}>
      <Header nowPath={nowPath} setPath={setPath} list={list}/>
      {isHeaderShow&&<HeaderRight nowPath={nowPath} setPath={setPath} changeHeaderShow={changeHeaderShow} list={list}/>}
      <div className={style.openHeader} onClick={()=>changeHeaderShow()}><MenuOutlined /></div>
      <main>
        {renderRoutes(props.route.routes)}
      </main>
      <Footer/>
    </div>

  )
}

export default UserPage;
