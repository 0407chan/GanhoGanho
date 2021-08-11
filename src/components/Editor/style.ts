import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #585858b8;

  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(1.05);
  }
`

export const UserBlock = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #f1f1f1;
`
