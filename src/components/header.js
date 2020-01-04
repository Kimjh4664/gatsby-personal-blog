  import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./nav/menu"
import styled from "styled-components"

// RGB (16, 210, 73 )
const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      backgroundColor:`RGB(112, 122, 139)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{
      width: `974px`,
      height: `65px`,
      margin: `0 auto`
    }}>
      <Menu name="Home" dir="/" />
      <Menu name="skill" dir="/skill" />
      <Menu name="Portfolio" dir="/portfolio" />
      <Menu name="History" dir="/history" />
      <Menu name="Contact" dir="/contact" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
