import http from '@/utils/http'
// 用户登录
export function login(data) {
  return http.post('/authorizations', data)
}
// 发送验证码
export function sms(mobile) {
  return http.get(`/sms/codes/${mobile}`)
}