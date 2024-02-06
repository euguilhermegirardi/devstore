import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  console.log(baseUrl)
  const url = new URL(path, baseUrl)
  console.log(url)

  return fetch(url, init)
}
