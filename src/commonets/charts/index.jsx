import { Component } from "react";
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts'
import { connect } from 'react-redux';

import './index.scss'
import 'zrender/lib/svg/svg';
import { TitleComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
echarts.use([
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    PieChart
])
class Charts extends Component {
    componentDidMount() {
        const data = this.props.articleNum
        let mychart = echarts.init(document.getElementById('charts'))
        let option = {
            title: {
                text: '本站文章分布',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                x: 'left',
                padding: [50, 30, 0, 0],
                margin: '10px',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '60%'],
                    data: [
                        { value: data.javascript, name: 'javascript' },
                        { value: data.css, name: 'css' },
                        { value: data.shell, name: '框架' },
                        { value: data.calculate, name: '算法' },
                        { value: data.daily, name: '日常' }
                    ],
                }
            ]
        }
        option && mychart.setOption(option)
        window.onresize = mychart.resize;
    }
    componentWillUnmount() {
        window.onresize = null
    }
    render() {
        return (
            <div id="charts">

            </div>
        )
    }
}
export default connect((state) => {
    return {
        articleNum: state.articleNum
    }
})(Charts);