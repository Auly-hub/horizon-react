import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="images/apartment.png" alt="logo" height= "40" class="logo"/>
            <small>Campanile Hotel</small>
          </a>
          <div>
            <img src="images/smartphone-call.png" alt="booking" height="20" class="booking"/>
            <small>Call Us Now <span class="red">+39-351-584-0858</span></small>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar