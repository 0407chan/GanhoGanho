import { User } from '@/containers/MainContainer/MainContainer'
import moment from 'moment'
import React from 'react'
import * as S from './style'

type EditorProps = {
  currentUser: User | undefined
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
}
const Editor: React.FC<EditorProps> = ({
  currentUser,
  setUserList,
  setCurrentUser
}) => {
  if (!currentUser) return null

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newUser = {
      ...currentUser,
      name: event.target.value
    }

    setCurrentUser(newUser)
    setUserList((prev) => {
      return prev.map((user) => {
        if (user.name === currentUser.name) {
          return newUser
        }
        return user
      })
    })
  }

  const onDateChange = (value: moment.Moment | null, index: number) => {
    const newOffDate = currentUser.offDate.map((date, dateIndex) => {
      if (dateIndex === index) {
        return value
      }
      return date
    })
    const newUser: User = {
      ...currentUser,
      offDate: newOffDate
    }

    setCurrentUser(newUser)
    setUserList((prev) => {
      return prev.map((user) => {
        if (user.name === currentUser.name) {
          return newUser
        }
        return user
      })
    })
  }

  const onAddDate = () => {
    const newUser: User = {
      ...currentUser,
      offDate: [...currentUser.offDate, moment()]
    }

    setCurrentUser(newUser)
    setUserList((prev) => {
      return prev.map((user) => {
        if (user.name === currentUser.name) {
          return newUser
        }
        return user
      })
    })
  }
  const onRemoveDate = (index: number) => {
    const newOffDate = currentUser.offDate.filter((date, dateIndex) => {
      return dateIndex !== index
    })

    const newUser: User = {
      ...currentUser,
      offDate: newOffDate
    }

    setCurrentUser(newUser)
    setUserList((prev) => {
      return prev.map((user) => {
        if (user.name === currentUser.name) {
          return newUser
        }
        return user
      })
    })
  }
  return (
    <S.Container>
      <div>에디터 입니다</div>
      <S.FormWrapper>
        <S.FormLabel>이름</S.FormLabel>
        <S.FormInput value={currentUser?.name} onChange={onNameChange} />
      </S.FormWrapper>
      <S.FormWrapper>
        <S.Horizontal
          style={{
            marginBottom: 8
          }}
        >
          <S.FormLabel>날짜</S.FormLabel>
          <S.FormButton onClick={onAddDate} size="small">
            추가
          </S.FormButton>
        </S.Horizontal>
        {currentUser?.offDate.map((date, index) => {
          return (
            <S.Horizontal>
              <S.FormDatePicker
                key={`${date?.format('yyyy-MM-DD')}-${index}`}
                value={date}
                onChange={(value) => {
                  return onDateChange(value, index)
                }}
              />
              <S.DateRemoveButton
                onClick={() => {
                  onRemoveDate(index)
                }}
                type="text"
                icon={<S.MinusCircleOutlined />}
              />
            </S.Horizontal>
          )
        })}
      </S.FormWrapper>
    </S.Container>
  )
}

export default Editor
