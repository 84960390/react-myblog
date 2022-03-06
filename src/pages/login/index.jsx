import './index.scss';
import {useState,useRef} from 'react';
// import {admin} from '../../request';
import { useHistory } from 'react-router-dom';
function Login(){
    const account=useRef();
    const psw=useRef();
    const histroy=useHistory
    const login=()=>{
        // admin.post('/login').then(res=>{
        //     window.sessionStorage.setItem('userInfo',res.data.userInfo)
        //     window.localStorage.setItem('token',res.data.token)
        //     histroy.push('/admin')
        // })
    }
    return (
        <div className="login">
            <div className="loginBox">
                <h2>登录</h2>
                <div className="insert">
                    <div className='put'><span>账号：</span><input type='text' placeholder='请输入管理员账号' ref={account}/></div>
                    <div className='put'><span>密码：</span><input type='password' placeholder='请输入密码' ref={psw}/></div>
                </div>
                <button onClick={login}>登录</button>
            </div>
        </div>
    )

}
export default Login