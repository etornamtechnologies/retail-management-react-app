import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Modal, Row, Table } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../store'
import { Creators as UserCreators } from '../../services/redux/user/actions'
import { history } from '../../utils/common-helper';
import { useNavigate } from 'react-router-dom';

type Props = {

}

const columns = (props: {onEdit: (user: IUser) => void, onDeactivate: (user: IUser) => void, onActivate: (user: IUser) => void}) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  },
  {
    title: 'Status',
    dataIndex: 'enabled',
    key: 'enabled',
    render: (text: string) => text ? 'Active' : 'Disabled'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (text: string, row: IUser) => (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <EditOutlined 
          style={{marginRight: 10}}
          onClick={() => props.onEdit(row)}
          
        />
        {row.enabled && (
          <DeleteOutlined color='red' 
            onClick={() => props.onDeactivate(row)}
          />
        )}
        {!row.enabled && (
          <CheckOutlined 
            style={{marginLeft: 10}} 
            onClick={() => {
              props.onActivate(row)
            }}
          />
        )}
      </div>
    ) 
  }
]

const UserList: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch()
  const userState: IUserState = useAppSelector(state => state.user) as IUserState
  const { isLoading, users, isSubmitting, isSuccess } = userState

  //const users: IUser[] = []
  const navigate = useNavigate()
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null)
  const [activateModal, setActivateModal]= useState(false)
  const [deActivateModal, setDeActivateModal]= useState(false)

  useEffect(() => {
    dispatch(UserCreators.resetUser())
    dispatch(UserCreators.getUsers({}))
  }, [])

  useEffect(()=> {
    if(!isSubmitting && isSuccess) {
      setActivateModal(false)
      setDeActivateModal(false)
      setSelectedUser(null)
    }
  }, [isSubmitting, isSuccess])

  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              Users
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row style={{marginBottom: 5}}>
        <Col span={24} style={{textAlign:'right'}}>
          <Button type='default' onClick={() => navigate('/users/add')}>Register User</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table 
            loading={isLoading}
            columns={columns({
              onEdit: (row: IUser) => {
                history.push(`/users/${row.id}/edit`)
              },
              onDeactivate: (row: IUser) => {
                setSelectedUser(row)
                setDeActivateModal(true)
              },
              onActivate: (row: IUser) => {
                setSelectedUser(row)
                setActivateModal(true)
              }
            })}
            dataSource={users}
            size='small'
            bordered
            rowKey='id'
            pagination={{
              pageSize: 20
            }}
          />
        </Col>
      </Row>
      <Modal
        visible={activateModal}
        title='Activate User'
        onCancel={() => {
          setActivateModal(false)
          setSelectedUser(null)
        }}
        onOk={() => {
          dispatch(UserCreators.updateUserStatus(selectedUser?.id, true))
        }}
        confirmLoading={isSubmitting}
        maskClosable={false}
      >
        <span>{`Are you sure you want to activate user (${selectedUser?.name})`}</span>
      </Modal>

      <Modal
        visible={deActivateModal}
        title='Deactivate User'
        onCancel={() => {
          setDeActivateModal(false)
          setSelectedUser(null)
        }}
        onOk={() => {
          dispatch(UserCreators.updateUserStatus(selectedUser?.id, false))
        }}
        confirmLoading={isSubmitting}
        maskClosable={false}
      >
        <span>{`Are you sure you want to deactivate user (${selectedUser?.name})`}</span>
      </Modal>
    </>
  )
}

export default UserList