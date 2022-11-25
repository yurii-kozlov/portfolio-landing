import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import { NavigationBar } from '../NavigationBar';
import './Header.scss';
import '../../styles/container.scss';

export const Header: React.FC = () => {
  return (
    <header className="page__section header">
      <NavigationBar />
      <div className="container">
        <div className="header__content">
          <div className="header__titles">
            <h5 className="header__greeting">Hello, worlddddd.</h5>
            <h1 className="header__author-name">
              I&apos;m Juan Dela Cruz.
            </h1>
            <p className="header__about-author">
              <span
                className="header__author-first-occupation"
              >
                FRONT-END DEVELOPER
              </span>
              <span
                className="header__author-second-occupation"
              >
                UI/UX DESIGNER
              </span>
            </p>
            <a
              className="header__author-in-details"
              href="#about"
            >
              more about me
            </a>
          </div>

          <SocialNetwork />

        </div>

      </div>
    </header>
  );
};
