import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from './Home'

function App({data}) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App
