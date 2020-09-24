export function getItem() {
  const data = window.localStorage.getItem('user')
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export function setItem(data) {
  window.localStorage.setItem('user', JSON.stringify(data))
}

export function removeItem() {
  window.localStorage.removeItem('user')
}
