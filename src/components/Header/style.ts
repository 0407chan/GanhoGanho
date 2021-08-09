import Button from 'antd/lib/button'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
`
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  font-size: 24px;
  font-weight: bold;
  color: #f1f1f1;
  padding: 20px;
  height: 100%;
  &:hover {
    background-color: #666871;
  }
`
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #eeeeee;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    background-color: #666871;
  }
`

export const CalendarButton = styled(Button)``

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 300px;
  height: 100%;
`

export const ConfirmButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
`
