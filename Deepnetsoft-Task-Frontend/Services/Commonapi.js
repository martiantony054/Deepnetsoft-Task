import axios from 'axios'
export const compai = async(httpmethod,url,body)=>{
  let menuconfig = {
    method:httpmethod,
    url,
    data:body
  }
  return await axios(menuconfig).
  then((r)=>{
    return r;
  })
  .catch((e)=>{
    return e;
  })
}