import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './index.css'
import './Sidebar.css'

function Sidebar({ avatar }) {
  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (
      <div className='sidebar_recentITem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img
          className='bck'
          src='https://images.pexels.com/photos/11856438/pexels-photo-11856438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        {/* <img src={avatar} className='avt' alt='' /> */}
        <Avatar alt='' src={user.photoUrl} className='sidebar_avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>who viewed you</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
          <p>views on post</p>
          <p className='sidebar_statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('react.js')}
        {recentItem('Programming')}
        {recentItem('designer')}
        {recentItem('developer')}
        {recentItem('database')}
      </div>
    </div>
  )
}

export default Sidebar
