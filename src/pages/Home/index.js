import React, { useEffect, useRef } from 'react'
import Bar from '../../components/Bar'


export default function Home () {
  return (
    <div>
      <Bar
        title='主流框架使用满意度'
        xData={['react', 'vue', 'angular']}
        yData={[30, 40, 50]}
        style={{ width: '500px', height: '400px' }}
      ></Bar>
      <Bar
        title='主流框架使用满意度'
        xData={['react', 'vue', 'angular']}
        yData={[30, 40, 50]}
        style={{ width: '300px', height: '200px' }}
      ></Bar>
    </div>
  )
}
