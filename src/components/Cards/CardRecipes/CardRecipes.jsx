import { useState } from 'react'
import ModalRecipes from '../../Modal/ModalRecipes/ModalRecipes'
import {CardRecipesContainer} from './styled.CardRecipes'


export  function CardProducts({recipe}) {
  const [view, setView] = useState(0)



  const  {id, title, description, imgUrl, ingredients, cooking} = recipe



function openModal (e){
  setView(1)
}

  function closeModal(e){
    setView(0)
  }


  return (
    <>
   
{view === 0  &&

    <CardRecipesContainer>


    <article  className="receita">
                <img alt={`Img da Receita ${title}`} className="receita__imagem" src={imgUrl} />
                <div className="receita__conteudo">
                    <h4 className="receita__titulo">{title}</h4>
                    <p className="receita__descricao">{description}</p>
                    <button className="receita__botao" onClick={()=>{openModal(recipe, closeModal)}}>Ver receita</button>
                </div>
   </article>
    </CardRecipesContainer>
} 
{view === 1 && <ModalRecipes
    closeModal={closeModal}
    recipe={recipe}
  />} 
  
  
  </>
  )
}
