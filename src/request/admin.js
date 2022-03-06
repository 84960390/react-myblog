import axios from 'axios';
import { message } from 'antd';

const admin=axios.create({
    baseURL:'/admin'
})
admin.interceptors.response.use(
    res=>{
        return res.data;
    },
    err=>{
        if (err && err.response) {
			switch (err.response.status) {
				case 400:
					err.message = '请求错误'
					break
				case 401:
					err.message = '未授权，请登录'
					break
				case 403:
					err.message = '拒绝访问'
					break
				case 404:
					err.message = `请求地址出错`
					break

				case 422:
					err.message = '账号或密码错误'
					break

				case 500:
					err.message = '服务器内部错误'
					break

				case 501:
					err.message = '服务未实现'
					break

				case 502:
					err.message = '网关错误'
					break

				case 503:
					err.message = '服务不可用'
					break

				case 504:
					err.message = '网关超时'
					break

				case 505:
					err.message = 'HTTP版本不受支持'
					break

				default:
			}
		}
		message.warning(err.message);
		return Promise.reject(err) // 返回接口返回的错误信息
    }
)
export default admin