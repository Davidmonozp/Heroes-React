import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth/pages/LoginPage'
import { Routes, Route } from 'react-router'
import React from 'react'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path='/*' element={<HeroesRoutes />} /> */}
                {/* <Route path='login' element={<LoginPage />} /> */}
            </Routes>
        </>
    )
}
