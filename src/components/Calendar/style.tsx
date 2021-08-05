import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const CalendarHeader = styled.div`
  display: grid;
  height: 100%;
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

export const CalendarBlock = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: 1px solid #707485;

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
  &:hover {
    background-color: #626574;
  }
`
