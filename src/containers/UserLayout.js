import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import { useAuthContext } from '../context/AuthContext'

const Page404 = lazy(() => import('../pages/404'))

function UserLayout() {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    const { currentUser, userRole, token } = useAuthContext()
    let location = useLocation()

    useEffect(() => {
        closeSidebar()
    }, [location])

    if (userRole !== "admin" || token === '' || currentUser == null) {
        return <Redirect to="/user/login" />
    }


    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
        >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <Header />
                <Main>
                    <Suspense fallback={<ThemedSuspense />}>
                        <Switch>
                            {routes.map((route, i) => {
                                return route.component ? (
                                    <Route
                                        key={i}
                                        exact={true}
                                        path={`/user${route.path}`}
                                        render={(props) => <route.component {...props} />}
                                    />
                                ) : null
                            })}
                            <Redirect exact from="/user" to="/user/dashboard" />
                            <Route component={Page404} />
                        </Switch>
                    </Suspense>
                </Main>
            </div>
        </div>
    )
}

export default UserLayout