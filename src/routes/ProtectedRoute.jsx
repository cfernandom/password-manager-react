import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../features/authentication/hooks/useAuth'

const ProtectedRoute = () => {
    const auth = useAuth()

    return auth.isLoggedIn
        ? <Outlet />
        : <Navigate to='/' replace />
}

export default ProtectedRoute
