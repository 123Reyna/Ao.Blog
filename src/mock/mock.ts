import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {  BlogActireData, Users } from './data/user';
let blogActireData =BlogActireData;
export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
      let mock = new MockAdapter(axios);
  
      // mock success request
      mock.onGet('/success').reply(200, {
        msg: 'success'
      });
  
      // mock error request
      mock.onGet('/error').reply(500, {
        msg: 'failure'
      });
  
     
  
      //获取用户列表
      mock.onGet('Blog').reply(config => {
       // let {name} = config.params;
        let data = blogActireData;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, { code: 200, msg: '请求成功', data }]);
          }, 1000);
        });
      });
  
     
  
     
  
     
  
     
     
  
    }
  };