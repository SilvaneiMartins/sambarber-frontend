import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signinBackgoundImg from '../../assets/img/signInBackground.png'
import colors from '../../utlitarios/color'

const appearFromLeft = keyframes`
   from {
      opacity: 0;
      transform: translateX(-50px);
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

   img {
        width: 10rem;
        height: 10rem;
    }

   animation: ${appearFromLeft} 1s;

   form {
      margin: 60px 0px;
      width: 340px;
      text-align: center;

      h1 {
         margin-bottom: 24px;
      }

      a {
         color: ${colors.textBase};
         display: block;
         margin-top: 10px;
         text-decoration: none;
         transition: color 0.2s;

         &:hover {
            color: ${shade(0.3, colors.textBase)};
         }
      }
   }

   > a {
      color: ${colors.linksButton};
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
         color: ${shade(0.2, colors.linksButton)};
      }
   }
`

export const Background = styled.div`
    flex: 1;
    background: url(${signinBackgoundImg}) no-repeat center;
    background-size: cover;
`
