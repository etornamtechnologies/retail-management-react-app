import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Modal, Row, Table } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Creators as ProductCategoryCreators } from '../../services/redux/product-category/actions'
import ProductCategoryForm from './product-category-form';
import { prettifyDate } from '../../utils/common-helper';

type Props = {

}

const columns = (props: {onEdit: (row: IProductCategory)=> void, onDelete: (row: IProductCategory)=> void}) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Created On',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text: string) => prettifyDate(text)
  },
  {
    title: 'Number of Products',
    dataIndex: 'products_count',
    key: 'products_count',
    render: (text: number) => text ? text : 0
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
  const [editForm] = Form.useForm()
  //local states
  const [addModal, setAddModal] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<IProductCategory | null>(null);

  //global states
  const dispatch = useAppDispatch()
  const productCategoryState: IProductCategoryState = useAppSelector(state => state.product_category)
  const { isLoading, isSubmitting, productCategories, isSuccess, isUpdateSuccess } = productCategoryState

  //Effects
  useEffect(() => {
    dispatch(ProductCategoryCreators.getProductCategories({}))
  }, [])

  useEffect(() => {
    console.log('isSubmitting', isSubmitting)
    console.log('isSuccess', isSuccess)
    if(!isSubmitting && isSuccess) {
      console.log('lets hide form')
      //addForm.setFieldsValue({name: '', description: ''})
      setSelectedCategory(null)
      setAddModal(false)
      setDeleteModalVisible(false)
      setEditModalVisible(false)
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
                setSelectedCategory(row)
                editForm.setFieldsValue({name: row?.name, description: row?.description})
                setEditModalVisible(true)
              },
              onDelete: (row: IProductCategory) => {
                setSelectedCategory(row)
                setDeleteModalVisible(true)
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
          initialValues={{name: '', description: ''}}
          onFinish={(values) => {
            const payload: IProductCategory = {
              name: values.name,
              description: values.description
            }
            dispatch(ProductCategoryCreators.createProductCategory(payload))
          }}
          submitBtnText='Add New Product Category'
          form={addForm}
          loading={isSubmitting}
        />
      </Modal>
      <Modal
        visible={editModalVisible}
        footer={false}
        onCancel={() => {
          setEditModalVisible(false)
          setSelectedCategory(null)
        }}
      >
        <ProductCategoryForm
          initialValues={{name: selectedCategory?.name as string, description: selectedCategory?.description as string}}
          onFinish={(values) => {
            const payload: IProductCategory = {
              name: values.name,
              description: values.description
            }
            dispatch(ProductCategoryCreators.updateProductCategory(selectedCategory?.id as number, payload))
          }}
          submitBtnText='Update Product Category'
          form={editForm}
          loading={isSubmitting}
        />
      </Modal>
      <Modal
        visible={deleteModalVisible}
        onCancel={() => {
          setDeleteModalVisible(false)
          setSelectedCategory(null)
        }}
        onOk={() => {
          dispatch(ProductCategoryCreators.deleteProductCategory(selectedCategory?.id as number))
        }}
        confirmLoading={isSubmitting}
        title='Delete Product Category'
        okText='Yes delete'
        cancelText='No'
        okType='danger'
      >
        <Row>
          <Col span={24}>
            <span>{`Are you sure you want to delete ${selectedCategory?.name}?`}</span>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default ProductCategoryList