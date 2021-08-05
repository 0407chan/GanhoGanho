import Calendar from '@/components/Calendar'
import { format } from 'date-fns'
import React from 'react'
import * as S from './style'
const MainContainer: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderLeft>간호간호</S.HeaderLeft>
        <S.HeaderCenter>
          {format(new Date(), 'M')}
          <span>월 근무표</span>
        </S.HeaderCenter>
        <S.HeaderLeft />
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.ContentLeft>간호간호</S.ContentLeft>
        <S.ContentCenter>
          <Calendar />
        </S.ContentCenter>
        <S.ContentLeft>오른쪽</S.ContentLeft>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default MainContainer
