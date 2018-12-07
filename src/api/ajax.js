/*
* 用来统一发送ajax请求的模块
* 封装axios返回一个promise对象
* */
import axios from "axios"
import qs from 'qs';
export default function ajax(url,data={},method="GET") {
  return new Promise((resolve, reject)=>{
    let promise;
    if(method==="GET"){
      let queryStr = '';
      let keysArr = Object.keys(data);
      keysArr.forEach((key)=>{
        queryStr += `${key}=${data[key]}$`
      });
      if(queryStr!==''){
        queryStr = queryStr.substring(0,queryStr.length-1);
        url += '?' + queryStr;
      }
      promise=axios.get(url);
    }else{
      promise=axios.post(url,qs.stringify(data), {headers: {'Content-Type':'application/x-www-form-urlencoded'}});
    }
    //为了外部拿数据的时候直接拿到data
    promise.then((response)=>{
      resolve(response.data)
    }).catch((err)=>{
      reject(err)
    })
  })
}
