import GHModal from '@/components/common/GHModal'
import Button from 'antd/lib/button'
import React, { useState } from 'react'
import * as S from './style'

type ScheduleWrapperProps = never

const ScheduleWrapper: React.FC = () => {
  const [openScheduleModal, setOpenScheduleModal] = useState<boolean>(false)

  const onOpenModal = () => {
    setOpenScheduleModal(true)
  }
  const onCloseModal = () => {
    setOpenScheduleModal(false)
  }
  const onConfirmModal = () => {
    console.log('수고했다')
  }
  return (
    <S.Container>
      <S.Horizontal>
        <S.FormLabel>근무표</S.FormLabel>
        <Button size="small" type="primary" onClick={onOpenModal}>
          추가
        </Button>
      </S.Horizontal>
      <S.UserBlockWrapper>
        <div>나오데</div>
        <div>오이데</div>
      </S.UserBlockWrapper>
      <GHModal
        transitionName=""
        maskTransitionName=""
        centered
        visible={openScheduleModal}
        title="스케쥴 만들기"
        onCancel={onCloseModal}
        onOk={onConfirmModal}
        okText="추가"
        cancelText="취소"
      >
        <div>블럭을 선택해 나오면 안되는 근무일을 만들어주세요</div>
        <S.Horizontal
          style={{
            justifyContent: 'center'
          }}
        >
          <S.DayBlock>데이</S.DayBlock>
          <S.EveningBlock>이브닝</S.EveningBlock>
          <S.NightBlock>나이트</S.NightBlock>
          <S.OffBlock>오프</S.OffBlock>
        </S.Horizontal>
      </GHModal>
    </S.Container>
  )
}

export default ScheduleWrapper
