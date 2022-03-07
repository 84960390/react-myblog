import { useEffect, useState } from 'react'
import style from './index.module.scss';
import { connect } from 'react-redux';
import http from '../../../request';
// import admin from '../../../request/admin';
import formDate from '../../../methods/formDate';
import PageTitle from '../../../commonets/pageTitle';
import { message } from 'antd';
import Paginate from '../../../commonets/paginate';
function AdminShare(props) {
    const [datas, setDates] = useState([]);
    const [context, setContext] = useState([]);
    const [total,setTotal]=useState(10);
    const [currentPage,setCurrentPage]=useState(1);
    // 获取数据
    const getData=(page=1)=>{
        http.get('/getAllShare',{params:{page}}).then(res=>{
           if(res.data) setDates(res.data)
           setTotal(res.total||10)
        })
    }
    const changePage=(page)=>{
        getData(page)
    }
    const send=()=>{
        http.post('/addShare',{context}).then(res=>{
            setContext('');
            setCurrentPage(1);
            message.success('发布成功');
            getData();
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className={style.share}>
            <PageTitle title='写说说' />
            <div className={style.shareBox}>
                <div className={style.sendMessage}>
                    <div className={style.left}>
                        <img src={props.myProfile} alt="x"  />
                    </div>
                    <div className={style.right}>
                        <textarea className={style.context} placeholder='输入说说内容' value={context} onChange={(e)=>setContext(e.target.value)} ></textarea>
                        <div className={style.send}><button onClick={send}>发送</button></div>
                    </div>
                </div>
                {datas.map(item => {
                    return (
                        <div className={style.shareItem} key={item.id}>
                            <div className={style.left}>
                                <img src={props.myProfile} alt="x" />
                            </div>
                            <div className={style.right}>
                                <div className={style.content}>
                                    {item.context}

                                    <div className={style.timeBox}><div className={style.createTime}>{formDate(item.create_time)}</div></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Paginate total={total} onChange={changePage} current={currentPage}/>
            </div>

        </div>
    )
}
export default connect((state) => {
    return {
        myProfile: state.myProfile.url
    }
})(AdminShare)