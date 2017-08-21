import React from 'react'

import { Link } from 'react-router-dom'

const ProjectList = props => {
  return (
    <div>
      <h1>This is the project list page content</h1>
      {
        // <pre>{JSON.stringify(props, null, 2)}</pre>
      }
      {
        props.projects.map((project, index) => {
          return (
            <div key={index}>
              Project #{1 + index} <Link to={`/projects/${project.id}`}>{project.name} details</Link>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default ProjectList
