import LoginForm from '../features/authentication/components/LoginForm'
import DefaultLayout from '../layouts/DefaultLayout'

export function Login () {
    return (
        <DefaultLayout>
            <h1>PASSNAGER</h1>
            <LoginForm />
        </DefaultLayout>
    )
}
