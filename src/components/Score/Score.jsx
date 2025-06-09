
import { ScoreContainer } from "./styled.score";
import score from './../../assets/img/brand/score.png'
export function Score({data}){    

  return(
    <ScoreContainer>
  <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--box">
              <img src={score} alt={'avatar do ${nickName}'}/>
            </div>
            <span className="pessoa__nome">SCORE</span>
            <span className="pessoa__funcao">{data.score}</span>
        </div>
     </ScoreContainer> 
  )
}