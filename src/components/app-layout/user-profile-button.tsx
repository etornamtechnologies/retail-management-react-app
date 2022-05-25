import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row } from 'antd';
import React, {FC} from 'react';
import { history } from '../../utils/common-helper';

type Props = {
  name: string
  username: string
}



const UserProfileButton: FC<Props> = (props: Props) => {

  const menu = (
    <Menu
      style={{width: '100%'}}
      onClick={(e) => {
        console.log('menu item clicked', e)
        const {key} = e
        if (key === 'logout') {
          history.push('/sign-in')
        } else if(key === 'profile') {
          history.push('/profile')
        }
      }}
      items={[
        {
          label: 'Profile',
          key: 'profile',
          icon: <UserOutlined />,
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <LogoutOutlined/>
        },
      ]}
    />
  );
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Dropdown.Button
            overlay={menu}
            placement='bottomLeft'
            icon={<UserOutlined />}
          >
            {props.name}
          </Dropdown.Button>
        </Col>
      </Row>
    </>
  )
}

export default UserProfileButton