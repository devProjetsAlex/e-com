import styled from 'styled-components'

import {ReactComponent as ShoppingIconSvg} from '../../assets/shopping-bag.svg'

export const CartContainer = styled.div`
    width: 100px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: middle;
    justify-content: space-evenly;
    cursor: pointer;
    margin-left: 5px;
  `

  export const ShoppingIcon = styled(ShoppingIconSvg)`
  width: 65px;
  height: 65px;
  `

  export const ItemCountContainer = styled.span`
    position: absolute;
      font-size: 18px;
      font-weight: bold;
      bottom:1px;
      margin-left:-3px;
  `