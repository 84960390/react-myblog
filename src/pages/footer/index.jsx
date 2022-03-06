
import style from './index.module.scss'
export default function Footer(){
    return (
        <footer>
            <div className={style.top}>个人博客</div>
            <div className={style.center}>欢迎浏览</div>
            <div className={style.bottom}><span>React</span><span>Redux</span><span>AntDesign</span><span>Express</span></div>
        </footer>
    )
}