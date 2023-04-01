import { BellFilled, MailFilled } from '@ant-design/icons'
import { Badge, Image, Space, Typography } from 'antd'
import React from 'react'

function AppHeader() {
  return (
    <div className='AppHeader'>
    
    <Image width={40} src='https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149192863.jpg?w=740&t=st=1680156234~exp=1680156834~hmac=7a14ea062bafc32db7b04c7c37e2cb47854111118f6106a1d01d884769b463e8'></Image>
    <Typography.Title>Shahbaz's Dashboard</Typography.Title>
    <Space>
    <Badge count={20} dot>
    <MailFilled style={{fontSize:30}}/>
    </Badge>
    <Badge count={100}>
    <BellFilled style={{fontSize:30}}/>
    </Badge>
    </Space>
    </div>
  )
}

export default AppHeader