
import style from './index.module.scss';
import Header from '../../commonets/header';
import Footer from '../footer';
import {MenuOutlined} from '@ant-design/icons/lib/icons'
import HeaderRight from '../../commonets/headerRight';
import { useState,useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import ToLogin from '../../commonets/toLogin';
  const  list=[{
        title:'发布文章',
        path:'/admin/addArticle'
    },{
        title:'上传图片',
        path:'/admin/addAlbum'
    },{
        title:'写说说',
        path:'/admin/share'
    },{
        title:'留言管理',
        path:'/admin/message'
    },{
        title:'建站日志管理',
        path:'/admin/logs'
    },{
        title:'关于',
        path:'/admin/about'
    },,{
        title:'首页',
        path:'/'
    }]
function Admin(props) {
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
      <Header nowPath={nowPath} setPath={setPath} list={list} indexURL='/admin'/>
      {isHeaderShow&&<HeaderRight nowPath={nowPath} setPath={setPath} changeHeaderShow={changeHeaderShow} list={list} indexURL='/admin'/>}
      <div className={style.openHeader} onClick={()=>changeHeaderShow()}><MenuOutlined /></div>
      <main>
        {window.sessionStorage.state&&window.sessionStorage.state==='success'?renderRoutes(props.route.routes):<ToLogin/>}
      </main>
      <Footer/>
    </div>

  )
}

export default Admin;
