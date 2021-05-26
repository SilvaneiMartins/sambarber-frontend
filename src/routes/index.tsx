import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgotPasswod from "../pages/ForgotPasswod";
import ResetPassword from "../pages/ResetPassword";

import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} isPrivate />
        <Route path="/forgot-password" component={ForgotPasswod} isPrivate />
        <Route path="/reset-password" component={ResetPassword} isPrivate />

        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);

export default Routes;
