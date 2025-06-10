import {EmptyCartContainer } from './styled.EmptyCart'
import {useNavigate} from 'react-router-dom'
import {handleHome} from './../../router/coordinator'
export default function EmptyCart() {
  const navigate = useNavigate()
  return (
    <EmptyCartContainer>
      <section className="banner">
            <div className="banner__imagem"></div>
            <h2 className="banner__titulo">
              Carrinho  Vazio...
            </h2>
            <p className="banner__text">Click no botao para conhecer e comprar nossos produtos</p>
            <button className="banner__button" onClick={()=>{handleHome(navigate)}}>
              Conhecer Produtos
            </button>
        </section>
    </EmptyCartContainer>
  )
}