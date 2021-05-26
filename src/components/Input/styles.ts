import styled, { css } from 'styled-components'

import colors from '../../utlitarios/color'
import Tooltip from '../../components/Tooltip'

interface ContainerProps {
   isFocused: Boolean
   isField: Boolean
   isErrored: Boolean
}

export const Container = styled.div<ContainerProps>`
   background: ${colors.inputBackground};
   border-radius: 10px;
   padding: 13px;
   width: 100%;

   border: 2px solid ${colors.borderInput3};
   color: ${colors.textComplement};

   display: flex;
   align-items: center;

   & + div {
      margin-top: 5px;
   }

   ${props => props.isErrored && css`
      border-color: ${colors.borderColorInputError};
   `}

   ${props => props.isFocused && css`
      color: ${colors.borderColorInputCadastro};
      border-color: ${colors.borderColorInputCadastro};
   `}

   ${props => props.isField && css`
      color: ${colors.borderColorInputCadastro};
      /* border-color: ${colors.borderColorInputCadastro}; */
   `}

   input {
      flex: 1;
      border: 0;
      background: transparent;
      color: ${colors.textBase};

      &::placeholder {
         color: ${colors.textComplement};
      }
   }

   svg {
      margin-right: 10px;
   }
`

export const Error = styled(Tooltip)`
   height: 20px;
   margin-left: 10px;

   svg {
      margin: 0;
   }

   span {
      background: ${colors.inputSpanBackground};
      color: ${colors.boxBase};

      &::before {
         border-color: ${colors.inputSpanBackground} transparent;
      }
   }

`
