import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface User {
   id: string
   name: string
   email: string
   avatar_url: string
}

interface SigninCredentials {
   email: string
   password: string
}

interface AuthContextData {
   user: User
   signin(credentials: SigninCredentials): Promise<void>
   signOut(): void
}

interface AuthState {
   token: string
   user: User
}

const Auth = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
   const [data, setData] = useState<AuthState>(() => {
      const token = localStorage.getItem('@Rondosoft:token')
      const user = localStorage.getItem('@Rondosoft:user')
      if (token && user) {
         return { token, user: JSON.parse(user) }
      }
      return {} as AuthState
   })

   const signin = useCallback(async ({ email, password }) => {
      const response = await api.post('sessions', {
         email,
         password,
      })
      const { token, user } = response.data
      localStorage.setItem('@Rondosoft:token', token)
      localStorage.setItem('@Rondosoft:user', JSON.stringify(user))
      setData({ token, user })
   }, [])

   const signOut = useCallback(() => {
      localStorage.removeItem('@Rondosoft:token')
      localStorage.removeItem('@Rondosoft:user')
      setData({} as AuthState)
   }, [])

   // =================================================================
   return (
      <Auth.Provider value={{ user: data.user, signin, signOut }} >
         {children}
      </Auth.Provider>
   )
}

function useAuth(): AuthContextData {
   const context = useContext(Auth)
   if (!context) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider!')
   }
   return context
}

export {
   AuthProvider,
   useAuth,
}
