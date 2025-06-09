import { FooterContainer } from "./styled.FooterContainer";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
export  function Footer() {
  return (
    <FooterContainer>
        <ul>
            <li>
                <a href="https://github.com/botechiadev"><FaGithubSquare /></a>
            </li>
            <li>
                <a href="https://linkedin.com/in/botechia-erika"><GrLinkedin /></a>
            </li>
            <li>
                <a href="mailto:botechiadev@gmail.com"><MdOutlineMail/></a>
            </li>
        </ul>
    </FooterContainer>
  )
}
