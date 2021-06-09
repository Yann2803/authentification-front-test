import { Route, Redirect } from "react-router-dom"
import React from 'react';


export interface ProtectedRouterProps {
   path: string,
   component: React.FC
}


const ProtectedRouter : React.FC<ProtectedRouterProps> = ({component: Component }) => {

const accessToken = window.localStorage.getItem("token")
console.log("access token : ",accessToken)

   return (
      <>
         {accessToken ? <Component /> : <Redirect to={{ pathname: "/login"}} />}
      </>
   )
}

export default ProtectedRouter