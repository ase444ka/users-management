export function getUsersFromLocalStorage() {
  if (!localStorage.length) {
    return []
  }

  const users = []

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    const currentValue = localStorage.getItem(id)
    try {
      const userData = JSON.parse(currentValue)
      users.push({ ...userData, id })
    } catch (e) {
      console.log('notJSON', id)
    }
  }

  return users.sort((a, b) => a.id - b.id)
}
