import { Result, Button } from 'antd';
import React from 'react';
import { history } from '../../utils/common-helper';


const ForbiddenPage: React.FC = () => {

  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary" onClick={() => {
          console.log('lets go home')
          history.push('/')
        }}>Back Home</Button>}
      />
    </>
  )
}


export default ForbiddenPage;