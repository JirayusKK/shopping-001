import '../SASS/Topbar.scss'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LogoJ from '../../assets/img/Artboard_J.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const Tbar = () => {
  const location = useLocation()

  const [isHomepage, setIsHomepage] = useState(location.pathname === '/')
  const [isHeld, setIsHeld] = useState(false)

  const handleMouseEnter = () => {
    setIsHeld(true)
  }

  const handleMouseLeave = () => {
    setIsHeld(false)
  }

  const IconText = ({ icon, text }) => {
    return (
      <span>
        <p>
          <FontAwesomeIcon icon={icon} />
        </p>
        <p>{text}</p>
      </span>
    )
  }

  useEffect(() => {
    setIsHomepage(location.pathname === '/')
  }, [location.pathname, isHomepage])

  console.log('this state', isHomepage)

  return (
    <>
      {/* --------------------------------Top Bar---------------------------------- */}
      <div className="topbar">
        <div className="top_left">
          <IconText icon={faEnvelope} text="exampleemail@gmail.com" />
          <IconText icon={faPhone} text="+66 1234 5678" />
        </div>
        <div className="top_right">
          <IconText icon={faGlobe} text="ENG" />
        </div>
      </div>
      {/* --------------------------------Menu Bar---------------------------------- */}
      <div className="menubar">
        <div className="menuL">
          <div className="menuL_container">
            <li className="home">
              <NavLink className="home" exact="true" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="shop">
              <NavLink className="shop" activeClassName="active" to="/Shop">
                Shop
              </NavLink>
            </li>
            <li className="store">
              <NavLink className="store" activeClassName="active" to="/Store">
                Store
              </NavLink>
            </li>
          </div>
        </div>
        <div className="logoJ">
          <NavLink className="logoJ" activeClassName="active" to="/">
            <img src={LogoJ} alt="LogoJ" />
          </NavLink>
        </div>
        <div className="menuR">
          <div className="menuR_container">
            <li className="about">
              <NavLink className="about" activeClassName="active" to="/About">
                About
              </NavLink>
            </li>
            <li className="faq">
              <NavLink className="faq" activeClassName="active" to="/Faq">
                FAQ
              </NavLink>
            </li>
            <li className="payment">
              <NavLink
                className="payment"
                activeClassName="active"
                to="/Payment"
              >
                Confirm Payment
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tbar
