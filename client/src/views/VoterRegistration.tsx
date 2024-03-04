import React from 'react'
import Index from '../Index'
import VoterRegistrationPage from '../pages/VoterRegistration'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClippedDrawer from '../components/Drawer'
import UserManual from '../pages/Information'

function VoterRegistration() {
  return (
    <div>
      <Header></Header>
      <ClippedDrawer></ClippedDrawer>
      <UserManual></UserManual>
      <Footer></Footer>
    </div>
  )
}

export default VoterRegistration
