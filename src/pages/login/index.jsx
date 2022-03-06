import './index.scss';
import {useRef} from 'react';
import admin from '../../request/admin';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
function Login(){
    const account=useRef();
    const psw=useRef();
    const histroy=useHistory();
    const login=()=>{
        let account1=account.current.value;
        let password1=psw.current.value;
        if(account1===''||password1==='') return message.warning('请输入账号和密码')
        admin.post('/adminLogin',{account:account1,password:password1}).then(res=>{
            window.sessionStorage.setItem('state',res.state)
            histroy.push('/admin')
        })
    }
    return (
        <div className="login">
            <div className="loginBox">
                <h2>登录</h2>
                <div className="insert">
                    <div className='put'><span>账号：</span><input type='text' placeholder='请输入管理员账号' ref={account}/></div>
                    <div className='put'><span>密码：</span><input type='password' placeholder='请输入密码' ref={psw}/></div>
                </div>
                <div className="btns"><button onClick={()=>{histroy.push('/')}} className='btn1'>返回</button><button onClick={login}>登录</button></div>
            </div>
        </div>
    )

}
export default Login