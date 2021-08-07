import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek
} from 'date-fns'
import React, { useEffect, useState } from 'react'
import * as S from './style'

type CanlendarProps = {
  currentDate: Date
}
const Calendar: React.FC<CanlendarProps> = ({ currentDate }) => {
  const [dayList, setDayList] = useState<Date[][]>([])

  const getCalendar = (newDate: Date) => {
    const date = newDate
    const matrix = eachWeekOfInterval(
      {
        start: startOfMonth(date),
        end: endOfMonth(date)
      },
      {
        weekStartsOn: 0
      }
    )

    return matrix.map((weekDay) => {
      return eachDayOfInterval({
        start: startOfWeek(weekDay, {
          weekStartsOn: 0
        }),
        end: endOfWeek(weekDay, {
          weekStartsOn: 0
        })
      }).map((day) => {
        return day
      })
    })
  }

  const getBlockClassName = (day: Date, index: number) => {
    let result = ''
    if (index % 7 === 0) {
      result = 'sunday'
    }
    if (index % 7 === 6) {
      result = 'saturday'
    }
    if (format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')) {
      result += ' today'
    }
    return result
  }

  const getBlockDateFormat = (day: Date) => {
    let result = 'd'

    if (format(day, 'd') === '1') {
      result = 'M월 d일'
    }
    return result
  }
  useEffect(() => {
    setDayList(getCalendar(currentDate))
  }, [currentDate])

  return (
    <S.Container>
      <S.WeekWrapper
        style={{
          height: 'fit-content'
        }}
      >
        <S.CalendarHeader className="sunday">일</S.CalendarHeader>
        <S.CalendarHeader>월</S.CalendarHeader>
        <S.CalendarHeader>화</S.CalendarHeader>
        <S.CalendarHeader>수</S.CalendarHeader>
        <S.CalendarHeader>목</S.CalendarHeader>
        <S.CalendarHeader>금</S.CalendarHeader>
        <S.CalendarHeader className="saturday">토</S.CalendarHeader>
      </S.WeekWrapper>
      {dayList.map((week) => {
        return (
          <S.WeekWrapper>
            {week.map((day, dayIndex) => {
              const newClassName = getBlockClassName(day, dayIndex)
              const dateFormat = getBlockDateFormat(day)
              return (
                <S.DayBlock key={day.toString()} className={newClassName}>
                  <div className="block-label">{format(day, dateFormat)}</div>
                </S.DayBlock>
              )
            })}
          </S.WeekWrapper>
        )
      })}
    </S.Container>
  )
}

export default Calendar
