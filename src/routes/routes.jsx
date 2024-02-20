import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Profile } from '../pages/Profile'
import CreateEdit from '../pages/CreateEdit'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/edit',
        element: <CreateEdit mode='edit'/>
    },
    {
        path: '/create',
        element: <CreateEdit mode='create'/>
    }
])

export default routes
