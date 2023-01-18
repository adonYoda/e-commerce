import { styled } from '@mui/material'
import React from 'react'
import Nike from "../../assets/Images/Nike.png"
 
const Test = styled("div")((theme)=>({
    backgroundColor: "black",
    width: "100%",
    height: "650px",
}))

const Header = () => {
  return (
    <Test>
        <img src={Nike} alt=""/>
    </Test>
  )
}

export default Header