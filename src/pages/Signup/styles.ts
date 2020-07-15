import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signupBackgoundImg from '../../assets/sign-up-background.png'
import Colors from '../../utlitarios/colors'

const appearFromRight = keyframes`
   from {
      opacity: 0;
      transform: translateX(50px);
   }
   to {
      opacity: 1;
      transform: translateX(0px);
   }
`
export const Container = styled.div`
   height: 100vh;

   display: flex;
   align-items: stretch;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   max-width: 500px;
`
export const AnimatedContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   animation: ${appearFromRight} 1s;

   form {
      margin: 60px 0px;
      width: 340px;
      text-align: center;

      h1 {
         margin-bottom: 24px;
      }

      a {
         color: ${Colors.esqueceuSenha};
         display: block;
         margin-top: 10px;
         text-decoration: none;
         transition: color 0.2s;

         &:hover {
            color: ${shade(0.2, Colors.esqueceuSenha)};
         }
      }
   }

   > a {
      color: ${Colors.criarconta};
      display: block;
      margin-top: 10px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         margin-right: 10px;
      }

      &:hover {
         color: ${shade(0.2, Colors.criarconta)};
      }
   }
`

export const Background = styled.div`
   flex: 1;
   background: url(${signupBackgoundImg}) no-repeat center;
   background-size: cover;
`
