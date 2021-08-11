import locale from 'antd/es/locale/ko_KR'
import { DatePicker as DatePickerAnt } from 'antd/lib'
import ConfigProvider from 'antd/lib/config-provider'
import { DatePickerProps } from 'antd/lib/date-picker'
import moment from 'moment'
import 'moment/locale/ko'
import React from 'react'

moment.locale('ko', {
  week: {
    dow: 0
  }
})

const DatePicker: React.FC<DatePickerProps> = ({ ...props }) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePickerAnt {...props} />
    </ConfigProvider>
  )
}

export default DatePicker
