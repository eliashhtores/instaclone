import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/Signup'))
const Profile = lazy(() => import('./pages/Profile.js'))
const NotFound = lazy(() => import('./pages/Not-found'))

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route path={ROUTES.LOGIN} component={Login}></Route>
                    <Route path={ROUTES.SIGN_UP} component={SignUp}></Route>
                    <Route path={ROUTES.PROFILE} component={Profile}></Route>
                    <Route path={ROUTES.NOT_FOUND} component={NotFound}></Route>
                    <Route path={ROUTES.DASHBOARD} component={Dashboard}></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
