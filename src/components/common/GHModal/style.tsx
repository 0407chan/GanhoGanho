import { Modal as OriginalModal } from 'antd/lib'
import styled from 'styled-components'

const BACKGROUND_COLOR = '#3c3c3c'
const BORDER_COLOR = '#5c5c5c'

export const Modal = styled(OriginalModal)`
  .ant-modal-content {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.7);
    background-color: ${BACKGROUND_COLOR};
    border-radius: 10px;
    .ant-modal-close {
      border-top-right-radius: 10px;

      &:hover {
        background-color: #4f4f4f;
      }
      .ant-modal-close-x {
        height: 46px;
        width: 46px;
        line-height: 46px;
      }
    }
    .ant-modal-header {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${BACKGROUND_COLOR};
      padding: 12px 16px;
      border-bottom: 1px solid ${BORDER_COLOR};
      .ant-modal-title {
        font-weight: bold;
        color: #eeeeee;
      }
    }
    .ant-modal-body {
      color: #eeeeee;
      padding: 16px;
    }
    .ant-modal-footer {
      border-top: 1px solid ${BORDER_COLOR};
      text-align: center;
    }
  }
`
