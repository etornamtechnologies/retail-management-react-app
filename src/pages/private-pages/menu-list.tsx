import { AppstoreOutlined, BankOutlined, DashboardOutlined, FunnelPlotOutlined, GroupOutlined, HomeOutlined, PieChartOutlined, SettingOutlined, ShopOutlined, ShoppingOutlined, UserSwitchOutlined, WalletOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number]


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const items: MenuProps['items'] = [
  getItem(<NavLink to='/'>Home</NavLink>, '/', <HomeOutlined/>),
  getItem(<NavLink to='/dashboard'>Dashboard</NavLink>, 'dashboard', <DashboardOutlined/>),
  getItem('Inventory', 'inventory', <AppstoreOutlined/>, [
    getItem(<NavLink to='/inventory/products'>Products</NavLink>, 'inventory/products', <ShopOutlined/>),
    getItem(<NavLink to='/inventory/product-categories'>Categories</NavLink>, 'inventory/product-categories', <GroupOutlined/>),
    getItem(<NavLink to='/inventory/uom'>Unit of Measurement</NavLink>, 'inventory/unit_of_measurement', <FunnelPlotOutlined/>)
  ]),
  getItem('Reports', 'reports', <PieChartOutlined/>, [
    getItem(<NavLink to='/reports/sales'>Sales Report</NavLink>, '/reports/sales', <ShoppingOutlined/>),
    getItem(<NavLink to='/reports/purchase'>Purchase Report</NavLink>, '/reports/purchases', <BankOutlined/>),
    getItem(<NavLink to='/reports/financial'>Financial Report</NavLink>, '/reports/financial', <WalletOutlined/>)
  ]),
  getItem(<NavLink to='/users'>User Management</NavLink>, '/users', <UserSwitchOutlined/>),
  getItem(<NavLink to='/settings'>System Settings</NavLink>, '/settings', <SettingOutlined/>)
]