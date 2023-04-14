import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        )
      } else {
      }
    })
  }, [])

  const register = (e) => {
    if (!name) {
      return alert('Enter full name')
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            )
          })
      })
      .catch((error) => alert(error.message))
  }
  const loginToApp = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL,
        })
      )
    })
  }
  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'
        alt=''
      />
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          type='text'
          placeholder='full name (Required if registering)'
        />
        <input
          type='text'
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value)
          }}
          placeholder='Profile picture url (Optional)'
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type='password'
          placeholder='Password'
        />
        <button onClick={loginToApp}>sign in</button>
      </form>
      <p>
        not a member?{' '}
        <span className='login_register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  )
}

export default Login
