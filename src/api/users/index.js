import axios from 'axios'
/*eslint-disable-next-line*/
import { mock } from './mock'

export default {
  async getUsers() {
    const { data } = await axios.get(`/users`)
    return data
  },

  async deleteUsers() {
    const { data } = await axios.delete(`/users/delete-all`)
    return data
  },

  async addUser(body) {
    const { data } = await axios.post('/user', body)
    return data
  },

  async getUser(id) {
    const { data } = await axios.get(`/user/${id}`)
    return data
  },

  async updateUser(body) {
    const { data } = await axios.put('/user', body)
    return data
  },

  async deleteUser(id) {
    const { data } = await axios.delete(`/user/delete/${id}`)
    return data
  },
}
