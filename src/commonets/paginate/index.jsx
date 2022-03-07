import { Pagination } from "antd";
import './index.scss'
function Paginate(props){
    return (
        <div className="paginate">
            {
                props.current?<Pagination defaultCurrent={1} total={props.total||10} showSizeChanger={false} onChange={props.onChange} current={props.current}/>
                :<Pagination defaultCurrent={1} total={props.total||10} showSizeChanger={false} onChange={props.onChange}/>
            }
        </div>
    )
}
export default Paginate