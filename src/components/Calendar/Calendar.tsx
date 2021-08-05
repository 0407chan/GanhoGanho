import React, { useEffect, useState } from 'react'
import * as S from './style'
const Calendar: React.FC = () => {
  const [days, setDays] = useState<number[]>([])

  useEffect(() => {
    const newDays: number[] = []
    for (let index = 1; index < 36; index += 1) {
      newDays.push(index)
    }
    setDays(newDays)
  }, [])
  return (
    <S.Container>
      <S.CalendarHeader className="sunday">일</S.CalendarHeader>
      <S.CalendarHeader>월</S.CalendarHeader>
      <S.CalendarHeader>화</S.CalendarHeader>
      <S.CalendarHeader>수</S.CalendarHeader>
      <S.CalendarHeader>목</S.CalendarHeader>
      <S.CalendarHeader>금</S.CalendarHeader>
      <S.CalendarHeader className="saturday">토</S.CalendarHeader>
      {days.map((day, index) => {
        let newClassName = ''
        if (index % 7 === 0) {
          newClassName = 'sunday'
        }
        if (index % 7 === 6) {
          newClassName = 'saturday'
        }
        return (
          <S.CalendarBlock key={day} className={newClassName}>
            <div className="block-label">{day}</div>
          </S.CalendarBlock>
        )
      })}
    </S.Container>
  )
}

export default Calendar
