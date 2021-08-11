import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/lib/icons/RightOutlined'
import format from 'date-fns/format'
import React from 'react'
import * as S from './style'

type HeaderProps = {
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
  onToday: () => void
}
const Header: React.FC<HeaderProps> = ({
  currentDate,
  onNextMonth,
  onPrevMonth,
  onToday
}) => {
  return (
    <S.Container>
      <S.HeaderLeft>간호간호</S.HeaderLeft>
      <S.HeaderCenter>
        <div>
          <S.CalendarButton icon={<LeftOutlined />} onClick={onPrevMonth} />
          {format(currentDate, 'yyyy년 M월')}
          <S.CalendarButton icon={<RightOutlined />} onClick={onNextMonth} />
        </div>
        <S.CalendarButton onClick={onToday}>오늘</S.CalendarButton>
      </S.HeaderCenter>
      <S.HeaderLeft>
        <S.ConfirmButton type="primary" size="large" disabled>
          근무표 생성하기!
        </S.ConfirmButton>
      </S.HeaderLeft>
    </S.Container>
  )
}

export default Header
