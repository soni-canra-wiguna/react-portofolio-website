import React from "react"
import { useState } from "react"
import { _navItem } from "./NavItem"
import "./header.css"

const Header = () => {
  /*=============== change background ===============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header
    if (this.scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  })
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Canra
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {_navItem?.map((item) => (
              <li className="nav__item" key={item.title}>
                <a href={item.href} className="nav__link active-link">
                  <i className={`${item.icon} nav__icon`}></i> {item.title}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
