
import '../../echars/index'
import * as echarts from 'echarts/core';
import React from 'react';
export default function OnePage() {
    var option = ({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['expected', 'actual']
        },
        grid:{
            left:'2%',
            right:'2%',
            top:'10%',
            bottom:'10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: 'skyblue',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'skyblue',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
        },
        series: [
            {
                name: 'expected',
                type: 'line',
                data: [90, 120, 161, 134, 105, 160, 165],
                smooth: true,
                lineStyle: {
                    color: 'red'
                },
                itemStyle : {
                    normal : {
                        color:'red'
                    }
                }
            },
            {
                name: 'actual',
                type: 'line',
                data: [120, 82, 91, 154, 162, 140, 145],
                smooth: true,
                lineStyle: {
                    color: 'skyblue'
                },
                itemStyle : {
                    normal : {
                        color:'skyblue'
                    }
                }
            }
        ]
    });
    React.useEffect(() => {
        // 接下来的使用就跟之前一样，初始化图表，设置配置项
        let twChart = echarts.init(document.getElementById('zhexain'))
        twChart.setOption(option)
        setTimeout(function () {
            window.onresize = function () {
                twChart.resize();
            }
        }, 200)
    }, [])

    return (
        <div id="one_page">
            <div id="zhexain"></div>
        </div>
    )
}