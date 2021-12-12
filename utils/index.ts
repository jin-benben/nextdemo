/*** 创建随机的key **/

export const generateRandomKey = ()=>{
  return Math.random().toString(16).substring(2,10)
}