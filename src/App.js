import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import { AdminLogin, UserLogin, LibrarianLogin } from './pages/Login'
import { UserRegister, LibrarianRegister } from './pages/CreateAccount'

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
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/home" component={Home} />

          {/* login routes */}
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/user/login" component={UserLogin} />
          <Route path="/librarian/login" component={LibrarianLogin} />

          {/* create account routes */}
          <Route path="/admin/create-account" component={CreateAccount} />
          <Route path="/user/create-account" component={UserRegister} />
          <Route path="/librarian/create-account" component={LibrarianRegister} />

          {/* routes that don't require subdomain */}
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/librarian/create-account" component={CreateAccount} />


          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />

          <Route path="/admin" component={AdminLayout} />
          <Route path="/librarian" component={LibrarianLayout} />
          <Route path="/user" component={UserLayout} />
          {/* If you have an index page, you can remothis Redirect */}

          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>

    </>
  )
}

export default App
