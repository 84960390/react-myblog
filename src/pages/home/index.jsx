import style from './index.module.scss';
import { useEffect, useState,useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import http from '../../request';
import formDate from '../../methods/formDate';
import { QqOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons';
import Paginate from '../../commonets/paginate';
import qqCode from './qrCode/qq.jpg';
import wechatCode from './qrCode/wechat.jpg';
import getRuntime from '../../methods/getRunTime';
function Home(props) {
    const [datas, setDatas] = useState([]);
    const [total, setTotal] = useState(10);
    const histroy = useHistory();
    const getArticleData=(page=1)=>{
        http.get('/getArticle',{params:{page}}).then(res => {
            if(res.data){
                setDatas(res.data);
                setTotal(res.total||10)
            }
        })
    }
    useEffect(() => {
        getArticleData();
    }, [])
    // 计算类别总数，文章总数
    const getSummarize=useMemo(()=>{
        let sum=0;
        let category=0;
        for(let k in props.articleData){
            if(k!=='id'&&k!=='visit'&&k!=='create_time'){
                category++;
                sum=sum+props.articleData[k]
            }
        }
        return {
            articleNum:sum,
            category
        }

    },[props.articleData])
    const changePage=(page)=>{
        getArticleData(page)
        console.log(page)
    }
    return (
        <div className={style.home}>
            <div className={style.welcome}>
                <div className={style.top}>欢迎</div>
                <div className={style.tips}>进入我的博客</div>
                <span>目前为测试阶段，游客也可以上传图片和文章 </span>
                <span>欢迎大家在此期间进行留言，发布 ，提出意见</span>
            </div>
            <div className={style.content}>
                <div className={style.left}>
                    {
                        datas&&datas.map(item => {
                            return (
                                <div className={style.article} key={item.id} onClick={() => { histroy.push('/userPage/article?id=' + item.id) }}>
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
                           <Paginate total={total} onChange={changePage}/>
                </div>
                <div className={style.right}>
                    <div className={style.wel + ' ' + style.tagBox} >
                       <div className={style.message}>
                        <div>
                        欢<br/>
                        迎<br/>
                        浏<br/>
                        览<br/>
                        </div>
                        </div>
                        <div className={style.helloImg}>
                        </div>
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
                            <div className={style.num}>{(getSummarize&&getSummarize.articleNum)||0}</div>
                        </div>
                        <div className={style.box1}>
                            <div>分类</div>
                            <div className={style.num}>{(getSummarize&&getSummarize.category)||0}</div>
                        </div>

                    </div>
                    <div className={style.myNotice + ' ' + style.tagBox}>
                           <div className={style.innerTxt}>
                               冲冲冲！😎😎
                               </div>
                    </div>
                    <div className={style.statics + ' ' + style.tagBox}>
                        <div className={style.sumBox}>
                            <div>总浏览量</div>
                            <div>{props.articleData.visit||0}次</div>
                        </div>
                        <div className={style.sumBox}>
                            <div>运行时间</div>
                            <div>{getRuntime(props.articleData.create_time)||0}天</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((state)=>{
    return {
        articleData:state.articleNum
    }
})(Home);