import styled from 'styled-components'

export const CardRecipesContainer = styled.article`

  background: #fdfdfd;
  display: flex;
  flex-flow: column wrap;
 margin: 30px auto;
  width: calc(25% - 5rem);
  min-width: 320px;
align-self: center;
.receita__conteudo {
  padding: 1rem;
}
.receita__titulo {
  font-size: 1.43rem;
}
.receita__imagem {
  height: 200px;
}
.receita__descricao {
  font-size: 1.1875rem;
  line-height: 1.5;
  text-align: justify;
}
.receita__botao {
  background: #8d0606;
  border: none;
  border-radius: 5px;
  color: #fdfdfd;
  padding: 1rem;
  transition: all .1s ease-in-out;
}

.receita__botao:hover {
  background:#EB54B3;
  cursor: pointer;
}
`