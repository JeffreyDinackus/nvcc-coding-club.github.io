import React from 'react'
import logo from './assets/borderless.png'
import './Navbar.css'


function Navbar() {


  // get props from app


  // display conditionally header or footer with specific info from app

  // style to look gud



  return (
    <>


      <nav className="navbar cont is-dark" role="navigation" aria-label="main navigation">
        <div className="cont navbar-brand">

          <img src={logo} alt="Coding club logo" className='logo image is-64x64 
' />

          <h1 id='title'>The Coding Club at Northern Virginia Community College </h1>


          {/* link to notion */}
          <div className="end navbar-end">
            <a href="https://cypress-pixie-354.notion.site/Home-b632fa70517646c9bca0dea8e63e5ad8"><button className="button-nav  is-mobile button is-info">Notion</button></a>
          </div>
          <a href="https://www.linkedin.com/company/nvcc-coding-club/
"><button className="button-nav button is-success is-mobile">LinkedIn</button></a>


        </div>
      </nav ></>
  )
}

export default Navbar