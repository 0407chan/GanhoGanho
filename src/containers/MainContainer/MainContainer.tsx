import Calendar from '@/components/Calendar'
import Editor from '@/components/Editor'
import Header from '@/components/Header'
import SideManage from '@/components/SideManage'
import { addMonths, subMonths } from 'date-fns'
import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import * as S from './style'

export type User = {
  name: string
  offDate: (Moment | null)[]
}

const initUserList: User[] = [
  {
    name: '피카츄',
    offDate: [moment('2021-08-01'), moment('2021-08-11'), moment('2021-08-21')]
  },
  {
    name: '라이츄',
    offDate: [moment('2021-08-24'), moment('2021-08-03'), moment('2021-08-18')]
  },
  {
    name: '파이리',
    offDate: [moment('2021-08-09'), moment('2021-08-11'), moment('2021-08-20')]
  },
  {
    name: '꼬부기',
    offDate: [moment('2021-08-05'), moment('2021-08-13'), moment('2021-08-26')]
  },
  {
    name: '버터플',
    offDate: [moment('2021-08-03'), moment('2021-08-16'), moment('2021-08-24')]
  },
  {
    name: '야도란',
    offDate: [moment('2021-08-07'), moment('2021-08-19'), moment('2021-08-21')]
  },
  {
    name: '피죤투',
    offDate: [moment('2021-08-05'), moment('2021-08-23'), moment('2021-08-31')]
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
        <Calendar
          currentDate={currentDate}
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Editor
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          userList={userList}
          setUserList={setUserList}
        />
      </S.ContentWrapper>
    </S.Container>
  )
}

export default MainContainer
