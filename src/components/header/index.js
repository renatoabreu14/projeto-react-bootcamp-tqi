import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Header = () => {
  const { getUser } = useGithub();

  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };
  
  return (
    <header>
        <S.Wrapper>
            <input type="text" name="" id="" placeholder="Digite o username para pesquisa ..." onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <button onClick={submitGetUser}>
                <span>BUSCAR</span>
            </button>
        </S.Wrapper>
    </header>
  )
}

export default Header
