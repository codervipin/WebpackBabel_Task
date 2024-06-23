import React from 'react'
import img from '../public/assets/greet.png'

const Main = () => {
  return (
    <div className='main'>
        <div className='left'>
            <h1>Welcome To..... </h1>
            <h4>Webpack and Babel Assignment</h4>
            <div className='container'>
                <ul>

                    <li>Build the app using WebPack 5 and Babel for transformation.</li>
                    <li>Webpack is a popular JavaScript module bundler.</li>
                    <li>Babel is a JavaScript transpiler that converts modern JavaScript code into older syntax.</li>
                    <li>App is using SASS for styling.</li>
                    <li>Have separate webpack configuration files for development and production.</li>

                </ul>
            </div>
        </div>
        <div className='right'>
            <img src={img}/>
        </div>
    </div>
  )
}

export default Main