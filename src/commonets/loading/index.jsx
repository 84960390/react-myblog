import { Spin } from "antd";
import styles from './index.module.scss';
const Loading = () => {
    return <div className={styles.loadingBox}>
        <Spin size="large"/>
    </div>
};
export default Loading;