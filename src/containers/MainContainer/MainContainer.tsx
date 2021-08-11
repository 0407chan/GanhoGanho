import Calendar from '@/components/Calendar'
import Editor from '@/components/Editor'
import Header from '@/components/Header'
import SideManage from '@/components/SideManage'
import { addMonths, subMonths } from 'date-fns'
import React, { useState } from 'react'
import * as S from './style'

export type User = {
  name: string
  offDate: Date[]
}

const MainContainer: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  const [currentUser, setCurrentUser] = useState<User>({
    name: '피카츄',
    offDate: []
  })

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
        <SideManage currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Calendar currentDate={currentDate} />
        <Editor currentUser={currentUser} />
      </S.ContentWrapper>
    </S.Container>
  )
}

export default MainContainer
