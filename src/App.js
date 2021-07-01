// import logo from './logo.svg';
import react , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from  "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { positions, Provider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import HomeItem from './HomeItem';
import Payment from './Payment'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders'

function App() {
  const [{},dispatch] = useStateValue();
  const options = {
    timeout: 2000,
    position: positions.MIDDLE_RIGHT
  };

  const promise = loadStripe(
    "pk_test_51J2gxXSGCqGphdr6xUFtwaClPqfkILKpUbrp51ONHDve7UUybKTxdO9PCOWnYSDLCXS7qjXgnYPGXdKbJZ3M37Qr00QqYRq8u6"
  )

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     console.log('User >>>' , authUser);

     if(authUser){
      dispatch({
        type:'SET_USER',
        user: authUser
      })
       //user just logged in or user was logged in
     }
     else{
      dispatch({
        type:'SET_USER',
        user: null
      })
       //user is logged out
     }
   })
  }, []);

  return (
    <Router>
      <Provider template={AlertTemplate} {...options}>
        <div className="App">
          
          <Switch>
          <Route path="/orders">
              <Header />
              <Orders/>
              
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout/>
            </Route>
            <Route path="/item">
              <Header />            
              <HomeItem/>
            </Route>
            <Route path="/payment">
              <Header /> 
              <Elements stripe={promise}>
                <Payment/>
              </Elements>           
              
            </Route>
            <Route path="/">
              <Header />            
              <Home/>
            </Route>
            
          </Switch>

        </div>
      </Provider>
    </Router>
  );
}

export default App;
