import { http, HttpResponse } from 'msw'

interface ResetPasswordRequestBody {
  code: string
  password: string
  passwordConfirmation: string
}

export const resetPasswordHandler = http.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
  async ({ request }) => {
    const { code, password, passwordConfirmation } = (await request.json()) as ResetPasswordRequestBody

    if (password === passwordConfirmation && code === 'validCode') {
      return HttpResponse.json({ ok: true, status: 200, user: { email: 'johndoe@example.com' } })
    }

    return HttpResponse.json({ ok: false, status: 400, error: 'Expired link' })
  }
)
