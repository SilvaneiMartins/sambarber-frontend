import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import ForgotPasswod from '../pages/ForgotPasswod'
import ResetPassword from '../pages/ResetPassword'

import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (
   <Switch>
      <Route path='/' exact component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/forgot-password' component={ForgotPasswod} />
      <Route path='/reset-password' component={ResetPassword} />

      <Route path='/dashboard' component={Dashboard} isPrivate />
   </Switch>
)

export default Routes
