import { makeAutoObservable } from "mobx"
// import { http } from "../utils"
const selfList = [
  { id: 0, name: "Recommended" },
  { id: 1, name: "Html" },
  { id: 2, name: "Developer" },
  { id: 4, name: "C++" },
  { id: 6, name: "CSS" },
  { id: 7, name: "sql" },
  { id: 8, name: "Blockchain" },
  { id: 9, name: "GO" },
  { id: 10, name: "Product" },
  { id: 11, name: "Backend" },
  { id: 12, name: "Linux" },
  { id: 13, name: "AI" },
  { id: 14, name: "PHP" },
  { id: 15, name: "JavaScript" },
  { id: 16, name: "Framework" },
  { id: 17, name: "FrontEnd" },
  { id: 18, name: "Python" },
  { id: 19, name: "Java" },
  { id: 20, name: "Algorithm" },
  { id: 21, name: "Interview" },
  { id: 22, name: "Technology" },
  { id: 23, name: "NodeJS" },
  { id: 24, name: "Design" },
  { id: 25, name: "Digital" },
  { id: 26, name: "Test" }
]
const createNameObj = (list) => {
  const res = {}
  list.forEach(item => {
    res[item.id] = item.name
  })
  return res
}
const tempNameList = createNameObj(selfList)


class ChannelStore {
  channelList = []
  nameList = tempNameList
  constructor() {
    makeAutoObservable(this)
  }

  loadChannelList = async () => {
    // const res = await http.get('/channels')
    this.channelList = selfList
  }


}




export default ChannelStore