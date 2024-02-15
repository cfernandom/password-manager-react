import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './src/routes/routes'
import React from 'react'

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
