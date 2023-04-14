import React, { useState, useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import firebase from 'firebase/compat/app'
import { db } from './firebase'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'

// import
function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPost] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: user.displayName,
      description: 'test',
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
            <button onClick={sendPost} type='submit'>
              send
            </button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} color='#70B5f9' title='Photo' />
          <InputOption Icon={SubscriptionsIcon} color='#E7A33A' title='Video' />
          <InputOption Icon={EventNoteIcon} color='#C0CBCD' title='Event' />
          <InputOption
            Icon={CalendarViewDayIcon}
            color='#7FC15E'
            title='Write Article'
          />
        </div>
      </div>
      {/* post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
