import { Button, Form, Input, Select } from 'antd'
import React, { FC } from 'react'

export type ProductInitialValuesProps = {
  name: string
  barcode?: string
  description: string
  product_category_id: number | undefined
  product_sku_id: number | undefined
}

type Props = {
  initialValues: ProductInitialValuesProps
  onFinish: (values: ProductInitialValuesProps) => void
  productCategories: IProductCategory[]
  skus: ISku[]
  submitBtnText: string
  productCategoriesLoading: boolean
  skusLoading: boolean
}

const ProductForm : FC<Props> = (props: Props) => {

  return (
    <Form
      initialValues={props.initialValues}
      onFinish={props.onFinish}
      requiredMark={false}
      layout='vertical'
    >
      <Form.Item name='product_category_id' label='Product Category'>
        <Select loading={props.productCategoriesLoading}>
          {props.productCategories.map(item => (
            <Select.Option value={item.id} key={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name='sku_id' label='Basic Unit of Measurement'>
        <Select loading={props.skusLoading}>
          {props.skus.map(item => (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>))}
        </Select>
      </Form.Item>
      <Form.Item name='name' label='Name'>
        <Input />
      </Form.Item>
      <Form.Item name='barcode' label='Barcode'>
        <Input />
      </Form.Item>
      <Form.Item name='description' label='Description'>
        <Input.TextArea rows={4} placeholder='Product Description....' />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          {props.submitBtnText}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm