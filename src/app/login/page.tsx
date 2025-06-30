// Next Imports
import type { Metadata } from 'next'

// Component Imports

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import LoginV2 from '@/views/auth/Login'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <LoginV2 mode={mode} />
}

export default LoginPage
