import { ModalProps } from 'antd/lib'
import React from 'react'
import * as S from './style'

const GHModal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <S.Modal
      transitionName=""
      maskTransitionName=""
      cancelText="취소"
      centered
      {...props}
    >
      {children}
    </S.Modal>
  )
}

export default GHModal
