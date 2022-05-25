import React, { FC } from 'react';
import Copyright from '../../components/copyright';
import backgroundImage from '../../assets/images/bg3.jpg'
import { Card, Col, Row, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import LoginForm from './login-form';
import {Creators as AuthCreators} from '../../services/redux/auth/actions'
import { useAppDispatch, useAppSelector } from '../../store';

type Props = {
  
}

const LoginPage: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch()
  const authState: IAuthState = useAppSelector(state => state.auth) as IAuthState

  const handleSubmit = (values: {username: string, password: string}) => {
    //event.preventDefault();
    const payload = {
      username: values?.username?.trim(),
      password: values?.password
    }
    console.log("submit", payload)
    dispatch(AuthCreators.login(payload))
  }

  return (
    <Row style={{height: "100%", width: '100%'}}>
      <Col xs={0} sm={10} md={14}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // backgroundColor: '#f0f2f5',
        }}
      >

      </Col>
      <Col xs={24} md={10} style={{height: '100%'}}>
        <Card style={{minHeight: '100%', padding: '80px 10px 0 10px'}}>
          <Row>
            <Col style={{textAlign: 'center'}} span={24}>
              <LockOutlined style={{fontSize: 40}} />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{textAlign: 'center'}}>
              <Typography.Title level={3}>
                Sign In
              </Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <LoginForm submitting={authState.isSubmitting}  initialValues={{username: '', password: ''}} onSubmit={handleSubmit} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Copyright dateYear={new Date().getFullYear()} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}


export default LoginPage