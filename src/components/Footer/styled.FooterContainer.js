import styled from 'styled-components'

export const FooterContainer = styled.footer`
position: fixed;
display: grid;
max-width: 1fr;
bottom: 0;
left: 0;
right: 0;
height: 60px;
background-color:gray;
color: #efefef;
font-family: 'Roboto', sans-serif;

ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items:center;
    height: 100%;
}


ul li{
    list-style-type: none;
}

ul li a{
    color: #efefef;
    font-size: 24px;
    text-decoration: none;
}


ul li a:hover{
    color: black;
    font-size: 22px;
    font-weight: 900;
    text-decoration:none;
}
`