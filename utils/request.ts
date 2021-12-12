import URLCONFIG from 'config/url';
import {extend} from 'umi-request'


const request = extend({
  prefix:"https://api-pl.zhaojiafang.com"
})

request.interceptors.request.use(
  (url, options) => {
    console.log(URLCONFIG)
    return {
      url: `${url}`,
      options,
    };
  },
  { global: false }
)

export default request