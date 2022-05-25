export function getAccessToken(): string | null {
  return window.localStorage.getItem("access_token") || null
}

export function removeAccessToken(): void {
  window.localStorage.removeItem("access_token")
}