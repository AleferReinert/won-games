'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function useLogout() {
  const router = useRouter()

  function logout() {
    void (async () => {
      const data = await signOut({ redirect: false, callbackUrl: '/' })
      router.push(data.url)
    })()
  }

  return { logout }
}
