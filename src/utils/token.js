const key = 'Jeffrey-key'
const key1 = 'Mobile-key'

const setToken = (token) => {
  return window.localStorage.setItem(key, token)
}

const getToken = () => {
  return window.localStorage.getItem(key)
}

const removeToken = () => {
  return window.localStorage.removeItem(key)
}

const saveMoblie = (mobile) => {
  return window.localStorage.setItem(key1, mobile)
}

const getMoblie = () => {
  return window.localStorage.getItem(key1)
}

const removeMoblie = () => {
  return window.localStorage.removeItem(key1)
}
export {
  setToken,
  getToken,
  removeToken,
  saveMoblie,
  getMoblie,
  removeMoblie
}