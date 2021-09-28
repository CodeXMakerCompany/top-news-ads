import React, { Suspense } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { SuspenseLoaderGlobal } from "../components/global/suspenseLoader.global";

import { AuthRouter } from './AuthRouter';
const Home = React.lazy(()=> import('../components/home/Home'));
// const Tcg = React.lazy(()=> import('../components/TCG/TCG'));
const Articles = React.lazy(() => import('../views/elements/elements.view'));

export const AppRouter = () => {
    return (
        <Router>
          <Suspense fallback={<SuspenseLoaderGlobal />}>
              <Switch>
                  <Route path="/auth" component={AuthRouter} />
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/articles/" component={ Articles } />
                  <Route exact path="/article/:name" component={ Articles } />
                  <Redirect to="/auth/login" />
              </Switch>
           </Suspense>
        </Router> 
    )
}
