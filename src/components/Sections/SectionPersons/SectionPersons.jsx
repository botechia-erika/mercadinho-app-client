import { SectionPersonsContainer } from "./styled.SectionPersons"
export default function SectionPersons({children}) {
  return (
    <SectionPersonsContainer>
   <section className="pessoas">
    {children}
</section>
</SectionPersonsContainer>
  )
}
