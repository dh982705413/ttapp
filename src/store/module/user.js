import { getItem } from '@/utils/auth'
const tokens = getItem()
const types = {
  SET_TOKEN: 'SET_TOKEN',
  SET_REFTOKEN: 'SET_REFTOKEN'
}
const state = {
  token: tokens?.token,
  refresh_token: tokens?.refresh_token
}
const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token
  },
  [types.SET_REFTOKEN](state, token) {
    state.refresh_token = token
  }
}
const actions = {
  setToken({ commit }, token) {
    commit(types.SET_TOKEN, token)
  },
  setRefToken({ commit }, token) {
    commit(types.SET_REFTOKEN, token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
