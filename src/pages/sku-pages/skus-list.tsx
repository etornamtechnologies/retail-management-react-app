import { PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Row } from 'antd';
import React, { FC } from 'react';

const SkusList: FC = () => {

  return (
    <Row>
      <Col span={24}>
        <Row style={{marginBottom: 10}}>
          <Col span={6}>
            <Breadcrumb>
              <Breadcrumb.Item>
                Units of Measurement
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={18} style={{textAlign: 'right'}}>
            <Button type='default' onClick={() => {}}>
              <PlusOutlined/>
              Add New Unit of Measurement
            </Button>
          </Col>
        </Row>
        <Card>

        </Card>
      </Col>
    </Row>
  )
}

export default SkusList