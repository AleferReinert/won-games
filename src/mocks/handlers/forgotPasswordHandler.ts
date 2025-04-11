import { http, HttpResponse } from 'msw'

type ForgotPasswordRequestBody = {
  email: string
}

export const forgotPasswordHandler = http.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
  async ({ request }) => {
    const { email } = (await request.json()) as ForgotPasswordRequestBody

    if (email === 'valid@example.com') {
      return HttpResponse.json({ ok: true, status: 200 })
    }

    return HttpResponse.json({ ok: false }, { status: 400 })
  }
)
