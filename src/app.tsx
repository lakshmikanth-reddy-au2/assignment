import React from 'react';
import AppRouteMap from './components/layout/app-route-map';


class App extends React.Component {
   componentDidMount() {
      window.location.assign('/dashboard');
   }

   render() {
      return (
         <div>
            {/* <Header/> */}
            <div className="container-fluid">
               <div className="row">
                  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                     <AppRouteMap />
                  </main>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
