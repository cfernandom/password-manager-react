import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { formatErrorMessages } from '../../../utils/apiResponse'

const authApiEndpoint = import.meta.env.VITE_APP_AUTH_API_ENDPOINT

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const accessToken = authToken || await requestAccessToken()

            if (!accessToken) throw new Error('Failed to refresh access token')

            const user = await requestUserData(accessToken)
            setSession(accessToken, user)
        } catch (error) {
            console.error(error)
            resetSession()
        }
    }

    const requestAccessToken = async () => {
        try {
            const response = await fetch(
                `${authApiEndpoint}/refresh`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const json = await response.json()

            if (!response.ok) {
                const errorMessage = formatErrorMessages(json.message)
                throw new Error(errorMessage)
            }

            const newAccessToken = json.data.access_token

            return newAccessToken
        } catch (error) {
            console.error('Failed to refresh access token: ', error.message)
            throw error
        }
    }

    const requestUserData = async (accessToken) => {
        try {
            const response = await fetch(
                `${authApiEndpoint}/me`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )

            const json = await response.json()

            if (!response.ok || json.data === null) {
                const errorMessage = formatErrorMessages(json.message)
                throw new Error(errorMessage)
            }

            return json.data
        } catch (error) {
            console.error('Failed to retrieve user data: ', error.message)
            throw error
        }
    }

    const login = async (email, password) => {
        try {
            const response = await fetch(
                `${authApiEndpoint}/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                }
            )

            const json = await response.json()

            if (!response.ok) {
                const errorMessage = formatErrorMessages(json.message)
                throw new Error(errorMessage)
            }

            const accessToken = json.data.access_token
            const user = await requestUserData(accessToken)

            setSession(accessToken, user)
        } catch (error) {
            console.error('Login error: ', error.message)
            resetSession()
            throw error
        }
    }

    const setSession = (accessToken, user) => {
        setAuthToken(accessToken)
        setUser(user)
        setIsLoggedIn(true)
    }

    const resetSession = () => {
        setAuthToken(null)
        setUser(null)
        setIsLoggedIn(false)
    }

    const authValues = {
        authToken,
        user,
        isLoggedIn,
        login
    }

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider
