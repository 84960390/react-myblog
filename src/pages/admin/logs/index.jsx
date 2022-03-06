import style from './index.module.scss';
import PageTitle from '../../../commonets/pageTitle';
import { useEffect,useState} from 'react';
import http from '../../../request';
import formDate from '../../../methods/formDate';
import { message } from 'antd';
export default function AdminLogs() {
    const [datas,setDatas]=useState([]);
    const [context, setContext] = useState([]);
    const getData=()=>{
        http.get('/getLogs').then(res=>{
            if(res.data){
                setDatas(res.data)
                setContext('')
            }
        })
    }
    const send=()=>{
        http.post('/addLogs',{events:context}).then(res=>{
            message.success('发布成功')
            getData();
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className={style.logs}>
            <PageTitle title="新增日志"/>
            <div className={style.sendMessage}>
                    <div className={style.right}>
                        <textarea className={style.context} placeholder='输入日志内容' value={context} onChange={(e)=>setContext(e.target.value)} ></textarea>
                        <div className={style.send}><button onClick={send}>发送</button></div>
                    </div>
                </div>
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