import { Redirect } from "react-router-dom"


export interface ProtectedRouterProps {
   path: string,
   component: React.FC
}


const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ component: Component }) => {

   const accessToken = window.localStorage.getItem("token")

   return (
      <>
         {accessToken ? <Component /> : <Redirect to={{ pathname: "/login" }} />}
      </>
   )
}

export default ProtectedRouter