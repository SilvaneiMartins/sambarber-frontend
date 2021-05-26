import styled from 'styled-components'

import colors from '../../utlitarios/color'

export const Container = styled.div`

`
export const Header = styled.header`
   padding: 32px 0;
   background: ${colors.background}
`

export const HeaderContent = styled.div`
   max-width: 1120px;
   margin: 0 auto;
   display: flex;
   align-items: center;

   > img{
      height: 80px;
   }

   button {
      margin-left: auto;
      background: transparent;
      border: 0;

      svg {
         color: ${colors.buttonPadrao};
         width: 25px;
         height: 25px;
      }
   }
`

export const Profile = styled.div`
   display: flex;
   align-items: center;
   margin-left: 80px;

   img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
   }

   div {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      line-height: 24px;

      span {
         color: ${colors.lineInWhite}
      }

      strong {
         color: ${colors.primary}
      }
   }
`
