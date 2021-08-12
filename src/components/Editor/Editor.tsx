import { User } from '@/containers/MainContainer/MainContainer'
import moment, { Moment } from 'moment'
import React from 'react'
import * as S from './style'

type EditorProps = {
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
}

const MAX_OFF_NUM = 12
const Editor: React.FC<EditorProps> = ({
  currentUser,
  setCurrentUser,
  userList,
  setUserList
}) => {
  if (!currentUser) return null

  const isInOffDate = (currentDate: Moment) => {
    const existDate = currentUser.offDate.find((date) => {
      return (
        date && date.format('yyyy-MM-DD') === currentDate.format('yyyy-MM-DD')
      )
    })
    if (existDate) {
      return true
    }
    return false
  }
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
      offDate: [...currentUser.offDate, null]
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
      <S.FormWrapper>
        <S.Horizontal
          style={{
            marginBottom: 8
          }}
        >
          <S.FormLabel>이름</S.FormLabel>
        </S.Horizontal>
        <S.FormInput value={currentUser.name} onChange={onNameChange} />
      </S.FormWrapper>
      <S.FormWrapper>
        <S.Horizontal
          style={{
            marginBottom: 8
          }}
        >
          <S.FormLabel>날짜</S.FormLabel>
          <S.FormButton
            disabled={currentUser.offDate.length >= MAX_OFF_NUM}
            onClick={onAddDate}
            size="small"
            type="primary"
          >
            추가
          </S.FormButton>
        </S.Horizontal>
        {currentUser.offDate.map((date, index) => {
          return (
            <S.Horizontal>
              <S.FormDatePicker
                key={`${date?.format('yyyy-MM-DD')}-${index}`}
                value={date}
                disabledDate={(current) => {
                  return (
                    current < moment().startOf('month') ||
                    current > moment().endOf('month') ||
                    isInOffDate(current)
                  )
                }}
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
