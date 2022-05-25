import { Col, Row } from 'antd';
import React, { FC } from 'react';
type Props = {
  total: number
  subTotal: number
  tax: number
  paid: number
  balance: number
}

const CartSummary: FC<Props> = (props: Props) => {

  return (
    <>
      <Row>
        <Col md={4}>
          
        </Col>
      </Row>
    </>
  )
}

export default CartSummary