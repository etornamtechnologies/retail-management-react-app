import { Button, Form, FormInstance, Input } from 'antd';
import React, { FC } from 'react';

type Props = {
  initialValues: {name: string}
  onFinish: (values: {name: string}) => void,
  submitBtnText: string,
  form: FormInstance
}

const ProductCategoryForm: FC<Props> = (props: Props) => {

  return (
    <Form
      initialValues={props.initialValues}
      onFinish={props.onFinish}
      layout='vertical'
      requiredMark={false}
    >
      <Form.Item label='Name' name='name'>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          {props.submitBtnText}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductCategoryForm