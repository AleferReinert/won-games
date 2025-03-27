export function setStorageItem(key: string, value: string[]) {
  if (typeof window === 'undefined') return
  const data = JSON.stringify(value)
  return window.localStorage.setItem(key, data)
}

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(key)
  return data && JSON.parse(data)
}
