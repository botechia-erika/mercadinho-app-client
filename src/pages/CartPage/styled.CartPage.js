import styled from "styled-components";

export const CartContainer = styled.main`
display: grid;
grid-template-rows: 80p auto 125px;
min-height: 70vh;
overflow-y: scroll;

table{
  width: 80%;
  border: 2px solid black;
  border-radius: 22px;
  padding: 2rem;
  margin: auto;
}

tbody td, tr{
  border: 2px solid gray;
  border-collapse: collapse;
  padding: 0.42rem;
  border-radius:22px;
  text-align: center;
  margin: 15px auto;
  color: gray;
}

.deleteItem{
  background: darkred;
  color: white;
  border-radius: 50%;
  padding: 10px;                                                                                                                                
}
`