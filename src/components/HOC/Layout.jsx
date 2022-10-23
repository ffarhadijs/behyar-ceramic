import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = (WrappedComponent) => {
  return (props)=>{
    return(
      <div>
      <Header/>
      <WrappedComponent {...props}/>
      <Footer/>
    </div>
    )
  }
}

export default Layout