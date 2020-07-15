import React, { createContext, useCallback, useState, useContext } from 'react'
import { uuid } from 'uuidv4'

import ToastContainer from '../components/ToastContainer'

interface ToastContextData {
   addToast(message: Omit<ToastMessage, 'id'>): void
   removeToast(id: string): void
}

export interface ToastMessage {
   id: string
   type?: 'sucess' | 'error' | 'info'
   title: string
   description?: string
}

const Toast = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
   const [messages, setMessages] = useState<ToastMessage[]>([])

   const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid()
      const toast = {
         id,
         type,
         title,
         description,
      }
      setMessages((state) => [...state, toast])
   }, [])

   const removeToast = useCallback((id: string) => {
      setMessages(state => state.filter(message => message.id !== id ))
   }, [])

   return (
      <Toast.Provider value={{ addToast, removeToast }} >
         {children}
         <ToastContainer messages={messages} />
      </Toast.Provider>
   )
}


function useToast(): ToastContextData {
   const context = useContext(Toast)
   if (!context) {
      throw new Error('useToast deve ser usado dentro de um ToastProvider!')
   }
   return context
}

export {
   ToastProvider,
   useToast,
}
