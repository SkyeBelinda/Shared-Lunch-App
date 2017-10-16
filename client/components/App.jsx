import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import About from './About'
import Lunches from './Lunches'
import People from './People'
import Faq from './Faq'
import Contact from './Contact'
import Peeps from './Peeps'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="hero is-fullheight is-light is-bold has-text-centered">
          <Route exact path = '/' component={Header}/>
          <Route exact path = '/' component={Body}/>
          <Route path = '/about' component={About}/>
          <Route path = '/lunches' component={Lunches}/>
          <Route path = '/people' component={People}/>
          <Route path = '/faq' component={Faq}/>
          <Route path = '/contact' component={Contact}/>
          <Route path = '/' component={Footer}/>
        </div>
      </Router>
    ) 
}
}

export default App
