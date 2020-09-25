import http from '@/utils/http'
// 获取用户频道列表
export function getUserChannels() {
  return http.get('/user/channels')
}
