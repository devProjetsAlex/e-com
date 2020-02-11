import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 225px;
    display: none;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-style: solid;
     border-color: transparent black rgb(212, 201, 201);
    margin: 6px 6px 30px ;
    overflow: hidden;
    box-shadow: 5px 5px 2px rgb(36, 32, 32);
`;

export const CollectionFooterContainer = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 28px;
`

export const NameContainer = styled.span`
width: 90%;
margin-bottom: 10px;
`
export const PriceContainer = styled.span`
    width:10%;
    text-allign: right;
`