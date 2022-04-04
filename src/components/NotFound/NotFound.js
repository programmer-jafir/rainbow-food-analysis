import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <section>
      <div className='flexible-container'>
        <div className='half-width'>
          <h1 className='header-title'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='paragraph'>
            You might have the wrong address, or the page may have moved.
          </p>
        </div>
        <div>
          <div className='half-width'>
            <img
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound