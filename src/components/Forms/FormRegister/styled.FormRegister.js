import styled from 'styled-components'

export const FormRegisterContainer = styled.main`
padding: 2rem;
padding-top: 20%;



h2{
  color: black;
  margin: 30px auto;
  text-align: center;
  font-size: 3rem;
  text-shadow: 2px -2px 0px white;}
label{
  width: 100%;
  text-align: center;
  margin: 30px auto;
  padding-left: 30px;
  margin-top: 30px;
}
@media screen and (max-width: 520px){
  top: 100px;
  left: 5%;
  right: 5%;
}
form{
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;
}

input{
  height: 33px;
  border-radius: 22px;
  width: 43%;
  min-width: 150px;
  height: 44.171px;
  flex-shrink: 0;
  margin: 20px auto;
  text-align:center;
  margin-left: 5%;
}


button{
  display: flex;
height: 52px;
padding: 10.326px 21.685px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
color: #FFF;
background: #007500;
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize;
margin: 20px auto;
text-align: center;
border-radius:22px;
text-transform: capitalize;
}

button:hover{
  background: #7FB519;
  color: black;
}

@media screen and (max-width: 420px){
  position: relative;
width: 90%;
height: 100%;
bottom: 120px;

  input{
    width: 80%;
    margin: 30px auto;
  }
}

p{
  width: 100%;
  text-align: center;
  margin:  auto;
  align-self: center;
}

.resetBtn{
  background: red;
}

.resetBtn:hover{
  background: darkred;
  color: white;
}

`