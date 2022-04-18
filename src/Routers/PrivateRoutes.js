import { Navigate } from 'react-router-dom'
import AdminRoutes from './AdminRoutes'
let emailAdmin = 'maketfit@admin.com'

const PrivateRoutes = ({ isAuth, children, email }) => {
	if (isAuth && email !== emailAdmin) {
		return children
	} else if (isAuth && email === emailAdmin) {
		return <AdminRoutes />
	} else {
		return <Navigate to='/login' />
	}
}

export default PrivateRoutes
