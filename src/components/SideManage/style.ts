import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: fit-content;
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
