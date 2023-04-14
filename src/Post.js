import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ScreenRotationAltOutlinedIcon from '@mui/icons-material/ScreenRotationAltOutlined'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser)
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      {/* post body */}
      <div className='post_body'>
        <p>{message}</p>
      </div>
      {/* post buttons */}
      <div className='post_buttons'>
        <InputOption title='Like' Icon={FavoriteBorderOutlinedIcon} />
        <InputOption title='Comment' Icon={CommentOutlinedIcon} />
        <InputOption title='repost' Icon={ScreenRotationAltOutlinedIcon} />
        <InputOption title='views' Icon={SignalCellularAltOutlinedIcon} />
        <InputOption title='Share' Icon={ShareOutlinedIcon} />
      </div>
    </div>
  )
})
export default Post
