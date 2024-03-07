import React from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bulma/css/bulma.min.css';
import jsLogo from './assets/js.svg'
import netlifyLogo from './assets/netlify.svg'

function End() {
  return (
    <>


      <div className="has-background-warning columns is-centered">
        <div className="column is-one-third mt-4">
          <p className="has-text-centered has-text-dark">Built with: </p>
          <div className="is-flex is-justify-content-center"> {/* Center the images */}



            <a href="https://react.dev/"><img className="image is-32x32 end-badge" src={reactLogo} alt="React Logo" /></a>


            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"><img className="image is-32x32 end-badge" src={jsLogo} alt="JS Logo" /></a>

            <a href="https://vitejs.dev/"><img className="image is-32x32 end-badge" src={viteLogo} alt="Vite Logo" /></a>

            <a href="https://www.netlify.com/"><img className="image is-32x32 end-badge" src={netlifyLogo} alt="Netlify Logo" /></a>

          </div>
        </div>
      </div>


    </>)
}

export default End