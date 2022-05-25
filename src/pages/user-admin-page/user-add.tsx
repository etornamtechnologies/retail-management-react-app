import { Row, Col, Breadcrumb, Card, Form, Input, Select, Button } from 'antd';
import React, { FC, useEffect } from 'react';
import { UserRoles } from '../../utils/data';
import { Creators as UserCreators } from '../../services/redux/user/actions';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';

type Props = {

}

const AddUserPage: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const userState: IUserState = useAppSelector(state => state.user);
  const navigate = useNavigate()
  const { isSubmitting, isSuccess } = userState;

  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(UserCreators.resetUser())
  }, [])

  useEffect(() => {
    if(!isSubmitting && isSuccess) {
      form.setFieldsValue({name: '', username:'', email: '', phone: '', role: UserRoles.SALES})
    }
  }, [isSubmitting, isSuccess])

  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => {
              console.log('breadcrumb')
              navigate('/users')
            }}>
              Users
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Add User
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card>
            <Form
              form={form}
              layout='vertical'
              initialValues={{
                name: '',
                username: '',
                phone: '',
                email: '',
                role: UserRoles.SALES
              }}
              requiredMark={false}
              onFinish={(values) => {
                const payload = {
                  name: values.name,
                  username: values.username,
                  phone: values.phone,
                  email: values.email,
                  role: values.role,
                  enabled: false
                }
                dispatch(UserCreators.createUser(payload))
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
                  Register New User
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AddUserPage;