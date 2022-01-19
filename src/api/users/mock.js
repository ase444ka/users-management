import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  getUsersFromLocalStorage,
  clearLocalStorage,
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUserFromLocalStorage,
  updateUserInLocalStorage,
} from '@/scripts'

export const mock = new MockAdapter(axios)

mock.onGet('/users').reply(function () {
  const users = getUsersFromLocalStorage()
  if (!users.length) {
    return [204]
  }
  return [200, users]
})

mock.onDelete('/users/delete-all').reply(function () {
  clearLocalStorage()
  return [200, { response: 'ok' }]
})

mock.onPost('/user').reply(function (config) {
  let data = JSON.parse(config.data)
  addUserToLocalStorage(data)
  return [200, getUsersFromLocalStorage()]
})

mock.onGet(/\/user\/\d+/).reply(function (config) {
  const id = config.url.match(/\d/g).join('')
  const user = getUserFromLocalStorage(id)
  if (!user) {
    return [204]
  }
  return [200, user]
})

mock.onPut('/user').reply(function (config) {
  let data = JSON.parse(config.data)
  updateUserInLocalStorage(data)
  return [200, getUsersFromLocalStorage()]
})

mock.onDelete(/\/user\/delete\/\d+/).reply(function (config) {
  const id = config.url.match(/\d/g).join('')
  deleteUserFromLocalStorage(id)
  return [200, getUsersFromLocalStorage()]
})
