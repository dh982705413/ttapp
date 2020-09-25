import http from '@/utils/http'
// 获取文章列表
export function getArticleList(params) {
  return http({
    method: 'get',
    baseURL: 'http://ttapi.research.itcast.cn/app/v1_1/',
    url: '/articles',
    params
  })
}
