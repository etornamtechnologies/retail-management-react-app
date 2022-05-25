import { Breadcrumb, Col, Row, Card, Input, Table } from 'antd';
import React from 'react';

const salesColumns =  [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
    render: (text: any) => text + 1
  },
  {
    title: 'Product',
    dataIndex: 'product_name',
    key: 'name',
  },
  {
    title: 'Uom',
    dataIndex: 'sku',
    key: 'uom',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unit_selling_price',
    key: 'unit_selling_price',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
]


const HomePage: React.FC = () => {

  const entries: ICartSaleEntry[] = [
    {
      index: 0,
      product_id: 1,
      product_name: 'Coca cola zero sugar',
      unit_selling_price: 50,
      sku: 'piece',
      qty: 10,
      total: 500
    }
  ];

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Create Sales</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Row style={{marginBottom: 30}}>
          <Col span={24}>
            <Input 
              type='search' 
              placeholder='Search' 
              style={{width: '100%', padding: 6, height: 50, borderRadius: 5}} 
            
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table 
              columns={salesColumns}
              dataSource={entries}
              rowKey='index'
              size='small'
              bordered
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default HomePage;