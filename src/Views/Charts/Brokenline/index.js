import '../../../echars/index'
import * as echarts from 'echarts/core';
import React from 'react'

export default function Brokenline() {


    React.useEffect(() => {
        let Bkenlin = echarts.init(document.getElementById('broken_line'))
        Bkenlin.setOption(option)
        setTimeout(function () {
            window.onresize = function () {
                Bkenlin.resize();
            }
        }, 200)
    }, [])
    let option = {
        title: {
            text: 'Request'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: [{ name: 'CMCC', icon: 'rect' }, { name: 'CTCC', icon: 'rect' }, { name: 'CUCC', icon: 'rect' }],
            right: 10,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: ['13.00', '13.05', '13.10', '13.15', '13.20', '13.25', '13.30', '13.35', '13.40', '13.45', '13.50', '13.55']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'CMCC',
                type: 'line',
                smooth: true,
                data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                }
            },
            {
                name: 'CTCC',
                type: 'line',
                smooth: true,
                data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
                        }
                    ])
                },
            },
            {
                name: 'CUCC',
                type: 'line',
                smooth: true,
                data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 0, 135)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(135, 0, 157)'
                        }
                    ])
                },
                lineStyle: {
                    color: 'red'
                },
            }
        ],
        backgroundColor: "#374d7b",
    };
    return (
        <div id="broken_line">
        </div>
    )
}