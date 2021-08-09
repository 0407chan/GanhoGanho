import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import * as S from './style'
import UserBlock from './UserBlock'

type EditorProps = {
  currentUser: User
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>
}

const SideManage: React.FC<EditorProps> = ({ currentUser, setCurrentUser }) => {
  const userList: User[] = [
    {
      name: '피카츄',
      offDate: []
    },
    {
      name: '라이츄',
      offDate: []
    },
    {
      name: '파이리',
      offDate: []
    },
    {
      name: '꼬부기',
      offDate: []
    },
    {
      name: '버터플',
      offDate: []
    },
    {
      name: '야도란',
      offDate: []
    },
    {
      name: '피죤투',
      offDate: []
    },
    {
      name: '또가스',
      offDate: []
    }
  ]
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
              isCurrentUser={currentUser.name === user.name}
            />
          )
        })}
      </S.UserBlockWrapper>
    </S.Container>
  )
}

export default SideManage
