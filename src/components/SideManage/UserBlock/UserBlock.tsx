import { User } from '@/containers/MainContainer/MainContainer'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: #b6b6b66c;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  transition: filter 0.2s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(1.6);
  }

  &.current-user {
    background-color: #e9e9e9ca;
    filter: unset;
  }
`

type UserBlockProps = {
  user: User
  isCurrentUser: boolean
  onClick: () => void
}
const UserBlock: React.FC<UserBlockProps> = ({
  user,
  isCurrentUser,
  onClick
}) => {
  return (
    <Container
      className={isCurrentUser ? 'current-user' : ''}
      onClick={onClick}
    >
      {user.name}
    </Container>
  )
}

export default UserBlock
