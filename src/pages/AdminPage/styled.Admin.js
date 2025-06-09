import styled from 'styled-components'


export const AdminContainer = styled.main`
display: grid;
max-width: 0.85fr;
min-height: 65vh;
grid-template-columns: 120px auto;
grid-template-rows: 100%;

@media screen and (max-width: 769px) {
aside button span{
   display: none;
}

aside button {
   display: block;
background: none;
border: 1px solid transparent;
border-radius: 999px;
padding: 0.51rem;
margin: 30px auto;
background-color: #E2F788;
}
aside button svg{
 height: 40px;
 width: 40px;
 color: gray;
}
}
`