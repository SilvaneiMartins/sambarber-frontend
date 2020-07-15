import styled, { css } from 'styled-components'

import Colors from '../../utlitarios/colors'
import Tooltip from '../../components/Tooltip'

interface ContainerProps {
   isFocused: Boolean
   isField: Boolean
   isErrored: Boolean
}

export const Container = styled.div<ContainerProps>`
   background: ${Colors.backgroundInput};
   border-radius: 10px;
   padding: 13px;
   width: 100%;

   border: 2px solid ${Colors.borderInput};
   color: ${Colors.placeholder};

   display: flex;
   align-items: center;

   & + div {
      margin-top: 5px;
   }

   ${props => props.isErrored && css`
      border-color: ${Colors.borderColorInputError};
   `}

   ${props => props.isFocused && css`
      color: ${Colors.borderColorInputCadastro};
      border-color: ${Colors.borderColorInputCadastro};
   `}

   ${props => props.isField && css`
      color: ${Colors.borderColorInputCadastro};
      /* border-color: ${Colors.borderColorInputCadastro}; */
   `}

   input {
      flex: 1;
      border: 0;
      background: transparent;
      color: ${Colors.colorText};

      &::placeholder {
         color: ${Colors.placeholder};
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
      background: ${Colors.inputSpanBackground};
      color: ${Colors.white};

      &::before {
         border-color: ${Colors.inputSpanBackground} transparent;
      }
   }

`
