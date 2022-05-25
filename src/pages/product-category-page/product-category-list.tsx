import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Modal, Row, Table } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Creators as ProductCategoryCreators } from '../../services/redux/product-category/actions'
import ProductCategoryForm from './product-category-form';

type Props = {

}

const columns = (props: {onEdit: (row: IProductCategory)=> void, onDelete: (row: IProductCategory)=> void}) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Created On',
    dataIndex: 'created_at',
    key: 'created_at'
  },
  {
    title: 'Number of Products',
    dataIndex: 'product_count',
    key: 'product_count'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (text: any, row: IProductCategory) => (<div style={{display: 'flex', justifyContent: 'center'}}>
      <EditOutlined onClick={() => props.onEdit(row)} />
      <DeleteOutlined onClick={() => props.onDelete(row)} style={{marginLeft: 10}}/>
    </div>)
  },
]

const ProductCategoryList: FC<Props> = (props: Props) => {
  const [addForm] = Form.useForm()
  //local states
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  //global states
  const dispatch = useAppDispatch()
  const productCategoryState: IProductCategoryState = useAppSelector(state => state.product_category)
  const { isLoading, isSubmitting, productCategories, isSuccess, isUpdateSuccess } = productCategoryState

  //Effects
  useEffect(() => {
    dispatch(ProductCategoryCreators.getProductCategories({}))
  }, [])

  useEffect(() => {
    if(!isSubmitting && isSuccess) {
      addForm.resetFields()
    }
  }, [isSubmitting, isSuccess])

  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              Product Categories
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row style={{paddingTop: 5, paddingBottom: 5}}>
        <Col span={24} style={{textAlign: 'right'}}>
          <Button type='default' onClick={() => setAddModal(true)}>
            <PlusOutlined/>
            Add New Product Category
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table 
            columns={columns({
              onEdit: (row: IProductCategory) => {
                
              },
              onDelete: (row: IProductCategory) => {

              }
            })}
            dataSource={productCategories}
            size='small'
            bordered
            loading={isLoading}
            rowKey='id'
          />
        </Col>
      </Row>
      <Modal
        visible={addModal}
        footer={false}
        onCancel={() => {
          setAddModal(false)
        }}
      >
        <ProductCategoryForm
          initialValues={{name: ''}}
          onFinish={(values) => {
            const payload = {
              name: values.name
            }
            dispatch(ProductCategoryCreators.createProductCategory(payload))
          }}
          submitBtnText='Add New Product Category'
          form={addForm}
        />
      </Modal>
    </>
  )
}

export default ProductCategoryList