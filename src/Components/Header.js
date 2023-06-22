import React,{Fragment,useState} from 'react'
import {Link } from "react-router-dom";
function Header() {

 const [fixed, setfix] = useState(false)

 const Setfixed=()=>{
  if(window.scrollY>=4){
    setfix(true)
  }
  else{
    setfix(false)
  }
}
window.addEventListener('scroll' ,Setfixed)
  return (
    <Fragment>
    <navbar className={fixed?'navfix':''}>
    <div>
    <span>
  <Link to="/">FOODIES</Link>
    </span>
    </div>
         <div className='navlink'>
         <button>Sign in</button>
         </div>
    </navbar>
    </Fragment>
  )
}

export default Header