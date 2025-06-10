import styled from 'styled-components'

export const AsideContainer = styled.aside`
 button {
   display: block;
background: none;
border: 1px solid transparent;
border-radius: 999px;
padding: 0.51rem;
margin: 30px auto;
background-color: #E2F788;
}

button:hover{
    background: orange;
    color: white;
}

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

.section1{
   padding-top: 110px;
   padding-left: 80px;
   color: black;
   font-size: 1rem;
}

`