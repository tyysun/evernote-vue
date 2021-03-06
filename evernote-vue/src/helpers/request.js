import { Message } from 'element-ui';
import baseURLConfig from './config-baseURL'
import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//note-server.hunger-valley.com'
axios.defaults.withCredentials = true 
//withCredentials = true 解决跨域

export default  function request(url, type = 'GET', data = {}){
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status){
        return (status >=200 && status < 300 ) || status === 400
        // 如果状态不，满足这个条件 直接catch
      }
    }
    if(type.toLowerCase() === 'get'){
      option.params = data
    }else{
      option.data = data 
    }
    axios(option).then(res => {
      if(res.status === 200){
        resolve(res.data)
      }else{
        Message({
          type:'error',
          message:res.data.msg
        })
        reject(res.data)
      }
    }).catch(err=>{
      Message({
        type:'error',
        message:res.data.msg
      })
      reject({msg:'网络异常'})
    })
  })
}

// export default request
// 使用方法
// request('/auth/login', 'POST', {username:'hunger',password:'123456'}).then(data=>{console.log(data)})
