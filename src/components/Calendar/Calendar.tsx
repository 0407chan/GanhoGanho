import { User } from '@/containers/MainContainer/MainContainer'
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek
} from 'date-fns'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import DateBlock from './DateBlock'
import * as S from './style'

type CanlendarProps = {
  currentDate: Date
  currentUser?: User
  userList: User[]
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
}
const YYYYMMDD = 'yyyy-MM-DD'
const Calendar: React.FC<CanlendarProps> = ({
  currentDate,
  userList,
  currentUser,
  setCurrentUser
}) => {
  const [dayList, setDayList] = useState<Date[][]>([])

  const getCurrentUsers = (currDate: Date) => {
    const result: User[] = []
    const userSet = new Set<User>()
    userList.forEach((user) => {
      user.offDate.forEach((date) => {
        if (date?.format(YYYYMMDD) === moment(currDate).format(YYYYMMDD)) {
          userSet.add(user)
        }
      })
    })
    userSet.forEach((value) => {
      result.push(value)
    })
    return result
  }
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
              const currentUserList = getCurrentUsers(day)
              return (
                <DateBlock
                  key={day.toString()}
                  currentDate={day}
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                  userList={currentUserList}
                  className={newClassName}
                />
              )
            })}
          </S.WeekWrapper>
        )
      })}
    </S.Container>
  )
}

export default Calendar
