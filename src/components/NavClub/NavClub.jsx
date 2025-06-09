import { AsideContainer } from "./styled.NavClub"
import { FaUserCog, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { BsFillBookmarkCheckFill, BsTrophy } from 'react-icons/bs';
import { RiLogoutCircleFill } from "react-icons/ri";
import { handleScore, handlePurchases, handleGifts } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
export default function NavClub(){


    const handleLogout =(e)=>{
        localStorage.setItem('token', '')
        navigate('/')
    }
 const navigate = useNavigate()
    return(
        <AsideContainer>
        <button>
          <span>PERFIL</span>
          <FaUserCircle />
        </button>
        <button
         onClick={()=>{handleScore(navigate)}}       
        >
          <span
          >PONTOS</span>
          <BsFillBookmarkCheckFill />
        </button>
        <button
          onClick={()=>{handlePurchases(navigate)}}>         <span>COMPRAS</span>
          <FaOpencart />
        </button>
        <button
         onClick={()=>{handleGifts(navigate)}}       
        >
          <span>PREMIOS</span>
          <BsTrophy />
        </button>

        <button onClick={handleLogout}>
            <span>LOGOUT</span>
           <RiLogoutCircleFill/>
           </button>
       </AsideContainer>
    )
}