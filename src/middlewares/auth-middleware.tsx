import React, { FC } from 'react';
import { Navigate } from 'react-router-dom'
import { UserRoles } from '../utils/data';

type Props = {
  roles?: UserRoles[]
  children?: JSX.Element | JSX.Element[]
};

const AuthMiddleware: FC<Props> = (props: Props) => {

  if(!window.localStorage.getItem("access_token")) {
    return <Navigate to="/sign-in" />
  } else if(props.roles) {
    if(!window.localStorage.getItem('auth_user')) {
      return <Navigate to="/sign-in" />
    }
    const user = JSON.parse(window.localStorage.getItem("auth_user") || "")
    if(props.roles.includes(user?.role)) {
      return <>{props.children}</>
    } else {
      return <Navigate to="/forbidden" />
    }
  } else {
    return <>{props.children}</>
  }
}

export default AuthMiddleware;