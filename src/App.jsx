// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AccountList from './Components/AccountList'
import Calculation from './Components/Calculation'
import ColorBox from './Components/ColorBox'
import ListCourse from './Components/ListCourse'
import UserInfo from './Components/UserInfo'

function App() {

  return (
    <>
      <ListCourse/>
      <Calculation/>
      <UserInfo/>
      <ColorBox/>
      <AccountList/>
     
    </>
  )
}

export default App
