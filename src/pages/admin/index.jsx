
import style from './index.module.scss';
import Header from '../../commonets/header';
import Footer from '../footer';
import {MenuOutlined} from '@ant-design/icons/lib/icons'
import HeaderRight from '../../commonets/headerRight';
import { useState,useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import ToLogin from '../../commonets/toLogin';
import { Drawer } from 'antd';
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
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const drawer=useRef();
  return (
    <div className={style.container}>
      <Header nowPath={nowPath} setPath={setPath} list={list} indexURL='/admin'/>
      {/* 将抽屉挂载到该标签内部 */}
      <div  className={style.drag} ref={drawer}></div>
        <Drawer placement="right" getContainer={drawer.current} onClose={onClose} visible={visible} closable={false} width='100'>
          <HeaderRight nowPath={nowPath} setPath={setPath} changeHeaderShow={onClose} list={list} />
        </Drawer>
      <div className={style.openHeader} onClick={showDrawer}><MenuOutlined /></div>
      <main>
        {window.sessionStorage.state&&window.sessionStorage.state==='success'?renderRoutes(props.route.routes):<ToLogin/>}
      </main>
      <Footer/>
    </div>

  )
}

export default Admin;
