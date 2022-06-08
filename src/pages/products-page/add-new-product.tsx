import { Breadcrumb, Card, Col, Form, Row } from 'antd';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './product-form';
import { Creators as ProductCreators } from '../../services/redux/product/actions';
import { Creators as ProductCategoryCreators } from '../../services/redux/product-category/actions'
import { Creators as SkuCreators } from '../../services/redux/sku/actions'
import { useAppDispatch, useAppSelector } from '../../store';

type Props = {

}

const AddNewProduct: FC<Props> = (props: Props) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const productState = useAppSelector(state => state.product)
  const productCategoryState = useAppSelector(state => state.product_category)
  const skuState = useAppSelector(state => state.sku)

  //product state
  const {isSubmitting} = productState
  const {productCategories, isLoading: isLoadingProductCategories} = productCategoryState
  const { isLoading: isLoadingSkus, skus } = skuState

  useEffect(() => {
    dispatch(ProductCategoryCreators.getProductCategories({}))
    dispatch(SkuCreators.getSkus({}))
  }, [])

  return (
    <Row className='add-new-product-page'>
      <Col span={24}>
        <Row style={{marginBottom: 10}}>
          <Col span={24}>
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => navigate('/inventory/products')}>
                Products
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Add New Product
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row> 
        <Card>
          <Row>
            <Col span={24}>
              <ProductForm
                productCategories={productCategories}
                productCategoriesLoading={isLoadingProductCategories}
                skusLoading={isLoadingSkus}
                initialValues={{
                  name: '',
                  barcode: '',
                  description: '',
                  product_category_id: undefined,
                  product_sku_id: undefined,
                }}
                skus={skus}
                submitBtnText ='Add New Product'
                onFinish={(values) => {
                  const payload = {
                    name: values.name,
                    barcode: values.name,
                    description: values.description,
                    product_category_id: values.product_category_id,
                    default_sku_id: values.product_sku_id
                  }
                  dispatch(ProductCreators.createProduc(payload))
                }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default AddNewProduct