import { Breadcrumb, Col, Row, Spin, Table } from 'antd';
import React, { FC } from 'react';

type Props = {

}

const columns = [
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
  const isLoading = false;
  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              Products
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {isLoading ? <Spin/> : (
            <Table 

            />
          )}
        </Col>
      </Row>
    </>
  )
}

export default ProductList