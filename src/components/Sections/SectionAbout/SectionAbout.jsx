import {SectionAboutContainer} from './styled.SectionAbout'
export default function SectionAbout({about}) {
const {title, text } = about

  return (
    <>
    <SectionAboutContainer>
      <section className="sobre">
            <h2 className="sobre__titulo">{title}</h2>
            <p className="sobre__descricao">{text}</p>
        </section> 
    </SectionAboutContainer>
  </>
  )
}
