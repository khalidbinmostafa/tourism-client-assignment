import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Not Found/NotFound';
import ServiceCard from './components/Service Card/ServiceCard';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Appointment from './components/Appointment Form/Appointment';

import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import ServiceCard2 from './components/Service Card/ServiceCard2';
import ServiceCard3 from './components/Service Card/ServiceCard3';

import Home1 from './components/Home/Home1';
import Register from './components/Register/Register';
import PrivateRoute from './components/Private Route/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
          <Switch>
            <Route exact path="/">
              <Home1></Home1>
              <ServiceCard></ServiceCard>
              <ServiceCard2></ServiceCard2>
              <ServiceCard3></ServiceCard3>

            </Route>
            <Route path="/home">
              <Home1></Home1>
              <ServiceCard></ServiceCard>
              <ServiceCard2></ServiceCard2>
              <ServiceCard3></ServiceCard3>

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