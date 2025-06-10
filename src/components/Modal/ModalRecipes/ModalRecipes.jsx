import { ModalRecipesContainer } from "./styled.ModalRecipes"





export default function ModalRecipes({recipe, closeModal}) {
    const {id, title, description, cooking, ingredients, imgUrl} = recipe
  
  
  
  const renderCooking = (cooking)=>{
    return(
        <>
        <ul>
        {cooking.map((cook, indice)=>(
            <li key={indice}>
                {cook}
            </li>
        ))}
        </ul>
        </>
    )
  }
  
  const renderIngredients = (ingredients)=>{
    return(
        <>
        <table>
        {ingredients.map((ingredient, indice)=>(
            <tr key={indice}>
                <td>{ingredient}</td>
            </tr>
        ))}
        </table>
        </>
    )
  }
  
    return (
  <ModalRecipesContainer>
        <article>
            <button className="buttonCircle" onClick={closeModal}>X</button>
            <h2>{title}</h2>
            <div className="article-content">
            <div className="article__instructions-box">
            <div>
            <h3>INGREDIENTES</h3>
            {renderIngredients(ingredients)}
            </div>
            <div>
            <h3>SCORE NECESSARIO:</h3>
          {renderCooking(cooking)}
            </div>
            </div>
            </div>
        </article>
    </ModalRecipesContainer>
  )
}
