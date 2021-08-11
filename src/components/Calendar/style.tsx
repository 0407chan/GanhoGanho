import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const CalendarHeader = styled.div`
  display: flex;
  min-height: 50px;
  max-height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  &.sunday {
    color: #ff4e4e;
  }
  &.saturday {
    color: #7091ff;
  }
`

export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

export const DayBlock = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: 1px solid #707485;
  background-color: #53545c;
  .block-label {
    font-weight: bold;
    font-size: 16px;
  }
  &.sunday {
    color: #ff4e4e;
  }
  &.saturday {
    color: #7091ff;
  }
  &.today {
    background-color: #759475;
  }
  &:hover {
    filter: brightness(1.1);
  }
`
