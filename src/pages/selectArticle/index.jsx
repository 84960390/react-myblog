import { useState, useEffect } from 'react';
import PageTitle from '../../commonets/pageTitle';
import './index.scss';
import { SearchOutlined } from '@ant-design/icons';
import http from '../../request';
import formDate from '../../methods/formDate';
import { useHistory } from 'react-router-dom';
function SelectArticle() {
    const [datas, setDatas] = useState([]);
    const [inputTitle,setInputTitle]=useState('');
    const [inputDescribe,setInputDescribe]=useState('');
    const histroy = useHistory();
    const types = [{
        id: 1,
        type: 'javascript',
        title: 'javaScript'
    }, {
        id: 2,
        type: 'css',
        title: 'css'
    }, {
        id: 3,
        type: 'shell',
        title: '框架'
    }, {
        id: 4,
        type: 'calculate',
        title: '算法'
    }, {
        id: 5,
        type: 'daily',
        title: '日常'
    },]
    const getDataByType = (type) => {
        http.get('/getArticleByType', { params: { type } }).then(res => {
            setDatas(res.data)
        })
    }
    const getDataByTitle = () => {
        http.get('/getArticleByTitle', { params: { title:inputTitle } }).then(res => {
            setInputTitle('')
            setDatas(res.data)
        })
    }
    const getDataByDescribe = () => {
        http.get('/getArticleByDescribe', { params: { describes:inputDescribe } }).then(res => {
            setInputDescribe('')
            setDatas(res.data)
        })
    }
    useEffect(() => {
        http.get('/getAllArticle').then(res => {
            console.log(res)
            setDatas(res.data)
        })
        
    }, [])
    return (
        <div className="selectArticle">
            <PageTitle title="查找文章" />
            <div className='byTag'>
                <div className="txt">分类查看:</div>
                <div className="tags">
                    {types.map(item => {
                        return (
                            <div className="tagItem" key={item.id} onClick={()=>getDataByType(item.type)}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="byTitle">
                按标题名查看：<input value={inputTitle} onChange={e=>setInputTitle(e.target.value)}></input><button onClick={getDataByTitle}><SearchOutlined /></button>
            </div>
            <div className="byDiscribe">
                按文章内容查看<input value={inputDescribe} onChange={e=>setInputDescribe(e.target.value)}></input><button onClick={getDataByDescribe}><SearchOutlined /></button>
            </div>
            <div className="content">
                {
                    datas&&datas.length>0?datas.map(item => {
                        return (
                            <div className='article' key={item.id} onClick={() => { histroy.push('/article?id=' + item.id) }}>
                                <div className='articleTitle'>{item.title}</div>
                                <div className='articleContext'>{item.describes}</div>
                                <div className='bottom'>
                                    <div className='time'>{formDate(item.create_time, false)}</div>
                                    <div className='type'> {item.type}</div>
                                </div>
                            </div>
                        )
                    }):<div>暂无数据</div>
                }
            </div>
        </div>
    )
}
export default SelectArticle