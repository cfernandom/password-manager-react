import CategorySelect from '../components/CategorySelect'
import PasswordInfo from '../components/PasswordInfo'
import LoginForm from '../features/authentication/components/LoginForm'

export function Profile () {
    return (
        <div>
            <LoginForm />
            <CategorySelect />
            <PasswordInfo />
        </div>
    )
}
