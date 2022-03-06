import './index.scss';
import PageTitle from '../../commonets/pageTitle';
import { Radio } from 'antd';
import { useState, useCallback } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
export default function AddAlbum() {
    const [radio, setRadio] = useState('scenery');
    const changeRadio = (e) => {
        setRadio(e.target.value)
    }
    return (
        <div className="addAlbum">
            <PageTitle title='发布图片' />
            <div className="box">
                <div className="top">
                    <span className="inputTitle">图片类别：</span>
                    <Radio.Group onChange={changeRadio} value={radio} className='radio'>
                        <Radio value={'scenery'}>风景</Radio>
                        <Radio value={'fiction'}>科幻</Radio>
                        <Radio value={'game'}>游戏</Radio>
                        <Radio value={'cartoon'}>动漫</Radio>
                    </Radio.Group>
                </div>
                <div className="bottom">
                    <div className='title'>选择图片</div>
                    <Upload
                        action="/api/addAlbum"
                        listType="picture"
                        data={{type:radio}}
                    >
                        <Button  className="uploadBtn" icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </div>
            </div>
        </div>
    )
}