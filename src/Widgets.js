import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import TagIcon from '@mui/icons-material/Tag'

function Widgets() {
  const newsArticles = (heading, subtitle) => {
    return (
      <div className='widgets_article'>
        <div className='widgets_articleLeft'>
          <TagIcon />
        </div>
        <div className='widgets_articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticles('covid-10',  'Top news - 980 readers')}
    </div>
  )
}

export default Widgets
