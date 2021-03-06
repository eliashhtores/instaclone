import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/Signup'))
const Profile = lazy(() => import('./pages/Profile.js'))
const NotFound = lazy(() => import('./pages/Not-found'))

function App() {
    const { user } = useAuthListener()

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login} />
                        <Route path={ROUTES.SIGN_UP} component={SignUp} />
                        <Route path={ROUTES.PROFILE} component={Profile} />
                        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    )
}

export default App
