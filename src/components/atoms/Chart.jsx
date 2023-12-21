import React from 'react'
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
    const curve1 = [100, 90, 85, 96, 68, 80, 68, 81, 70];
    return (
        <ReactEcharts
            option={{
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {},

                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#E9E8FC',
                            },
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "transparent"
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                    },
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "transparent"
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                    }
                ],
                yAxis: [
                    {
                      type: 'value',
                      splitLine: {
                        lineStyle: {
                          color: '#E9E8FC',
                        },
                      },
                      
                      axisLabel: {
                        formatter: '${value}'
                      }
                    },
                  ],
                series: [
                    {
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        areaStyle: {
                            // Add gradient color to the area below the line
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 0.8, // Adjust the value to control the fading effect towards the x-axis
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 33, 245, 0.7)', // Adjust the start color and opacity
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255, 255, 255, 0)', // Adjust the end color and opacity
                                    },
                                ],
                            },
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: curve1,
                        symbol: 'none',
                        lineStyle: {
                            // Define a gradient color for the line
                            color: "#605DEC",
                            width: 3, // Adjust the line width as needed
                        },
                    }
                ]
            }}
            className='border rounded-xl mt-4 ps-3'
        />
    )
}

export default LineChart