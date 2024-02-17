import LoginForm from '../features/authentication/components/LoginForm'
import ButtonApp from '../components/ButtonApp'
import '../stylesheets/Login.css'
import { Link } from 'react-router-dom'

export function Login () {
    return (
        <div className='contenedor-login'>
            <h1>PASSNAGER</h1>
            <LoginForm />
            <ButtonApp className='login-btn' text='Login' styleBtn={true}/>
            <Link className='sign-up-link' to='/register'>Sign Up</Link>
        </div>
    )
}
