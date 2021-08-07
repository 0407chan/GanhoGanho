import Button from 'antd/lib/button'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #53545c;
  align-items: center;
`

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100% - 400px) 200px;
  width: 100%;
  height: 64px;
`
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #666871;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100% - 400px) 200px;
  width: 100%;
  height: 100%;
`
export const ContentLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #666871;
  }
`
export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #666871;
  }
`

export const Label = styled.div`
  color: #eeeeee;
`
