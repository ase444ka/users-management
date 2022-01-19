function checkUser(body) {
  return body?.username === 'admin' && body?.password === 'admin'
}

async function mockLogin(body) {
  await new Promise((res) => {
    setTimeout(() => res(checkUser(body)), 300)
  })
}
export default {
  async login(body) {
    const { data } = await mockLogin(body)
    return data
  },
}
