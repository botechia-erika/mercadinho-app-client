import styled from 'styled-components'
export const EmptyCartContainer = styled.main`

.banner {
  position: relative;
}
.banner__titulo {
  color: #C5392F;
  font-family: Pacifico, cursive;
  font-size: 5.0625rem;
  position: absolute;
  left: 50%;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.75);
  top: 34%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;
}
.banner__imagem {
  background: url('src/assets/img/banner2.png') no-repeat right / cover;
  height: calc(100vh - 205px);
  width: 100%;
  position: right;

}

.banner__text{
color: #EF6E6F;
font-family: Pacifico, cursive;
font-size: 2rem;
position: absolute;
left: 50%;
text-shadow: 2px  2px 0.6px rgba(0, 0, 0, 0.75);
top: 50%;
text-align: center;
transform: translate(-50%, -50%);
width: 100%;

}

.banner__button{
  color: #fdfdfd;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  position: absolute;
  left: 50%;
  background:
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.75);
  top: 65%; 
  background: black;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 55px;
max-width: 600px;
border-radius: 22px;
  }

  @media screen and (max-width:  720px){                
    .banner__text{
 display: none;
  }
`