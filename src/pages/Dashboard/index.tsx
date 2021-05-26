import React from 'react'
import { FiPower } from 'react-icons/fi'

import { useAuth } from '../../hooks/Auth'
import logoImg from '../../assets/logo/logoR.png'

import {
   Container,
   Header,
   HeaderContent,
   Profile
} from './styles'

const Dashboard: React.FC = () => {
   const { signOut, user } = useAuth()

   return (
      <Container>
         <Header>
            <HeaderContent>
               <img
                  src={logoImg}
                  alt='Rondosoft'
               />

               <Profile>

                  <img
                     src={user.avatar_url}
                     alt={user.name}
                  />

                  <div>
                     <span>Bem Vindo,</span>
                     <strong>{user.name}</strong>
                  </div>

               </Profile>

               <button
                  type='button'
                  onClick={signOut}
               >
                  <FiPower />
               </button>

            </HeaderContent>
         </Header>
      </Container>
   )
}

export default Dashboard
