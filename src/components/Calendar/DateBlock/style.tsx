import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #707485;
  background-color: #53545c;
  &.sunday {
    color: #ff4e4e;
  }
  &.saturday {
    color: #7091ff;
  }

  &:hover {
    background-color: #5b5c65;
  }
`

export const DateLabel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: fit-content;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;

  &.today {
    background-color: #759475;
  }
`

export const BlockWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
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
