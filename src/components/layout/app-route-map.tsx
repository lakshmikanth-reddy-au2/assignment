import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Loading = <div style={{ color: '#474747', fontWeight: 'bold', padding: '5px' }}>Loading...</div>;

const Dashboard = React.lazy(() => import('../dashboard/dashboard-view'));

class AppRouteMap extends React.Component {
   render() {
      return(
         <Switch>
            <React.Suspense fallback={Loading}>
               <Route path="/dashboard" component={Dashboard} />
            </React.Suspense>
         </Switch>
      );
   }
}

export default AppRouteMap;