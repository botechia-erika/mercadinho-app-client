import { ErrorDisplay } from "../ErrorDisplay/ErrorDisplay"
import { Loader } from "../Loader/Loader"
import {ContainerHomeProfile} from './styled.HomeProfile'
export default function HomeProfile({loading, user, error}) {
  return (
           <>
           <ContainerHomeProfile>
          {loading ? (
            <Loader />
          ) : user ? (
            <article>
              <div className='header__article'>
              <h2>Bem-vindo @{user.nickname}</h2>
              <div className='header__avatar'>
              <img src={user.avatar} alt={'avatar do usuario'}/>
              </div>
              </div>
              <div className='box__article'>
              <p>email: {user.email}</p>
              <p>nome cadastrado: {user.fullName}</p>
              <p>CPF-CNPJ: {user.id}</p>
              <p>Id da Conta: {user.idProfile}</p>
              </div>
              {/* Render other details of the user */}
            </article>
          ) : error ? (
            <ErrorDisplay message="Erro ao carregar usuário" />
          ) : null}
   </ContainerHomeProfile>
   </>
  )
}
