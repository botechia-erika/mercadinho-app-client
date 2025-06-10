import styled from "styled-components"
export const CardPersonsContainer = styled.article`

.pessoa {
  display: flex;
  flex-direction: column;
}

.pessoa__nome {
  color: #8d0606;
  font-family: Pacifico, cursive;
  font-size: 2rem;
  margin: 1rem 0;
}
.pessoa__imagem {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  height: 300px;
  margin: 0 auto;
  width: 300px;
}

.pessoa__imagem--box{
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}


img{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

`