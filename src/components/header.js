import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        display: `inline-flex`,
        padding: `10px`,
        alignItems: `center`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ margin: 10 }}>
            <li><Link to={"/"} activeClassName="active">Home</Link></li>
            <li><Link to={"/about"} activeClassName="active">About</Link></li>
            <li><Link to={"/blog"} activeClassName="active">Blog</Link></li>
            <li><Link to="/contact" activeClassName="active" >Contact</Link></li>
      </ul>
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
