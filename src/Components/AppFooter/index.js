import { Typography } from 'antd'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
    <Typography.Link href='tel:+9203009999999'>+9203009999999</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>Privacy Policy</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>Term and Condition</Typography.Link>
    </div>
  )
}

export default AppFooter