import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
const LoginScreen = React.lazy(()=> import('../components/auth/LoginScreen'));
const RegisterScreen = React.lazy(()=> import('../components/auth/RegisterScreen'));

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={ LoginScreen }/>
                <Route exact path="/auth/register" component={ RegisterScreen }/>

                <Redirect to="/auth/register" />

            </Switch>
        </div>
    )
}
