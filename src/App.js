
import style from './App.module.scss';
import Header from './pages/header';
import Home from './pages/home';
import Footer from './pages/footer';
import {MenuOutlined} from '@ant-design/icons/lib/icons'
import HeaderRight from './pages/headerRight';
import { useState,useRef,useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './router/index.js'
function App() {
  
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
      <Header nowPath={nowPath} setPath={setPath}/>
      {isHeaderShow&&<HeaderRight nowPath={nowPath} setPath={setPath} changeHeaderShow={changeHeaderShow}/>}
      <div className={style.openHeader} onClick={()=>changeHeaderShow()}><MenuOutlined /></div>
      <main>
        {/* <Home></Home> */}
        {renderRoutes(routes)}
      </main>
      <Footer/>
    </div>

  )
}

export default App;
