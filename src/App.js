import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Feed from './Feed'
import Header from './Header'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import { selectUser } from './features/userSlice'
import Login from './Login'

function App() {
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <div className='app'>
      {/* header */}
      <Header avatar='https://avatars.githubusercontent.com/u/85861696?s=400&u=447db07a6b979a16cd959e502cb86b929c7ba687&v=4' />

      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          {console.log(user)}
          <Sidebar avatar='https://avatars.githubusercontent.com/u/85861696?s=400&u=447db07a6b979a16cd959e502cb86b929c7ba687&v=4' />
          <Feed />
          <Widgets />
        </div>
      )}
      {/* {console.log(user)} */}
    </div>
  )
}

export default App
