// Component Imports


// Server Action Imports
import RegisterV2 from '@/views/auth/RegisterV2'
import { getServerMode } from '@core/utils/serverHelpers'

const RegisterV2Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <RegisterV2 mode={mode} />
}

export default RegisterV2Page
