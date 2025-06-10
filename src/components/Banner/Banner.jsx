import { BannerContainer } from './styled.Banner'

export default function Banner() {
  return (
    <BannerContainer>
      <section className="banner">
            <div className="banner__imagem"></div>
            <h2 className="banner__titulo">
            <span className="banner__titulo-green">Mercadinho  Simples</span> para Todos!
            </h2>
        </section>
    </BannerContainer>
  )
}
