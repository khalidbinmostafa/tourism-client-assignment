import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Not Found/NotFound';

import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Appointment from './components/Appointment Form/Appointment';

import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';

import Home1 from './components/Home/Home1';
import Register from './components/Register/Register';
import PrivateRoute from './components/Private Route/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServiceCard from './components/Service Card/ServiceCard';
import Home2 from './components/Home/Home2';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
          <Switch>
            <Route exact path="/">
              <Home1></Home1>

              <Home2></Home2>

            </Route>
            <Route path="/home">
              <Home1></Home1>
              <Home2></Home2>

            </Route>
            <PrivateRoute path="/about">
              <Home1></Home1>
              <About></About>

            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">

              <ServiceDetails></ServiceDetails>

            </PrivateRoute>
            <PrivateRoute path="/appointment">

              <Appointment></Appointment>

            </PrivateRoute>
            <Route path="/login">
              <Login></Login>

            </Route>
            <Route path="/register">
              <Register></Register>

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;