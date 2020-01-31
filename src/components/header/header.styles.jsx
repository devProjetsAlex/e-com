import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const HeaderContainer = styled.div`
    height: 150px;
    width: 110%;
    display: flex;
    justify-content: space-evenly;
    font-size: 38px;
`

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 400px;
      padding: 1px;
`
export const OptionContainer = styled.div`
    width: 36%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: flex; 
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
