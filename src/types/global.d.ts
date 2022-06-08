import { Interface } from "readline"

export {}

declare global {

  interface IUser extends AuditInterface {
    id: number | string
    name: string
    username: string
    email: string
    phone: string
    password?: string
    enabled: boolean
    role: Roles
  }

  interface IProductCategory extends AuditInterface {
    id?: number | string
    name: string
    description: string
    product?: Product[]
    products_count?: number
  }

  interface IProduct extends AuditInterface {
    id: number | string
    name: string
    description: string
    barcode: string
    color: string
    size: string
    productCategory: ProductCategory
    defaultSku: ISku
    productSkus: IProductSku[]
  }

  interface ISku extends AuditInterface {
    id: number
    name: string
  }

  interface IProductSku extends AuditInterface {
    product: IProduct
    sku: ISku
    selling_price: number
    cost_price: number
    quantity: number
  }

  interface IProductSku {
    product: Product
    sku: Sku
    unitPrice: number
    factor: number
  }

  interface ISku extends AuditInterface{
    id: number | string
    name: string
  }

  enum Roles {
    SALES = 'SALES',
    SUPERVISOR = 'SUPERVISOR',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
  }

  interface AuditInterface {
    createdAt?: Date
    updatedAt?: Date
  }

  interface ISaleOrderItem {
    id: number | string
    product: IProduct
    sku: ISku
    quantity: number
    unitPrice: number
  }

  interface ISaleOrder extends AuditInterface {
    id?: string | number
    reference?: string
    saleBy?: IUser
    saleOrderItems?: SaleOrderItem[]
  }

  //**********States********* */
  interface IUserState {
    user: IUser | null
    users: IUser[]
    isLoading: boolean
    error: string
    isSuccess: boolean
    isSubmitting: boolean
  }

  interface IProductCategoryState {
    productCategory: IProductCategory | null
    productCategories: IProductCategory[]
    isLoading: boolean
    error: string
    isSuccess: boolean
    isSubmitting: boolean
    isUpdateSuccess: boolean
  }

  interface IProductState {
    product: IProduct | null
    products: IProduct[]
    isLoading: boolean
    error: string
    isSuccess: boolean
    isSubmitting: boolean
  }

  interface ISkuState {
    sku: ISku | null
    skus: ISku[]
    isLoading: boolean
    error: string
    isSuccess: boolean
    isSubmitting: boolean
  }

  interface IAuthState {
    user: IUserState | null
    accessToken: string | null
    isLoading: boolean
    error: string | null
    isSuccess: boolean
    isSubmitting: boolean
  }

  interface ISaleOrderState {
    saleOrder: ISaleOrder | null
    saleOrders: ISaleOrder[]
    isLoading: boolean
    error: string
    isSuccess: boolean
    isSubmitting: boolean
  }


  //**********Actions********* */
  // interface IAuthAction {
  //   payload: {username: string, password: string}
  // }

  // interface IUserCreateAction {
  //   payload: IUser
  // }
  interface CreateUserAction {
    name: string
    username: string
    email: string
    phone: string
    role: Roles
  }

  interface UpdateUserAction {
    id: number | string,
    payload: IUser
  }

  interface DeleteUserAction {
    id: number | string
  }

  interface ResponseData<T> {
    data: T
    code: number
    message: string
  }


  type ReduxAction = {
    type: string,
    payload?: any,
    query?: any,
    id?: string | number,
    responseData?: any,
    status?: boolean
  }


  interface SignInDTO {
    access_token: string
    token_type: string
    user: IUser
    expires_in: string
  }
  

  interface ICartSaleEntry {
    index: number
    product_id?: number | string
    product_name: string
    sku: string
    sku_id?: number
    qty: number
    unit_selling_price: number
    total: number
  }
}