import locale from 'antd/es/locale/ko_KR'
import ConfigProvider from 'antd/lib/config-provider'
import DatePicker, { RangePickerProps } from 'antd/lib/date-picker'
import moment from 'moment'
import 'moment/locale/ko'
import React from 'react'

moment.locale('ko', {
  week: {
    dow: 0
  }
})

const RangePicker: React.FC<RangePickerProps> = ({ ...props }) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker.RangePicker
        {...props}
        getPopupContainer={
          props.getPopupContainer
            ? props.getPopupContainer
            : document.querySelector('.page-container')
            ? () => document.querySelector('.page-container')!
            : undefined
        }
      />
    </ConfigProvider>
  )
}

export default RangePicker
