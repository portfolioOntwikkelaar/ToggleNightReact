import React from 'react'
import moment from 'moment'
const Article = ({ title, snippet, date, length }) => {
  return (
    <article className='post container'>
      <div className="box">
      <span></span>
      <div class="content">
      <h2 >{title}</h2>
      <div className='post-info'>
        <span className="spa">{moment(date).format('dddd Do, YYYY')}</span>
        {/* <span>{length} min read</span> */}
      </div>
      <p>{snippet}</p></div>
      </div>
    </article>
  )
}

<div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Card one</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#">Read More</a>
    </div>
  </div>
  </div>

export default Article