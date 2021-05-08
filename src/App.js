<<<<<<< HEAD
import React, { useState , useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import './styles.css';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
=======
import logo from './logo.svg';
import './App.css';

function App() {
>>>>>>> parent of 0d13b76 (Version 1 completed)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

<<<<<<< HEAD
const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/chat" />
          )
      }
    />
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       authenticated: false,
//       loading: true
//     };
//   }

//   componentDidMount() {
//     auth().onAuthStateChanged(user => {
//       if (user) {
//         this.setState({
//           authenticated: true,
//           loading: false
//         });
//       } else {
//         this.setState({
//           authenticated: false,
//           loading: false
//         });
//       }
//     });
//   }

//   render() {
//     return this.state.loading === true ? (
//       <div className="spinner-border text-success" role="status">
//         <span className="sr-only">Loading...</span>
//       </div>
//     ) : (
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <PrivateRoute
//               path="/chat"
//               authenticated={this.state.authenticated}
//               component={Chat}
//             />
//             <PublicRoute
//               path="/signup"
//               authenticated={this.state.authenticated}
//               component={Signup}
//             />
//             <PublicRoute
//               path="/login"
//               authenticated={this.state.authenticated}
//               component={Login}
//             />
//           </Switch>
//         </Router>
//       );
//   }
// }

const App = () => {

  const [ authenticated , setAuthenticated ] = useState(false);
  const [ Loading , setLoading ] = useState(true)

  useEffect(() => {
    auth().onAuthStateChanged( user => {
      if(user){
        setAuthenticated(true);
        setLoading(false);
      }else{
        setAuthenticated(true);
        setLoading(false);
      }
    })
  }, [])

  return Loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <PrivateRoute 
        path = '/chat'
        authenticated = {authenticated}
        component = {Chat}
        />
        <PublicRoute 
        path = '/signup'
        authenticated = {authenticated}
        component = {Signup}
        />
        <PublicRoute 
        path="/login"
        authenticated = {authenticated}
        component = {Login}
        />
      </Switch>
    </Router>
  )

}

export default App;
=======
export default App;
>>>>>>> parent of 0d13b76 (Version 1 completed)
