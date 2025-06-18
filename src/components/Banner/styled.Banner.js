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


.btnBanner {
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color:rgb(255, 230, 0);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  color: black;
  font-weight: bolder;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  z-index: 1;
  text-decoration: none;
  text-align: center;
  width: 200px;
}


`