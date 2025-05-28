import { http, HttpResponse } from 'msw'

export const resetPasswordErrorHandler = http.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, () => {
  return HttpResponse.json({ ok: false, status: 400, error: 'Expired link' })
})

export const resetPasswordSuccessHandler = http.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
  () => {
    return HttpResponse.json({ ok: true, status: 200, user: { email: 'johndoe@example.com' } })
  }
)
