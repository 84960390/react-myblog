import style from './index.module.scss';
import { useEffect, useState,useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../../request';
import formDate from '../../methods/formDate';
import { QqOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons';
import qqCode from './qrCode/qq.jpg';
import wechatCode from './qrCode/wechat.jpg';
import getRuntime from '../../methods/getRunTime';
export default function Home() {
    const [datas, setDatas] = useState([]);
    const [statics, setStatics] = useState({});
    const histroy = useHistory();

    useEffect(() => {
        http.get('/getAllArticle').then(res => {
            console.log(res)
            setDatas(res.data)
        })
        http.get('/getStatics').then(res => {
            console.log(res)
            setStatics(res.data)
        })
    }, [])
    // 计算类别总数，文章总数
    const getSummarize=useMemo(()=>{
        let sum=0;
        let category=0;
        for(let k in statics){
            if(k!=='id'&&k!=='visit'&&k!=='create_time'){
                category++;
                sum=sum+statics[k]
            }
        }
        return {
            articleNum:sum,
            category
        }

    },[statics])
    return (
        <div className={style.home}>
            <div className={style.welcome}>
                <div className={style.top}>欢迎</div>
                <div className={style.tips}>进入我的博客,测试</div>
                <p>目前为测试阶段，游客也可以上传图片和文章</p>
            </div>
            <div className={style.content}>
                <div className={style.left}>
                    {
                        datas.map(item => {
                            return (
                                <div className={style.article} key={item.id} onClick={() => { histroy.push('/article?id=' + item.id) }}>
                                    <div className={style.articleTitle}>{item.title}</div>
                                    <div className={style.articleContext}>{item.describes}</div>
                                    <div className={style.bottom}>
                                        <div className={style.time}>{formDate(item.create_time, false)}</div>
                                        <div className={style.type}> {item.type}</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.right}>
                    <div className={style.wel + ' ' + style.tagBox}>
                        晚上好<br />
                        欢迎来到我的个人博客
                    </div>
                    <div className={style.information + ' ' + style.tagBox}>
                        <a href='https://github.com/84960390' target='_blank'><div className={style.github}><GithubOutlined /></div></a>
                        <div className={style.qq} >
                            <QqOutlined />
                            <div className={style.codeBox}>
                                <img src={qqCode} alt="" />
                            </div>
                        </div>
                        <div className={style.wechat}>
                            <WechatOutlined />
                            <div className={style.codeBox}>
                                <img src={wechatCode} alt="" />
                            </div>
                        </div>


                    </div>
                    <div className={style.classify + ' ' + style.tagBox}>
                        <div className={style.box1}>
                            <div>文章</div>
                            <div className={style.num}>{getSummarize.articleNum||0}</div>
                        </div>
                        <div className={style.box1}>
                            <div>分类</div>
                            <div className={style.num}>{getSummarize.category||0}</div>
                        </div>

                    </div>
                    <div className={style.statics + ' ' + style.tagBox}>
                        <div className={style.sumBox}>
                            <div>总浏览量</div>
                            <div>{statics.visit||0}次</div>
                        </div>
                        <div className={style.sumBox}>
                            <div>运行时间</div>
                            <div>{getRuntime(statics.create_time)||0}天</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}