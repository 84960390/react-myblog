import './index.scss';
import { useEffect, useState } from 'react';
import {MessageOutlined} from '@ant-design/icons';
import { Modal,message} from 'antd';
import Response from './response';
import http from '../../request';
import PageTitle from '../../commonets/pageTitle';
import Paginate from '../../commonets/paginate';
export default function Message() {
    const [timeText, setTimeText] = useState('');
    const [myInfo,setMyInfo]=useState({
        qq:'1234567',
        name:'',
        context:''
    });
    const [total,setTotal]=useState(10);
    const sendMessage=()=>{
        if(myInfo.context==='') return message.error('请输入要回复的内容')
        http.post('/addMessage',myInfo).then(res=>{
            
            getData()
        })
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const hour = new Date().getHours();
        const timeText =
            hour < 6
                ? '凌晨好'
                : hour < 9
                ? '早上好'
                : hour < 11
                ? '上午好'
                : hour < 13
                ? '中午好'
                : hour < 17
                ? '下午好'
                : hour < 19
                ? '傍晚好'
                : '晚上好';
        setTimeText(timeText);
    }, []);
    const getData=(page=1)=>{
        http.get('/getAllMessage',{params:{page}}).then(res=>{
            setData(res.data)
            setTotal(res.total||10)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    const changePage=(page)=>{
        getData(page)
    }
    // const addLog=(id)=>{
    //     Modal.info({
    //         centered:true,
    //         icon:null,
    //         content:<Response/>,
    //         width:'80%',
    //         bodyStyle:{
    //             background:'rgb(35,35,44)',
    //             padding:0,
    //             margin:0,
    //         }
    //     })
    // }
    return (
        <div className="message">
            <PageTitle title="留言板"/>
            <div className="messageBox">
                <div className="top">
                    <h2>{timeText}!</h2>
                    <h2>欢迎来到我的站点!</h2>
                    <h3>可以在这里留言，交流，吐槽</h3>
                </div>
                <div className="sendMessage">
                    <div className="left">
                        <img src={`https://q1.qlogo.cn/g?b=qq&nk=${myInfo.qq}&s=640`} alt="" />
                    </div>
                    <div className="right">
                        <div className="info"> <div className="qq"> <div>QQ</div><input type="text" placeholder='输入qq号'  onBlur={e=>setMyInfo({...myInfo,qq:e.target.value})}/></div> <div className="name" ><div>昵称</div><input type="text" placeholder='输入昵称' onBlur={e=>setMyInfo({...myInfo,name:e.target.value})}/></div></div>
                        <textarea className='context' placeholder='输入qq号获取头像' onBlur={e=>setMyInfo({...myInfo,context:e.target.value})}></textarea>
                        <div className="send"><button onClick={sendMessage}>发送</button></div>
                    </div>
                </div>
                <div className="allMessage">
                    {
                        data&&data.map(item=>{
                            return (
                                <div className="messageItem" key={item.id}>
                                <div className="left">
                                    <img src={`https://q1.qlogo.cn/g?b=qq&nk=${item.qq}&s=640`} alt="" />
                                </div>
                                <div className="right">
                                    <div className="info">
                                        <div className="name">{item.name}</div>
                                        {/* ()=>addLog(item.id) */}
                                        <div className="message" onClick={()=>alert('回复功能暂不可用')}><MessageOutlined/></div>
                                    </div>
                                    <p className='context'>{item.context}</p>
                                    {
                                        item.logs&&item.logs.map(log=>{
                                            return (
                                                <div className='logs' key={log.id}>
                                                <div className="logLeft">
                                                    <img src={`https://q1.qlogo.cn/g?b=qq&nk=${log.qq}&s=640`} alt="" />
                                                </div>
                                                <div className="logRight">
                                                    <div className="logInfo">
                                                        <div className="name">{log.name}</div>
                                                    </div>
                                                    <p className='logContext'>{log.context}</p>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            )
                        })
                    }
                    <Paginate total={total} onChange={changePage}/>
                </div>

            </div>
        </div>
    )
}