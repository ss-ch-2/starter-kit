// authThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Types d'entrée
export interface Credentials {
  email: string
  password: string
}

// Type de réponse (tu peux adapter selon ton backend)
interface UserResponse {
  token: string
  currentuser: {
    id: string
    email: string
    name: string
    roles: string[]
  }
}

// Thunk typé
export const LoginUser = createAsyncThunk<
  UserResponse,        // ✅ return type (payload creator result)
  Credentials,         // ✅ argument type
  {
    rejectValue: string // ✅ reject value (en cas d'erreur)
  }
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3002/api/auth/signin', credentials)
      console.log(response.data)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed')
    }
  }
)
