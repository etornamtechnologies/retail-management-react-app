import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../../components/app-layout/index';
import DashboardPage from '../dashboard';
import ForbiddenPage from '../forbidden-page';
import HomePage from '../home-page';
import ProductCategoryList from '../product-category-page/product-category-list';
import EditUserPage from '../user-admin-page/edit-user-page';
import UserList from '../user-admin-page/list-user';
import AddUserPage from '../user-admin-page/user-add';

const ProductListPage = React.lazy(() => import('../products-page/product-list'))
const AddNewProductPage = React.lazy(() => import('../products-page/add-new-product'))
const SkusList = React.lazy(() => import('../sku-pages/skus-list'))

const PrivatePages: React.FC = () => {

  return (
    <>
      <AppLayout>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='dashboard' element={<DashboardPage/>} />
          <Route path='users' element={<UserList/>} />
          <Route path='users/add' element={<AddUserPage/>} />
          <Route path='users/:userId/edit' element={<EditUserPage/>} />
          <Route path='inventory/product-categories' element={<ProductCategoryList/>} />
          <Route path='/forbidden' element={<ForbiddenPage/>} />

          <Route path='inventory/products' element={<ProductListPage/>} />
          <Route path='inventory/products/add' element={<AddNewProductPage/>} />

          <Route path='/inventory/skus' element={<SkusList/>} />
        </Routes>
      </AppLayout>
    </>
  )
}

export default PrivatePages;