'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export async function authenticate(prevState, formData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      return '로그인 실패'
    }
    throw error
  }
}
