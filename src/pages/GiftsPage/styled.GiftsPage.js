import styled from 'styled-components'


export const GiftsContainer = styled.main`
display: grid;
max-width: 1fr;
padding: 8px auto;
height: 100%;
min-height: calc(100vh - 205px);
grid-template-columns: 20% 80%;
padding-bottom: 40px;

@media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 200px auto;

}
aside{
    background: black;
    height: 100%;
    color: whitesmoke;
    padding: 1rem;
}

section >ul {
    display: flex; 
    flex-flow: row wrap;

}

.itemList {
    list-style-type: none;
    width: 304px;
    height: 188px;
    flex-shrink: 0;
    margin: 30px auto;
    padding: 24px;
}

section> ul li h2
{
    padding: 14px;
}

section >ul li img{ 
    width: 248px;
    height: 100px;
    background: var(--color);
    object-fit: contain;
}

`