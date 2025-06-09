import styled from 'styled-components'

export const ModalRecipesContainer = styled.section`
display: grid;
max-width: 1fr;
position: fixed;
top: 0;
bottom: 0;
right:0;
left: 0;
z-index: 1000;
background:rgba(245, 39, 145, 0.15);
max-height: 100vh;
article{
    width: 80vw;
    background: whitesmoke;
    margin-left: 10vw;
    height: 80vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-right: 10vw;
    border-radius: 22px;
    text-align: center;
}

.article-content{
    padding: 2rem;
}
.article__instructions-box{
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    padding: 1rem;
    background: whitesmoke;
    justify-content: space-around;
}
.article__instructions-box{
    display: inline-block;
    width:40%;
    min-width: 200px;
}
.article__instructions-box ul li{
    list-style-type: disc;
    padding: 1rem;
    color: black;
    list-style-position: inside;
}

ul, ol{
    list-style-type: inside;
    padding-left: 2rem;
    text-align: left;
}

.buttonCircle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    color: white;
    font-weight: bolder;
    margin: 30px;
}
table{
    margin: 30px auto;
}
table , tr, td{
    border: 2px solid black;
    align-self: flex-start;
    width: 100%;
    max-width: 200px;
    text-align: left;
    border-collapse: collapse;  
}
`