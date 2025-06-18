import { BannerContainer } from './styled.Banner'
import { handleProducts } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
export default function Banner() {
  const navigate = useNavigate()
  return (
    <BannerContainer>
      <section className="banner">
            <div className="banner__imagem"></div>
            <h2 className="banner__titulo">
            <span className="banner__titulo-green">Mercadinho  Simples</span> para Todos!
            </h2>
            <button onClick={()=>{handleProducts(navigate)}} className='btnBanner'>VER PRODUTOS</button>
        </section>
    </BannerContainer>
  )
}
