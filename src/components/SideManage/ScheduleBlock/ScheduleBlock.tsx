import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import * as S from './style'
type ScheduleBlockProps = {
  user: User
  isCurrentUser: boolean
  onClick: () => void
}
const ScheduleBlock: React.FC<ScheduleBlockProps> = ({
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
          {user.offDate.map((date) => {
            return <S.OffDate isDate={date !== null} />
          })}
        </S.OffDateWrapper>
      </S.Horizontal>
    </S.Container>
  )
}

export default ScheduleBlock
