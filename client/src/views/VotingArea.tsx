import React from 'react'
import ClippedDrawer from '../components/Drawer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UserManual from '../pages/Information'

function VotingArea() {
  return (
    <div>
      <Header></Header>
      <ClippedDrawer></ClippedDrawer>
      <UserManual></UserManual>
      <Footer></Footer>
    </div>
  )
}

export default VotingArea
