import styled from 'styled-components'

export const ScoreContainer = styled.div`
.pessoa {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: 50px auto;
  font-size: 2rem;
}

.pessoa__nome {
  color: #8d0606;
  font-family: Pacifico, cursive;
  font-size: 3rem;
  margin: 2rem 0;
}
.pessoa__imagem {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 100%;
  height: 300px;
  margin: 0 auto;
  width: 300px;
  font-size: 2rem;
}

.pessoa__imagem--box{
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
border: 3px groove gold;
align-content: center;
}


img{
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 2.4rem;
  background:#8d0606;
}

`