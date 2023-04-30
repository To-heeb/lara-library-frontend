import React, { lazy } from 'react'
import AuthProvider from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function App() {
  return (
    <>

      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <AuthProvider>
            {/* Place new routes over this */}
            <Route path="/app" component={Layout} />
            {/* If you have an index page, you can remothis Redirect */}
          </AuthProvider>
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>

    </>
  )
}

export default App
