import style from './index.module.scss';
import { Switch } from 'antd';
import pic from './makabaka.jpeg';
import { useState } from 'react';
import PageTitle from '../../commonets/pageTitle';
export default function About() {
    const [showInfo, setShowInfo] = useState(true);
    const onChange = () => {
        setShowInfo(!showInfo)
    }
    return (
        <div className={style.about}>
            <PageTitle title="关于"/>
            <div className={style.content}>
                <div className={style.select}>关于本站  <Switch defaultChecked onChange={onChange} className={style.switch} /> 关于我</div>
                {
                    showInfo && (
                        <div className={style.myInfo}>
                            <div className={style.welcome}>👋 你好啊，欢迎来到我的个人博客！</div>
                            <div className={style.title1}>个人简介</div>
                            <table>
                                <tbody>
                                <tr>
                                    <td>姓名</td>
                                    <td>:</td>
                                    <td>江天喻</td>
                                </tr>
                                <tr>
                                    <td>性别</td>
                                    <td>:</td>
                                    <td>男</td>
                                </tr>
                                <tr>
                                    <td>学历</td>
                                    <td>:</td>
                                    <td>本科</td>
                                </tr>
                                <tr>
                                    <td>出生日期</td>
                                    <td>:</td>
                                    <td>2000年3月</td>
                                </tr>
                                <tr>
                                    <td>毕业时间</td>
                                    <td>:</td>
                                    <td>2022年6月</td>
                                </tr>
                                <tr>
                                    <td>主要技能</td>
                                    <td>:</td>
                                    <td>vue，react，express</td>
                                </tr>
                                <tr>
                                    <td>简介</td>
                                    <td>:</td>
                                    <td>落魄前端，在线求职</td>
                                </tr>
                                </tbody>
                            </table>
                            <img src={pic} alt="" style={{ width: "80%", borderRadius: '10px', margin: '30px 0' }} />
                        </div>
                    )
                }
                {
                    !showInfo && (
                        <div className={style.stateBox}>
                            <div className={style.title2}>📆关于本站</div>
                            <div className={style.stateInfo}>
                                学习完react之后编写的练手项目，同时也为了分享自己的学习心得。
                            </div>
                            <div className={style.title2}>🖥️主要技术</div>
                            <div className={style.title3}>
                                前端
                            </div>
                            <p>antDesign三方组件库</p>
                            <p>react全家桶（react,react-router,react-hooks）</p>
                            <p>状态集中管理工具Redux，react-redux</p>
                            <p>富文本编辑：wangEditor</p>
                            <div className={style.title3}>
                                后端
                            </div>
                            <p>node.js</p>
                            <p>express.js</p>
                            <p>mysql</p>
                        </div>
                        

                    )
                }

            </div>
        </div>
    )
}