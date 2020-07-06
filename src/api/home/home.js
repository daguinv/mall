import {request} from 'api/require'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}