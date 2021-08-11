import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import * as S from './style'
import UserBlock from './UserBlock'

type EditorProps = {
  userList: User[]
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

const SideManage: React.FC<EditorProps> = ({
  userList,
  currentUser,
  setCurrentUser
}) => {
  return (
    <S.Container>
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

export default SideManage
