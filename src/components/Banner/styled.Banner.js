import styled from 'styled-components'


export const BannerContainer = styled.div`

.banner {
  position: relative;
}
.banner__titulo {
  color:/* #66DB96*/#EB54B3;
  font-family: Pacifico, cursive;
  font-size: 4rem;
  position: absolute;
  left: 50%;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.75);
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;

}

.banner__titulo-green{
  color:  #66DB96;
}
.banner__imagem {
  background: url('src/assets/img/banner.png') no-repeat center / cover;
  height: calc(100vh - 72px);
  width: 100%;
  opacity: 0.4;

}


`