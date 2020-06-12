export const state = () => ({
  status: false,
  userName: ''
})

export const mutations = {
  changeStatus(state) {
    state.status = !state.status
  },
  setUserName(state, payload) {
    state.userName = payload
  }
}

export const getters = {
  isLogged: s => s.status,
  getUserName: s => s.userName
}
