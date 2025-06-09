import {SectionRecipesContainer} from './styled.SectionRecipes'

export default function SectionRecipes({children}) {
  return (
    <>
    <SectionRecipesContainer>
      <section className="receitas">
      {children}
      </section>
    </SectionRecipesContainer>
    </>
  )
}
