import { FooterContainer } from "./styled.FooterContainer";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
export  function Footer() {
  return (
    <FooterContainer>
        <ul>
            <li>
                <a href="https://github.com/botechia-erika"><FaGithubSquare /></a>
            </li>
            <li>
                <a href="https://linkedin.com/in/botechia-erika"><GrLinkedin /></a>
            </li>
            <li>
                <a href="mailto:24.01905-4@maua.br"><MdOutlineMail/></a>
            </li>
        </ul>
    </FooterContainer>
  )
}
