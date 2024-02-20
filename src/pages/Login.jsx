import LoginForm from '../features/authentication/components/LoginForm'
import '../stylesheets/Login.css'
import { Link } from 'react-router-dom'

export function Login () {
    return (
        <div className='main-container-login'>
            <div className='contenedor-login'>
                <h1>PASSNAGER</h1>
                <LoginForm />
                <Link className='sign-up-link' to='/register'>Sign Up</Link>
            </div>
        </div>
    )
}
