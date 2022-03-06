import React from 'react';
import style from './index.module.scss';
import PageTitle from '../../commonets/pageTitle';
import { useHistory } from 'react-router-dom';
export default function Pictures() {
  const history=useHistory();
  return (
    <div className={style.pictures}>
        <PageTitle title="我的图库"/>
        <div className={style.classifyBox}>
            <div className={style.classifyItem} onClick={()=>history.push('/userPage/showPic/scenery')}>
                <h2>风景</h2>
                <h3>风景壁纸</h3>
            </div>
            <div className={style.classifyItem} onClick={()=>history.push('/userPage/showPic/fiction')}>
            <h2>科幻</h2>
            <h3>科幻图片壁纸</h3>
            </div>
            <div className={style.classifyItem}onClick={()=>history.push('/userPage/showPic/game')}>
            <h2>游戏</h2>
            <h3>炫酷游戏壁纸</h3>
            </div>
            <div className={style.classifyItem}onClick={()=>history.push('/userPage/showPic/cartoon')}>
            <h2>动漫</h2>
            <h3>精美动漫图片</h3>
            </div>
        </div>
    </div>
  )
}
