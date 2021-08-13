import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import UserBlock from '../UserBlock'
import * as S from './style'

type EditorProps = {
  userList: User[]
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

const UserWrapper: React.FC<EditorProps> = ({
  userList,
  currentUser,
  setCurrentUser
}) => {
  return (
    <S.Container>
      <S.FormLabel>근무자</S.FormLabel>
      <S.UserBlockWrapper>
        {userList.map((user, index) => {
          return (
            <UserBlock
              key={`${user.name}-${index}`}
              user={user}
              onClick={() => {
                setCurrentUser(user)
              }}
              isCurrentUser={currentUser?.name === user.name}
            />
          )
        })}
      </S.UserBlockWrapper>
    </S.Container>
  )
}

export default UserWrapper
