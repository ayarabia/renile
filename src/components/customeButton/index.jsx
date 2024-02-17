import React from 'react'
import { Link } from 'react-router-dom'
function CustomeButton(props) {
  return (
    <Link to={props.to} className={`px-3 block  h-[48px] py-[9px] rounded-xl shadow-3xl  font-semibold text-lg text-center ${props.className}`}>
     {props.text}
    </Link>
  )
}
export default CustomeButton