import React  from 'react';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/SetAlert';
import About from './components/pages/AboutUs';
import Home from './components/pages/Home';
import  NotFound from './components/pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState'

const App =()=> {

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar />

              <div className='container'>
                <Alert />

                <Switch>
                  <Route exact path='/' component = {Home}/>

                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}

export default App;

// async componentDidMount() {
//   setState({ loading: true });

//   const response = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setState({
//     users: response.data,
//     loading: false,
//   });
// }
