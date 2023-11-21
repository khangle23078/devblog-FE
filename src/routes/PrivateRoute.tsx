import React from 'react'
import { useAppSelector } from '../app/store'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthentication } = useAppSelector((state) => state.auth)
  return (
    <>
      {isAuthentication ? children : <Navigate to={'/login'} />}
    </>
  )
}

export default PrivateRoute;