import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import * as S from './style'

type EditorProps = {
  currentUser: User
}
const Editor: React.FC<EditorProps> = ({ currentUser }) => {
  return (
    <S.Container>
      <div>에디터 입니다</div>
      <div>
        현재 유저는 <S.UserBlock>{currentUser.name}</S.UserBlock> 입니다
      </div>
    </S.Container>
  )
}

export default Editor
