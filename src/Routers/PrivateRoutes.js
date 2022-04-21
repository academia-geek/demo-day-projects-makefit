import { Navigate } from 'react-router-dom'
import { emailAdmin } from '../utils/emailAdmin'
import AdminRoutes from './AdminRoutes'


const PrivateRoutes = ({ isAuth, children, email }) => {
	if (isAuth && email !== emailAdmin) {
		return children
	} else if (isAuth && email === emailAdmin) {
		return <AdminRoutes />
	} else {
		return <Navigate to='/landingpage' />
	}
}

export default PrivateRoutes
