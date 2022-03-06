import style from './index.module.scss';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';
import {connect} from 'react-redux';
function HeaderRight(props){
    console.log(props)
    let list=[{
        title:'文章',
        path:'/selectArticle'
    },{
        title:'图库',
        path:'/pictures'
    },{
        title:'说说',
        path:'/share'
    },{
        title:'留言',
        path:'/message'
    },{
        title:'发布',
        path:'/addArticle'
    },{
        title:'上传',
        path:'/addAlbum'
    },{
        title:'日志',
        path:'/logs'
    },{
        title:'关于',
        path:'/about'
    }]
    const histroy=useHistory();
    
    const toPath=useCallback(
      (path) => {
          histroy.push(path);
            props.setPath(path);
            props.changeHeaderShow();
      },
      [],
    )
    

    return (
        <div className={style.rightHeader}>
            <img className={style.head} src={props.myProfile} onClick={()=>toPath('/')}/>
            <div className={style.center}>
                {   
                    list.map(item=>{
                        return <div className={`${style.list} ${props.nowPath===item.path&&style.active}`} key={item.path} onClick={()=>{toPath(item.path)}}>{item.title}</div>
                    })
                }
            </div>
        </div>
    )
}
export default connect((state)=>{
    return {
        myProfile:state.myProfile.url
    }
})(HeaderRight);