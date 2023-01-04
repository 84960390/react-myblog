import { Component } from "react";
import E from 'wangeditor';
import hljs from 'highlight.js';
import http from '../../request';
import { Radio, message, Button } from 'antd';
import './index.scss';
import PageTitle from "../../commonets/pageTitle";
class AddArticle extends Component {
    constructor() {
        super();
        this.editor = null;
    }
    state = {
        // inner: '',
        radio: 'javascript',
        title: '',
        describes: '',
        btnLoading: false
    }
    // 获取文章
    // getArticle = () => {
    //     http.get('/getArticle', { params: { id: 1 } }).then(res => {
    //         console.log(res)
    //         this.setState({
    //             inner: res.data
    //         })
    //     })
    // }
    // 发送文章
    send = () => {
        if (this.state.title === '' || this.state.describes === '') return message.error('标题和描述不能为空');
        this.setState({
            btnLoading: true
        });
        http.post('/addArticle', {
            content: this.editor.txt.html(),
            title: this.state.title,
            describes: this.state.describes,
            type: this.state.radio
        }).then(res => {
            message.success('发布成功');
            this.editor.txt.clear()
            this.setState({
                title: '',
                describes: ''
            })
        }).finally(() => {
            this.setState({
                btnLoading: false
            })
        })
    }
    changeRadio = e => {
        this.setState({
            radio: e.target.value
        })
    };
    componentDidMount() {
        this.editor = new E('.edit');
        this.editor.config.showLinkImgHref = false;
        // 配置 server 接口地址
        this.editor.config.uploadImgServer = '/api/file';
        // 代码高亮
        this.editor.highlight = hljs;
        // 是否允许图片链接
        this.editor.config.showLinkImg = false;
        // 取消自动获取焦点
        this.editor.config.focus = false
        this.editor.config.excludeMenus = [
            'emoticon',
            'video'
        ]
        this.editor.config.zIndex = 2
        this.editor.create();
    }
    componentWillUnmount() {
        this.editor.destroy();
    }
    render() {
        return (
            <div className="addArticle">
                <PageTitle title="发布文章" />
                <div className="editBox">
                    {/* 标题与描述 */}
                    <h2>文章编辑</h2>
                    <div className="info">
                        <div className="inputTitle">标题</div>
                        <div className='title1'>
                            <input value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} placeholder="请输入文章标题" />
                        </div>
                        <div className="inputTitle">分类</div>
                        <Radio.Group onChange={this.changeRadio} value={this.state.radio} className='radio'>
                            <Radio value={'javascript'}>javaScript</Radio>
                            <Radio value={'shell'}>框架</Radio>
                            <Radio value={'css'}>css</Radio>
                            <Radio value={'calculate'}>算法</Radio>
                            <Radio value={'daily'}>日常</Radio>
                        </Radio.Group>
                        <div className="inputTitle">描述</div>
                        <textarea className='context' placeholder="请输入文章描述" value={this.state.describes} onChange={(e) => { this.setState({ describes: e.target.value }) }}></textarea>

                    </div>
                    {/* 编辑区 */}
                    <div className="inputTitle">请输入文章内容</div>
                    <div className='edit'></div>
                    <div className="send">
                        <Button
                            className="btn"
                            onClick={this.send}
                            type='link'
                            loading={this.state.btnLoading}
                        >
                            点击发布
                        </Button>
                    </div>

                </div>
            </div >
        )
    }
}
export default AddArticle