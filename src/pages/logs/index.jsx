import style from './index.module.scss';
import PageTitle from '../../commonets/pageTitle';
import { useEffect,useState} from 'react';
import http from '../../request';
import formDate from '../../methods/formDate';
export default function Logs() {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        http.get('/getLogs').then(res=>setDatas(res.data))
    },[])
    return (
        <div className={style.logs}>
            {/* <div className={style.title}>
                建站日志
            </div> */}
            <PageTitle title="建站日志"/>
            <div className={style.logBox}>
                {
                    datas.map(item => {
                        return (
                            <div className={style.logItem} key={item.id}>
                                <div className={style.top}>
                                    <div className={style.round}></div>
                                    <div className={style.time}>{formDate(item.create_time,false)}</div>
                                </div>
                                <div className={style.bottom}>
                                    <div className={style.line}></div>
                                    <div className={style.context}>
                                        {item.events}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}