export function addUserToLocalStorage(body) {
  let keys = Object.keys(localStorage).filter((key) => parseInt(key))

  keys.sort((a, b) => a - b)

  const lastIndex = keys.pop()

  const key = (+lastIndex + 1).toString()
  const value = JSON.stringify(body)

  localStorage.setItem(key, value)
}
