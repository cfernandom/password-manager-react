import LoginForm from '../features/authentication/components/LoginForm'
import '../stylesheets/Login.css'
import { Link } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'

export function Login () {
    return (
        <DefaultLayout>
            <h1>PASSNAGER</h1>
            <LoginForm />
            <Link to='/register'>Sign Up</Link>
        </DefaultLayout>
    )
}
