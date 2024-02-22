import RegisterForm from '../features/authentication/components/RegisterForm'
import DefaultLayout from '../layouts/DefaultLayout'
import '../stylesheets/Register.css'

export function Register () {
    return (
        <DefaultLayout>
            <RegisterForm />
        </DefaultLayout>
    )
}
