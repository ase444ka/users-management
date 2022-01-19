export function updateUserInLocalStorage(body) {
  const key = body.id
  delete body.id
  const value = JSON.stringify(body)
  localStorage.setItem(key, value)
}
