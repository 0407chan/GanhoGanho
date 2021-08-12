import { User } from '@/containers/MainContainer/MainContainer'
import { format } from 'date-fns'
import React from 'react'
import * as S from './style'

const getBlockDateFormat = (day: Date) => {
  let result = 'd'

  if (format(day, 'd') === '1') {
    result = 'M월 d일'
  }
  return result
}

type DateBlockProps = {
  currentDate: Date
  className: string
  currentUser?: User
  userList: User[]
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
}
const DateBlock: React.FC<DateBlockProps> = ({
  currentDate,
  className,
  currentUser,
  userList,
  setCurrentUser
}) => {
  const isToday = () => {
    let result = ''
    if (
      format(currentDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
    ) {
      result += ' today'
    }
    return result
  }
  const getClassName = (user: User) => {
    let result = ''
    if (currentUser?.name === user.name) {
      result = 'current-user'
    } else {
      result = 'other-user'
    }

    return result
  }
  return (
    <S.Container className={className}>
      <S.DateLabel className={isToday()}>
        {format(currentDate, getBlockDateFormat(currentDate))}
      </S.DateLabel>
      <S.BlockWrapper>
        {userList.map((user) => {
          return (
            <S.DayBlock
              onClick={() => {
                setCurrentUser(user)
              }}
              className={getClassName(user)}
            >
              {user.name}
            </S.DayBlock>
          )
        })}
      </S.BlockWrapper>
      <S.BlockWrapper>
        {userList.map((user) => {
          return (
            <S.EveningBlock
              onClick={() => {
                setCurrentUser(user)
              }}
              className={getClassName(user)}
            >
              {user.name}
            </S.EveningBlock>
          )
        })}
      </S.BlockWrapper>
      <S.BlockWrapper>
        {userList.map((user) => {
          return (
            <S.NightBlock
              onClick={() => {
                setCurrentUser(user)
              }}
              className={getClassName(user)}
            >
              {user.name}
            </S.NightBlock>
          )
        })}
      </S.BlockWrapper>
      <S.BlockWrapper>
        {userList.map((user) => {
          return (
            <S.OffBlock
              onClick={() => {
                setCurrentUser(user)
              }}
              className={getClassName(user)}
            >
              {user.name}
            </S.OffBlock>
          )
        })}
      </S.BlockWrapper>
    </S.Container>
  )
}

export default DateBlock
