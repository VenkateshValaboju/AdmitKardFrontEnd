import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import VerifyOTP from './components/VerifyOTP'
import SuccessPage from './components/SuccessPage'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/verify-otp" component={VerifyOTP} />
    <Route exact path="/success" component={SuccessPage} />
  </Switch>
)

export default App
