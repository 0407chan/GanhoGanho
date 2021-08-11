import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import * as S from './style'
type UserBlockProps = {
  user: User
  isCurrentUser: boolean
  onClick: () => void
}
const UserBlock: React.FC<UserBlockProps> = ({
  user,
  isCurrentUser,
  onClick
}) => {
  return (
    <S.Container
      className={isCurrentUser ? 'current-user' : ''}
      onClick={onClick}
    >
      <S.Horizontal>
        <div>{user.name}</div>
        <S.OffDateWrapper>
          {user.offDate.map(() => {
            return <S.OffDate />
          })}
        </S.OffDateWrapper>
      </S.Horizontal>
    </S.Container>
  )
}

export default UserBlock
