import './index.scss';
import {useState} from 'react';
import http from '../../../request';
function Response(props) {
    const [myInfo,setMyInfo]=useState({
        qq:'',
        name:'',
        context:''
    });
    const sendMessage=()=>{
        http.post('/addMessage',myInfo).then(res=>{
            console.log(res);
        })
    }
    return (
        <div className="response">
            <div className="sendMessage">
                <div className="left">
                    <img src={`https://q1.qlogo.cn/g?b=qq&nk=${myInfo.qq}&s=640`} alt="" />
                </div>
                <div className="right">
                    <div className="info"> <div className="qq"> <div>QQ</div><input type="text" placeholder='输入qq号' onBlur={e => setMyInfo({ ...myInfo, qq: e.target.value })} /></div> <div className="name" ><div>昵称</div><input type="text" placeholder='输入昵称' onBlur={e => setMyInfo({ ...myInfo, name: e.target.value })} /></div></div>
                    <textarea className='context' placeholder='输入qq号获取头像' onBlur={e => setMyInfo({ ...myInfo, context: e.target.value })}></textarea>
                    <div className="send"><button onClick={sendMessage}>发送</button></div>
                </div>
            </div>
        </div>
    )
}
export default Response