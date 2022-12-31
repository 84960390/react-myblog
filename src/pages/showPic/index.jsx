import {useState,useEffect} from  'react';
import {withRouter} from 'react-router-dom';
import PageTitle from '../../commonets/pageTitle';
import { Image} from 'antd';
import { SwapLeftOutlined } from '@ant-design/icons/lib/icons';
import http from '../../request/index'
import './index.scss';
function ShowPic(props){
    const [datas,setDatas]=useState([]);
    const getTitle=()=>{
        switch(props.match.params.type){
            case 'cartoon':return '动漫';
            case 'scenery':return '风景';
            case 'fiction':return '科幻';
            case 'game':return '游戏';
            default: return '风景'
        }
    }
    useEffect(()=>{
        http.get('/getAlbum',{params:{type:props.match.params.type}}).then(res=>setDatas(res.data))
    },[])
    return (
        <div className='showPic'>
            <PageTitle title={getTitle()}/>
            <div className="back" onClick={()=>props.history.push('/userPage/pictures')}><SwapLeftOutlined /></div>
            <div className='box'> 
        <Image.PreviewGroup>
            {
                datas.map(item=>{
                    return (
                        <Image width={150} className='picItem' placeholder={true} src={item.url} key={item.id}/>
                    )
                })
            }
        </Image.PreviewGroup>
            </div>
        </div>
    )
}
export default withRouter(ShowPic);