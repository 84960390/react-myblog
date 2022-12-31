
import style from './index.module.scss';
import Header from '@/commonets/header';
import Footer from '../footer';
import { connect } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons/lib/icons'
import http from '@/request';
import HeaderRight from '@/commonets/headerRight';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Drawer } from 'antd';
import Loading from '@/commonets/loading';
const login = {
  title: '管理员登录',
  path: '/login'
}
const list = [{
  title: '文章',
  path: '/userPage/selectArticle'
}, {
  title: '图库',
  path: '/userPage/pictures'
}, {
  title: '说说',
  path: '/userPage/share'
}, {
  title: '留言',
  path: '/userPage/message'
}, {
  title: '发布',
  path: '/userPage/addArticle'
}, {
  title: '上传',
  path: '/userPage/addAlbum'
}, {
  title: '日志',
  path: '/userPage/logs'
}, {
  title: '关于',
  path: '/userPage/about'
}]
function UserPage(props) {
  const histroy = useHistory();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const [nowPath, setPath] = useState(histroy.location.pathname);
  const drawer = useRef();
  useEffect(() => {
    http.get('/getStatics').then(res => {
      console.log(res)
      if (res.data) props.setArticleNum(res.data)
    })
  }, [])

  return (
    <div className={style.container}>
      <Header nowPath={nowPath} setPath={setPath} list={list} />
      <div className={style.drag} ref={drawer}></div>
      <Drawer placement="right" getContainer={drawer.current} onClose={onClose} visible={visible} closable={false} width='100'>
        <HeaderRight nowPath={nowPath} setPath={setPath} changeHeaderShow={onClose} list={[...list, login]} />
      </Drawer>

      <div className={style.openHeader} onClick={() => showDrawer()}><MenuOutlined /></div>
      <main>
        <Suspense fallback={<Loading />}>
          {renderRoutes(props.route.routes)}
        </Suspense>
      </main>
      <Footer />
    </div>

  )
}

export default connect(null, {
  setArticleNum(data) {
    {
      return {
        type: 'changeData',
        data
      }
    }
  }
})(UserPage);
