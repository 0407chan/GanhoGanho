import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: #b6b6b66c;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  transition: filter 0.2s ease;
  overflow-x: hidden;
  cursor: pointer;
  &:hover {
    filter: brightness(1.6);
  }

  &.current-user {
    background-color: #e9e9e9ca;
    filter: unset;
  }
`

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const OffDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100px;
`
export const OffDate = styled.div`
  display: flex;
  background-color: blue;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  margin: 2px;
`
