// src/utils/safeLocalStorage.js
export function getItem(key) {
  try {
    if (typeof window === 'undefined') return null
    return localStorage.getItem(key)
  } catch (e) {
    return null
  }
}

export function setItem(key, value) {
  try {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, value)
  } catch (e) {
    // ignore
  }
}

export function removeItem(key) {
  try {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  } catch (e) {
    // ignore
  }
}
