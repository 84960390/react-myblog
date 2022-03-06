import { useHistory } from "react-router-dom";
import './index.scss'
export default function ToLogin(){
    const histroy=useHistory();
    return (
        <div className="toLogin">
           <div> <span>当前页面需要登陆后才能访问，点击</span><sapn className='login' onClick={()=>histroy.push('/login')}>去登陆</sapn></div>
        </div>
    )
}