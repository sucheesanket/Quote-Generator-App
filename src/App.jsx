import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Button from './Components/Button'
import Maincon from './Components/Maincon'

const App = () => {
  return (
    <div className='overflow-hidden select-none'>
      <Header />
      <Maincon/>
      {/* <Content /> */}
    </div>
  )
}

export default App
