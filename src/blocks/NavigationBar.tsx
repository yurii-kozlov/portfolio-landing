/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import { useState } from 'react';
import '../styles/navigation.scss';

export const NavigationBar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const handleClick = () => setMenuIsVisible(!menuIsVisible);

  return (
    <div className="navigation__bar">

      {!menuIsVisible ? (
        <a
          href="#show"
          className="navigation__bar-link"
          onClick={handleClick}
        >
          <span className="navigation__menu-toggle">Menu</span>
        </a>
      ) : (
        <a
          href="#show"
          className="navigation__bar-link"
          onClick={handleClick}
        >
          <span className="navigation__menu-toggle--clicked">Menu</span>
        </a>
      )}

      <div className="navigation__logo">
        <a className="navigation__logo-link" href="#">KARDS</a>
      </div>

      <nav className="navigation__menu">
        <ul className={classNames('navigation__list',
          { 'navigation__list--visibility_visible': menuIsVisible })}
        >
          <li className="navigation__list-item">
            <a
              href="#"
              className="navigation__link navigation__link-home"
              onClick={handleClick}
            >
              Home
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#about"
              className="navigation__link navigation__link-about"
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#resume"
              className="navigation__link"
              onClick={handleClick}
            >
              Resume
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#portfolio"
              className="navigation__link"
              onClick={handleClick}
            >
              Portfolio
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#services"
              className="navigation__link"
              onClick={handleClick}
            >
              Services
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#"
              className="navigation__link"
              onClick={handleClick}
            >
              Style Demo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
