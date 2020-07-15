import styled from 'styled-components'
import { shade } from 'polished'

import Colors from '../../utlitarios/colors'

export const Container = styled.button`
   background: ${Colors.backgroundButton};
   height:56px;
   border-radius: 10px;
   border: 0px;
   padding: 0 13px;
   width: 100%;
   color: ${Colors.buttonText};
   margin-top: 10px;
   font-weight: 500;
   transition: background-color 0.2s;
   font-size: 22px;

   &:hover {
      background: ${shade(0.2, Colors.backgroundButton)};
   }
`
