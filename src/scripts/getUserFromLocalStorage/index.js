export function getUserFromLocalStorage(id) {
  const currentValue = localStorage.getItem(id)
  if (!currentValue) return null

  const userData = JSON.parse(currentValue)
  return { id, ...userData }
}
