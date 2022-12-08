import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ProfileHeader from '../Header/ProfileHeader'

const ProfileLayout = (WrappedComponent) => {
  return (props)=>{
    return(
      <div>
      <Header/>
      <ProfileHeader/>
      <WrappedComponent {...props}/>
      <Footer/>
    </div>
    )
  }
}

export default ProfileLayout