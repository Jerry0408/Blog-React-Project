import React, { useEffect, useState } from 'react'
import Bar from '../../components/Bar'
import { Card, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { http } from '../../utils'
import { useStore } from '../../store'

export default function Home () {
  const params = {
    page: 1,
    per_page: 50
  }
  const { channelStore } = useStore()
  const [obj, setObj] = useState({})
  const [xData, setxData] = useState(["xx", 'YY'])
  const [yData, setyData] = useState([30, 20])
  const nameList = channelStore.nameList

  // useEffect(() => {
  //   const channelIDobj = {}
  //   const loadChannel = async (id) => {
  //     const res = await http.get(`/mp/articles/${id}`)
  //     const resID = res.data.data.channel_id
  //     if (resID in channelIDobj) {
  //       channelIDobj[resID] = 1 + channelIDobj[resID]
  //     } else {
  //       channelIDobj[resID] = 1
  //     }
  //   }
  //   // const listToObj = (cList) => {
  //   //   const obj = {}
  //   //   cList.forEach(item => {
  //   //     if (item in obj) {
  //   //       obj[item] = obj.item + 1
  //   //     } else {
  //   //       obj[item] = 1
  //   //     }
  //   //   })
  //   //   return obj
  //   // }
  //   const loadArticles = async () => {
  //     const res = await http.get('/mp/articles', { params })
  //     const { results } = res.data.data
  //     const id_list = results.map(item => item.id)
  //     for (let i = 0; i < id_list.length; i++) {
  //       loadChannel(id_list[i])
  //     }
  //     setObj(channelIDobj)
  //   }
  //   loadArticles()
  // }, [params])

  // useEffect(() => {
  //   const tempX = []
  //   const tempY = []
  //   for (let id in obj) {
  //     tempX.push(nameList[id])
  //     tempY.push(obj[id])
  //   }
  //   setxData(tempX)
  //   setyData(tempY)
  // }, [obj, nameList])


  return (
    <div className='container'>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/layout/home">Home</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        {/* Below is the Channel Data overview */}
      </Card>
      <Bar
        title='Popular Framework Usage'
        xData={["React", "Vue", "Angular"]}
        yData={[40, 30, 50]}
        style={{ width: '800px', height: '600px' }}
      ></Bar>
    </div>
  )
}
