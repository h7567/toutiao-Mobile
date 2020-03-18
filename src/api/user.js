// 处理用户相关的请求

import request from '@/utils/request' // 引入请求模块

// 导出一个登录的方法
export function login (data) {
  return request({
    // 配置选项
    url: '/authorizations', // 请求地址
    method: 'post',
    data: data // 接收传入的data
  })
}