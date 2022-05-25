import { Breadcrumb, Col, Form, Input, Row, Spin, Card, Button, Select } from 'antd';
import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { Creators as UserCreators } from '../../services/redux/user/actions'
import { UserRoles } from '../../utils/data';


type Props = {

}

const EditUserPage: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const userState: IUserState = useAppSelector(state => state.user)
  const { isLoading, user, isSubmitting } = userState
  const { userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(UserCreators.resetUser())
    dispatch(UserCreators.getUser(userId));
  }, [userId])
  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/users')}>
              Users
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Edit User
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card>
            {isLoading ? <Spin/> : (
              <Form
                layout='vertical'
                initialValues={{
                  name: user?.name,
                  username: user?.username,
                  email: user?.email,
                  phone: user?.phone,
                  role: user?.role
                }}
                requiredMark={false}
                onFinish={values => {
                  const payload = {
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    role: values.role
                  }
                  dispatch(UserCreators.updateUser(userId, payload))
                }}
              >
                <Form.Item name='name' label='Name' rules={[{required: true, message: 'Name required!'}]}>
                  <Input autoComplete='off' />
                </Form.Item>
                <Form.Item name='username' label='Username' rules={[{required: true, message: 'Username required!'}]}>
                  <Input />
                </Form.Item>
                <Form.Item name='phone' label='Phone Number' rules={[{required: true, message: 'Phone required!'}]}>
                  <Input />
                </Form.Item>
                <Form.Item name='email' label='Email' rules={[{required: true, message: 'Email required!'}]}>
                  <Input />
                </Form.Item>
                <Form.Item name='role' label='User Role' rules={[{required: true, message: 'Role required!'}]}>
                  <Select>
                    {Object.keys(UserRoles).map(role => (
                      <Select.Option key={role} value={role}>{role}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button loading={isSubmitting} htmlType='submit' type='primary'>
                    Update User
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EditUserPage