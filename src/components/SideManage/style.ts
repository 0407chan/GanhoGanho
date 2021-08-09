import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
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

export const UserBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
