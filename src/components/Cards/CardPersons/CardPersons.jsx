import {CardPersonsContainer} from './styled.CardPersons'
export function CardPersons({user}){

  const {id, name, fullName, nickname, email, password, avatar} = user
  return(
    <CardPersonsContainer>
  <article className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--box">
              <img src={avatar} alt={'avatar do ${nickName}'}/>
            </div>
            <span className="pessoa__nome">{nickname}</span>
            <span className="pessoa__funcao">{email}</span>
        </article>
     </CardPersonsContainer> 
  )
}