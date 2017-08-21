import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from '/imports/client/containers/app.jsx'

const Route = props => (
  <Router>
    <App {...props} />
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(<Route />, document.querySelector('.root'))
})
