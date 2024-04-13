import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
    console.log(children)
  return (
    <>
    <Navbar />
    {children}

    </>
  )
}

export default Layout