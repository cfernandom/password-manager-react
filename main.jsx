import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './src/routes/routes'
import React from 'react'
import AuthProvider from './src/features/authentication/context/AuthContextProvider'

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
