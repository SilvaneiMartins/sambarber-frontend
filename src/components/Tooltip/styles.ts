import styled from 'styled-components'

import colors from '../../utlitarios/color'

export const Container = styled.div`
   position: relative;

   span {
      width: 180px;
      background: ${colors.spanToolTip};
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      color: ${colors.spanToolTipText};

      &::before {
         content: '';
         border-style: solid;
         border-color: ${colors.spanToolBefore} transparent;
         border-width: 6px 6px 0px 6px;
         /* bottom: 20px; */
         top: 100%;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
      }
   }

   &:hover span {
      opacity: 1;
      visibility: visible;
   }
`
