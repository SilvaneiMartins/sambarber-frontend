import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import colors from '../../../utlitarios/color'

interface ContainerProps {
   type?: 'sucess' | 'error' | 'info'
   hasDescription?: number
}

const toastTypeVariations = {
   info: css`
      background: ${colors.backgroundToast};
      color: ${colors.textToast};
   `,
   sucess: css`
      background: ${colors.backgroundToastPropsSucces};
      color: ${colors.textToastPropsSucces};
   `,
   error: css`
      background: ${colors.backgroundToastPropsError};
      color: ${colors.textToastPropsError};
   `
}

export const Container = styled(animated.div)<ContainerProps>`
   width:  360px;

   position: relative;
   padding: 16px 30px 16px 16px;
   border-radius: 10px;
   box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
   display: flex;

   & + div {
      margin-top: 5px;
   }

   ${ (props) => toastTypeVariations[props.type || 'info']}

   svg {
      margin: 4px 5px 0px 0px
   }

   div {
      flex: 1;

      p {
         margin-top: 4px;
         font-size: 14px;
         opacity: 0.8;
         line-height: 20px;
      }
   }

   button {
      position: absolute;
      right: 8px;
      top: 19px;
      opacity: 0.6;
      border: 0;
      background: transparent;
      color: inherit;
   }

   ${ props => !props.hasDescription && css`
      align-items: center;

      svg {
         margin-top: 0px;
      }
   `}
`
