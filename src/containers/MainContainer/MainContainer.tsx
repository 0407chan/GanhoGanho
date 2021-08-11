import Calendar from '@/components/Calendar'
import Editor from '@/components/Editor'
import Header from '@/components/Header'
import SideManage from '@/components/SideManage'
import { addMonths, subMonths } from 'date-fns'
import { Moment } from 'moment'
import React, { useState } from 'react'
import * as S from './style'

export type User = {
  name: string
  offDate: (Moment | null)[]
}

const initUserList: User[] = [
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

const MainContainer: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [userList, setUserList] = useState<User[]>(initUserList)
  const [currentUser, setCurrentUser] = useState<User | undefined>(
    userList.length > 0 ? userList[0] : undefined
  )

  const onPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }
  const onNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }
  const onToday = () => {
    setCurrentDate(new Date())
  }
  return (
    <S.Container>
      <Header
        onNextMonth={onNextMonth}
        onPrevMonth={onPrevMonth}
        onToday={onToday}
        currentDate={currentDate}
      />
      <S.ContentWrapper>
        <SideManage
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Calendar currentDate={currentDate} />
        <Editor
          currentUser={currentUser}
          setUserList={setUserList}
          setCurrentUser={setCurrentUser}
        />
      </S.ContentWrapper>
    </S.Container>
  )
}

export default MainContainer
