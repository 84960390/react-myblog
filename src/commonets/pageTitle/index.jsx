import './index.scss'
export default function PageTitle(props) {
    return (
        <div className='pageTitle'>
            {props.title||'文章'}
        </div>
    )
}