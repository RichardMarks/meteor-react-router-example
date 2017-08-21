import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '/imports/client/home.jsx'
import ProjectList from '/imports/client/projectlist.jsx'
import Project from '/imports/client/project.jsx'

class App extends Component {
  constructor (props) {
    super(props)

    this.renderHome = this.renderHome.bind(this)
    this.renderProjectList = this.renderProjectList.bind(this)
    this.renderProject = this.renderProject.bind(this)

    this.state = {
      username: 'Jack',
      projects: [
        {
          id: 'first',
          name: 'My First Project',
          contents: [
            {
              name: 'index.html',
              path: '/'
            },
            {
              name: 'style.css',
              path: '/css/'
            },
            {
              name: 'main.js',
              path: '/js/'
            }
          ]
        },
        {
          id: 'second',
          name: 'My Second Project',
          contents: []
        },
        {
          id: 'third',
          name: 'My Third Project',
          contents: []
        }
      ]
    }
  }

  renderHome (props) {
    return (
      <Home {...props} username={this.state.username} projects={this.state.projects.length} />
    )
  }

  renderProjectList (props) {
    return (
      <ProjectList {...props} projects={this.state.projects} />
    )
  }

  renderProject (props) {
    const { id } = props.match.params
    const project = this.state.projects.filter(p => p.id === id)[0]

    return (
      <Project {...props} project={project} />
    )
  }

  render () {
    return (
      <div className='app__container'>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/projects' render={this.renderProjectList} />
          <Route exact path='/projects/:id' render={this.renderProject} />
        </Switch>
      </div>
    )
  }
}

export default App
