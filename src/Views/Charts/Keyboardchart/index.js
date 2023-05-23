import '../../../echars/index'
import * as echarts from 'echarts/core';
import React from 'react'

export default function Keyboardchart() {

    React.useEffect(() => {
        let myChart = echarts.init(document.getElementById('key_board_chart'));
        myChart.setOption(option)
        setTimeout(function () {
            window.onresize = function () {
                myChart.resize();
            }
        }, 200)
    }, [])
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 49; i++) {
        xAxisData.push('A' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 5) * 6);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 5) * 6);
    }

    let option = {
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        grid: {
            show: false,
            containLabel: false,
            left: '4%',
            right: '4%',
            top: '10%',
            bottom: '10%',
        },
        tooltip: {
            trigger: 'none',
            show: false,
            showContent: false
        },
        xAxis: {
            boundaryGap: false,
            type: "category",
            data: xAxisData,
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
            }
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        series: [
            {
                type: 'bar',
                data: data1,
                smooth: true,
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: 'rgb(41, 189, 169)'
                        },
                        {
                            offset: 1,
                            color: '#0063BF'
                        }
                    ]),
                    barBorderRadius: [3, 3, 3, 3]
                },

            },
            {
                type: 'bar',
                data: data2,
                smooth: true,
                barGap: '-100%',
                z: '-1',
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                },
                itemStyle: {
                    barBorderRadius: [3, 3, 3, 3]
                }
            }
        ],
        backgroundColor: '#3b172b',
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    return (
        <div id="key_board_chart">
        </div>
    )
}