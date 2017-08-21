import React from 'react'

const Home = props => {
  return (
    <div>
      <h1>This is the home page content</h1>
      {
        props.projects && (
          <h2>Welcome, {props.username}. You have {props.projects} projects</h2>
        )
      }
      {
        // <pre>{JSON.stringify(props, null, 2)}</pre>
      }
    </div>
  )
}

export default Home
