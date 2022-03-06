import { useEffect, useState } from 'react'
import style from './index.module.scss';
import { connect } from 'react-redux';
import http from '../../request';
import formDate from '../../methods/formDate';
import PageTitle from '../../commonets/pageTitle';
function Share(props) {
    const [datas, setDates] = useState([]);
    // 获取数据
    const getData=()=>{
        http.get('/getAllShare').then(res=>{
            setDates(res.data)
        })
    }
    
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className={style.share}>
            <PageTitle title='我的说说'/>
            <div className={style.shareBox}>
            {datas.map(item => {
                return (
                    <div className={style.shareItem} key={item.id}>
                        <div className={style.left}>
                            <img src={props.myProfile} alt="x"/>
                        </div>
                        <div className={style.right}>
                            <div className={style.content}>
                                {item.context}
                                
                                <div className={style.timeBox}><div className={style.createTime}>{formDate(item.create_time)}</div></div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}
export default connect((state) => {
    return {
        myProfile: state.myProfile.url
    }
})(Share)