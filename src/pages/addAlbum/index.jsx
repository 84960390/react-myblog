import './index.scss';
import PageTitle from '../../commonets/pageTitle';
import { Radio } from 'antd';
import { useState} from 'react';
import { Upload, Button,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
export default function AddAlbum() {
    const [radio, setRadio] = useState('scenery');
    const changeRadio = (e) => {
        setRadio(e.target.value)
    }
    const beforeUpload=file=> {
        const isPNG=/^image/.test(file.type)
        if (!isPNG) {
          message.error('请上传常见图片文件格式');
        }
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          message.error('上传的文件不能超过10MB');
        }
        return (isPNG&&isLt10M)|| Upload.LIST_IGNORE;
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
                        accept='image/*'
                        beforeUpload={beforeUpload}
                    >
                        <Button  className="uploadBtn" icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </div>
            </div>
        </div>
    )
}