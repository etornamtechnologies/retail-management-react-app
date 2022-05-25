import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import AuthMiddleware from '../../middlewares/auth-middleware'
import {UserRoles} from '../../utils/data'

type Props = {

}

const DashboardPage: FC<Props> = (props: Props) => {

  return (
    <>
      <AuthMiddleware roles={[UserRoles.SUPERVISOR]}>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </AuthMiddleware>
      
      
    </>
  )
} 

export default DashboardPage