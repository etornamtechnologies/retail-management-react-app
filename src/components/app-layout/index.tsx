import '../../styles/layout.less'
import Copyright from '../copyright';
import { items } from '../../pages/private-pages/menu-list'
import UserProfileButton from './user-profile-button';
import { Layout, Row, Col, Menu } from 'antd';
import React, {FC, useState} from 'react'

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode
}

const AppLayout: FC<Props> = (props: Props) => {
  return (
    <Layout className='app-layout' style={{width: '100%', padding: 0, margin: 0}}>
      <Header>
        <Row>
          <Col span={2}>
            
          </Col>
          <Col span={18}>
            <Menu
              mode='horizontal'
              items={items}
              defaultSelectedKeys={['/']}
            />
          </Col>
          <Col span={4}>
            <UserProfileButton username='etoretornam' name='etornam anyidoho' />
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '50px 50px 50px 50px' }}>
        {props.children}
      </Content>
      <Footer>
        <Copyright dateYear={new Date().getFullYear()} />
      </Footer>
    </Layout>
  )
}

export default AppLayout