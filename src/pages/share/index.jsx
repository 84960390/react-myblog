import { useEffect, useState } from 'react'
import style from './index.module.scss';
import { connect } from 'react-redux';
import http from '../../request';
import formDate from '../../methods/formDate';
import PageTitle from '../../commonets/pageTitle';
import Paginate from '../../commonets/paginate';
function Share(props) {
    const [datas, setDates] = useState([]);
    const [total,setTotal]=useState(10);
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
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className={style.share}>
            <PageTitle title='我的说说'/>
            <div className={style.shareBox}>
            {datas.map(item => {
                return (
                    <div className={style.shareItem} key={item.id}>
                        <div className={style.left}>
                            <img src={props.myProfile} alt="x"/>
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
              <Paginate total={total} onChange={changePage}/>
            </div>
            
        </div>
    )
}
export default connect((state) => {
    return {
        myProfile: state.myProfile.url
    }
})(Share)