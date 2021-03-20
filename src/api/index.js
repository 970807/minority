import request from '@/utils/request'

export function getSwiperList () {
  return request({
    url: '/getSwiperList',
    method: 'get'
  })
}

export function getNewsTitleList () {
  return request({
    url: '/getNewsTitleList',
    method: 'get'
  })
}

export function getNewsList (data) {
  return request({
    url: '/getNewsList',
    method: 'get',
    params: data
  })
}