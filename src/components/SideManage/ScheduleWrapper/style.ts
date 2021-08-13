import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #585858b8;

  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(1.05);
  }
`
export const FormLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #eeeeee;
  font-weight: bold;
  padding: 0px 5px;
`

export const UserBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const BlockBase = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  margin: 4px;
  transition: filter 0.2s ease;
  cursor: pointer;
  &.current-user {
    filter: brightness(1.1);
  }
  &.other-user {
    filter: brightness(0.8) grayscale(0.7);
  }
`

export const DayBlock = styled(BlockBase)`
  color: #c6edc3;
  background-color: #206d34;
`
export const EveningBlock = styled(BlockBase)`
  color: #e6d4c0;
  background-color: #8e542d;
`
export const NightBlock = styled(BlockBase)`
  color: #d3cfe9;
  background-color: #1a3f8f;
`
export const OffBlock = styled(BlockBase)`
  color: #e8c2e6;
  background-color: #6f0c53;
`
