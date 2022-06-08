import { Button, Form, FormInstance, Input } from 'antd';
import React, { FC } from 'react';

type Props = {
  initialValues: {name: string, description: string}
  onFinish: (values: {name: string, description: string}) => void,
  submitBtnText: string,
  form: FormInstance
  loading: boolean
}

const ProductCategoryForm: FC<Props> = (props: Props) => {

  return (
    <Form
      initialValues={props.initialValues}
      onFinish={props.onFinish}
      layout='vertical'
      requiredMark={false}
      form={props.form}
    >
      <Form.Item label='Name' name='name'>
        <Input />
      </Form.Item>
      <Form.Item label='Description' name='description'>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary' loading={props.loading}>
          {props.submitBtnText}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductCategoryForm