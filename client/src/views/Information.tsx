import React from 'react'
import Index from '../Index'
import UserManual from '../pages/Information'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClippedDrawer from '../components/Drawer'

function Information() {
  return (
    <div>
        <Header></Header>
        <ClippedDrawer></ClippedDrawer>
        <UserManual></UserManual>
        <Footer></Footer>
    </div>
  )
}

export default Information
