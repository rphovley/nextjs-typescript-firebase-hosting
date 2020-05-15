const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'
export function isLoggedIn(): boolean {
  return !!getLocalStorage().getItem(ACCESS_TOKEN_KEY)
}

export function setToken(token: string): void {
  getLocalStorage().setItem(ACCESS_TOKEN_KEY, token)
}

export function getToken(): string {
  return getLocalStorage().getItem(ACCESS_TOKEN_KEY)
}

function getLocalStorage(): Storage {
  return window.localStorage
}
