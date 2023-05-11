import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AdminProtected = ({ children }) => {
  const {
    user: { isLoggedIn },
  } = useSelector((store) => store.auth)

  return isLoggedIn ? <div>{children}</div> : <Navigate to={"/admin-login"} />
}

export default AdminProtected
