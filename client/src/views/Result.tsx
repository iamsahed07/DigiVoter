import React from 'react'
import ClippedDrawer from '../components/Drawer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UserManual from '../pages/Information'
import ResultPage from '../pages/Result'

function Result() {
  return (
    <div>
      <Header></Header>
      <ClippedDrawer></ClippedDrawer>
      <ResultPage></ResultPage>
      <Footer></Footer>
    </div>
  )
}

export default Result
