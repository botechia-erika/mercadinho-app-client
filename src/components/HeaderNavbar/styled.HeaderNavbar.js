import styled from 'styled-components'

export const HeaderNavbarContainer = styled.header`
.cabecalho {
  align-items: center;
  background: #f9f9f9;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}

.menu__lista {
  display: flex;
}
.menu__link {
  color: #808080;
  margin-right: 1.25rem;
  text-decoration: none;
  text-transform: lowercase;
}

.menu__link.ativo {
  color: #333333;
  font-weight: bold;
}

.menu__link:hover {
  text-decoration: underline;
}
.menu__item {
  list-style: none;
}

.menu__item:last-child .menu__link {
  margin-right: 0;
}

.logo{
  width: 80px;

}

button{
  padding: 0.625rem 1.25rem !important;
  border-radius:22px;
  border: none;
  text-decoration: none;
  background-color:#E2F788;
}
`