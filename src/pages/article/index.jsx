import http from "../../request";
import './index.scss';
import {useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import formDate from "../../methods/formDate";
import qs from 'qs';
import { SwapLeftOutlined } from '@ant-design/icons/lib/icons';

function Article() {
    const [data,setData]=useState({});
    const history=useHistory();
    useEffect(()=>{
        const id=qs.parse(history.location.search,{ignoreQueryPrefix:true}).id
        http.get('/getArticleById',{params:{id}}).then(res=>setData(res.data))
    },[])
    return (
        <div className="articles">
            <div className="back" onClick={()=>history.go(-1)}><SwapLeftOutlined /></div>
            <div className="top">
                <p className="articleTitle">{data.title}</p>
                <div className="tags">
                    <span className="categroy">{data.type}</span>
                    <span className="createTime">{formDate(data.create_time)}</span>
                </div>
            </div>
            <div className="articleContent" dangerouslySetInnerHTML={{__html:data.content}}>
            </div>
        </div>
    )

}
export default Article
