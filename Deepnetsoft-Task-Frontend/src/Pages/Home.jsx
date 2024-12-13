import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Menu from '../Components/Menu'
import Address from '../Components/Address'
import { useState } from 'react'

function Home() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  return (
    <div>
      <Navbar/>
      <Herosection onMenuSelect={setSelectedMenu}/>
      <Menu selectedMenu={selectedMenu}/>
      <Address/>
    </div>
  )
}

export default Home
