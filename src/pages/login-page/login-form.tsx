import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Row, Col, Form, Input, Button } from 'antd'
import React, { FC } from 'react'

type Props = {
  onSubmit: (values: {username: string, password: string}) => void
  initialValues: {username: string, password: string}
  submitting: boolean
}

const LoginForm: FC<Props> = (props: Props) => {
  
  return (
    <Row>
      <Col span={24}>
        <Form
          onFinish={props.onSubmit}
          initialValues={props.initialValues}
          layout='vertical'
          requiredMark={false}
        >
          <Form.Item name='username' label='Username' rules={[{required: true, message: 'Username required!'}]}>
            <Input type='text' prefix={<UserOutlined/>} />
          </Form.Item>
          <Form.Item name='password' label='Password' rules={[{required: true, message: 'Password required'}]}>
            <Input type='password' prefix={<LockOutlined/>} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' block htmlType='submit' loading={props.submitting}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default LoginForm