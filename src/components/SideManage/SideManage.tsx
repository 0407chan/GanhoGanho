import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import ScheduleWrapper from './ScheduleWrapper'
import * as S from './style'
import UserWrapper from './UserWrapper'

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
      <UserWrapper
        userList={userList}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <ScheduleWrapper />
    </S.Container>
  )
}

export default SideManage
