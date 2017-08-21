import React from 'react'

const Project = props => {
  return (
    <div>
      <h1>This is the project page content</h1>
      {
        // <pre>{JSON.stringify(props, null, 2)}</pre>
      }
      {
        props.project && (
          <div>
            <h2>Name: {props.project.name}</h2>
            <div>
              Contents:<br />
              {
                props.project.contents.map((file, index) => {
                  return (
                    <div key={index}>
                      <div>File: {file.name}</div>
                      <div>Path: {file.path}</div>
                      <hr />
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Project
