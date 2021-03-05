import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom'
import './index.css'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import config from './config'

class App extends Component {
  render () {
    return (
      <BrowserRouter>

        <div className="container">
          {/* <SearchForm /> */}
          <Nav />
          <Switch>
            <Route exact path="/" >
              <Redirect to="/search/cats"/>
            </Route>
            <Route exact path='/search/:query' render={(match) => <Gallery searchTerm={match.match.params.query} apiKey={config.flickrApiKey} />} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
