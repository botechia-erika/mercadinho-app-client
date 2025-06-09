import { ButtonContainer } from "./styled.Button"
export default function Button( {onClk, children}) {
  return (
    <ButtonContainer onClick={onClk}>{children}</ButtonContainer>
  )
}
