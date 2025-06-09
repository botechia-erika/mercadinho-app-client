import { useState } from 'react';
import Swal from 'sweetalert2';
import { CardProductsContainer } from './styled.CardProducts';
import { useContext } from 'react';
import { Api1Context } from '../../../common/context/api1-context';

export default  function CardProducts({ product }) {
  const [view, setView] = useState(0);
 const {addCart} = useContext(Api1Context)
  const { id, item: name, description, imageUrl, price , category} = product;

  function openAlert() {
    Swal.fire({
      title: 'Produto Adicionado ao Carrinho',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500, // milliseconds
    });
  }

  return (
    <>
      {view === 0 && (
        <CardProductsContainer>
          <article className="receita">
            <span className="badge1">{category}</span>
            <img alt={`Img da Receita ${name}`} className="receita__imagem" src={imageUrl} />
            <div className="receita__conteudo">
              <h4 className="receita__titulo">{name}</h4>
              <p className="receita__descricao">R${price} ({description})</p>
              <button className="receita__botao" onClick={()=>{addCart(product)}}>
                Adicionar ao carrinho
              </button>
            </div>
          </article>
        </CardProductsContainer>
      )}
    </>
  );
}
