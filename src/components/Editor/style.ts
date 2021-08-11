import { MinusCircleOutlined as originalMinusCircleOutlined } from '@ant-design/icons/lib/icons'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import styled from 'styled-components'
import DatePicker from '../common/date-picker/DatePicker'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #585858b8;
  overflow-y: overlay;

  transition: filter 0.2s ease;
`

export const UserBlock = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #f1f1f1;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`
export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const FormLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #eeeeee;
  font-weight: bold;
  padding: 0px 5px;
`
export const FormButton = styled(Button)`
  border-radius: 5px;
`
export const FormInput = styled(Input)`
  width: 100%;
  border-radius: 5px;
`
export const FormDatePicker = styled(DatePicker)`
  width: 100%;
  border-radius: 5px;
  margin: 8px 0px;
`
export const MinusCircleOutlined = styled(originalMinusCircleOutlined)`
  color: #ff5757ee;
`

export const DateRemoveButton = styled(Button)`
  margin-left: 6px;
`
