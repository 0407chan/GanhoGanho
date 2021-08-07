import Calendar from '@/components/Calendar'
import LeftOutlined from '@ant-design/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'
import { addMonths, subMonths } from 'date-fns'
import format from 'date-fns/format'
import React, { useState } from 'react'
import * as S from './style'
const MainContainer: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

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
      <S.HeaderWrapper>
        <S.HeaderLeft>간호간호</S.HeaderLeft>
        <S.HeaderCenter>
          <div>
            <S.CalendarButton icon={<LeftOutlined />} onClick={onPrevMonth} />
            {format(currentDate, 'yyyy년 M월')}
            <S.CalendarButton icon={<RightOutlined />} onClick={onNextMonth} />
          </div>
          <S.CalendarButton onClick={onToday}>오늘</S.CalendarButton>
        </S.HeaderCenter>
        <S.HeaderLeft />
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.ContentLeft>간호간호</S.ContentLeft>
        <S.ContentCenter>
          <Calendar currentDate={currentDate} />
        </S.ContentCenter>
        <S.ContentLeft>오른쪽</S.ContentLeft>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default MainContainer
