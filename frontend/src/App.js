import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import ListingDetail from './containers/ListingDetails'
import Listings from './containers/Listings'
import Login from './containers/Login'
import SingUp from './containers/SingUp'
import NotFound from './components/NotFound'
import Layout from './hoc/Layout'
import PrivateRoute from './components/privateRoute'
import { Provider } from 'react-redux';
import store from './store'
import './sass/main.scss'

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <PrivateRoute exact path="/listings/:id" component={ListingDetail} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/singUp" component={SingUp} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>

)

export default App
