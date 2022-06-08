import { PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Input, Row, Spin, Table } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Creators as ProductCreators } from '../../services/redux/product/actions'
import { useAppDispatch, useAppSelector } from '../../store';

type Props = {

}

type ColumnProps = {
  onView: (product: IProduct) => void,
  onEdit: (product: IProduct) => void,
}

const columns = (props: ColumnProps) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    key: 'barcode'
  },
  {
    title: 'Product Category',
    dataIndex: 'product_category',
    key: 'product_category'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (text: string, row: IProduct) => {
      const defaultSku = row.defaultSku
      const productSku = (row?.productSkus.filter(psku => psku.sku.id === row.defaultSku.id) || [])[0]
      return `${productSku.quantity} ${defaultSku?.name}`
    }
  },
]

const ProductList: FC<Props> = (props: Props) => {
  //local states
  const [filter, setFilter] = useState()

  //redux state
  const dispatch = useAppDispatch()
  const productState: IProductState = useAppSelector(state => state.product)
  const { isLoading, products } = productState

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(ProductCreators.getProducts({
      filter
    }))
  }, [])

  return (
    <>
      <Row>
        <Col span={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              Products
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={18} style={{textAlign: 'right'}}>
          <Button type='default' onClick={() => navigate('/inventory/products/add')}>
            <PlusOutlined/>
            Add New Product
          </Button>
        </Col>
      </Row>
      <Card style={{marginTop: 10}}>
        <Row style={{marginBottom: 10}}>
          <Col span={24}>
            <Input type='search' className='search-bar' />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table 
              columns={columns({
                onView: (row: IProduct) => {

                },
                onEdit: (row: IProduct) => {

                }
              })}
              dataSource={products}
              loading={isLoading}
              size='small'
              bordered
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ProductList