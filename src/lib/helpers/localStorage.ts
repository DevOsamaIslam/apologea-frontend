export const getItem = <T = string>(key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T
  } catch (error) {
    if (error) return null
  }
}

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeItem = (key: string) => localStorage.removeItem(key)
