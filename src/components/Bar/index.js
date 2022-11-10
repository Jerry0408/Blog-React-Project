import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'


export default function Bar ({ title, xData, yData, style }) {
  const domRef = useRef()
  useEffect(() => {
    const chartInit = () => {
      let myChart = echarts.init(domRef.current)
      // Draw the chart
      myChart.setOption({
        title: {
          text: title,
          left: 'center'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Channel Number',
            type: 'bar',
            data: yData,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      })
    }
    chartInit()
  }, [title, xData, yData, style])

  return (
    <div>
      <div ref={domRef} style={style}></div>
    </div>
  )
}
