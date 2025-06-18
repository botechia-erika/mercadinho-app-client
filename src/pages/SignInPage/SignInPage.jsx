import FormSignIn from "../../components/Forms/FormSignIn/FormSignIn"
import { SignInContainer } from "./styled.SignIn"
export function SignInPage(){
    return(
     
        <SignInContainer>
          <div className="container">
          <FormSignIn/>
          </div>
        </SignInContainer>
     )
}