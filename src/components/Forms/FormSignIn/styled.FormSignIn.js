import styled from 'styled-components'

export const FormSignInContainer= styled.main`
position: fixed;
top:  180px;
bottom: 200px;
left: 100px; 
right: 100px;
background: #E3F988;
border-radius: 22px;
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
  top: 190px;
  left: 5%;
  right: 5%;
}



input{
  height: 33px;
  border-radius: 22px;
  min-width: 300px;
  height: 44.171px;
  flex-shrink: 0;
  margin: 20px auto;
  text-align:center;
  margin-left: 5%;
}


button{
  display: flex;
width: 169px;
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

.button__signUp{
  display: flex;
width: 189px;
height: 52px;
padding: 10.326px 21.685px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
color: white;
background: #DBA32A;
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize;
margin: 20px auto;
text-align: center;
border-radius:22px;
}

.button__flex{
  display: flex;
  justify-content: space-around;
}

.button__signUp:hover{
  background-color: gold;
  color: black;
}
input[type="text"] {
  border-radius: 6px;
  border: 1px solid #D6D6D6;
  background: #FFF;
width: 273px;
  min-width: 89%;
  min-width: 90%;
  margin: 20px 5%;
  height: 40px;
  flex-shrink: 0;
}

p{
  width: 100%;
  text-align: center;
  margin: 10px auto;
  align-self: center;
}

`