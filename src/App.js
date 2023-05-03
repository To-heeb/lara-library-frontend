import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const AdminLayout = lazy(() => import('./containers/AdminLayout'))
const UserLayout = lazy(() => import('./containers/UserLayout'))
const LibrarianLayout = lazy(() => import('./containers/LibrarianLayout'))
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function App() {
  return (
    <>

      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />


          {/* <Route path="/" element={<ProtectedRoute />}> */}
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />

          <Route path="/admin" component={AdminLayout} />
          <Route path="/librarian" component={LibrarianLayout} />
          <Route path="/user" component={UserLayout} />
          {/* If you have an index page, you can remothis Redirect */}
          {/* </Route> */}

          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>

    </>
  )
}

export default App
