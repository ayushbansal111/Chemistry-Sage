import React from 'react'
import Nav from './Components/Nav'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Footer from './Components/Footer'


const App = () => {
  return (

    <div className="w-full min-h-screen bg-black text-white">

      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />

    </div>
  )
}
export default App