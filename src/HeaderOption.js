import React from 'react'
import './HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { Avatar } from '@mui/material'

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='HeaderOption'>
      {Icon && <Icon className='HeaderOption_Icon' />}
      {avatar && <Avatar src={avatar.photoUrl}>{avatar.email[0]}</Avatar>}

      <h3 className='HeaderOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
