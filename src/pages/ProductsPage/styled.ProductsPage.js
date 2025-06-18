import styled from 'styled-components'


export const HomeContainer = styled.main`
display: grid;
max-width: 1fr;
padding: 8px auto;
height: 100%;
min-height: calc(100vh - 205px);
grid-template-columns: 20% 80%;
padding-bottom: 40px;

@media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 400px auto;

}
aside{

   background :#E2F788;
    height: 100%;
    color: gray;
    text-align: center;
}

#inputName, aside select, aside select   option{
    width: 80%;
    max-width: 120px;
    margin-right:   10%;
    border-radius: 22px;
    text-align:center;
    hesight: 30px;
}
`