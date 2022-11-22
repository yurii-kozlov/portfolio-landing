/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowTop } from '../ArrowTop';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="grid grid--onMobile">
          <div className="grid__item grid__item--4-7">
            <div className="footer__copyright">
              <span className="footer__copyright-details">
                © Copyright Kards 2016.
              </span>
              <span className="footer__copyright-author">
                Design by
                <a className="footer__link" href="http://www.styleshout.com/">
                  {' '}
                  styleshout
                </a>
              </span>
            </div>
          </div>
          <div className="grid__item grid__item--8-12">
            <div className="social-network social-network--font-small">
              <ul className="
                  social-network__list social-network__list--gap_bigger
                "
              >
                <li className="social-network__link">
                  <a href="#" className="social-network__link-item">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li className="social-network__link">
                  <a href="#" className="social-network__link-item">
                    <i className="fa-brands fa-behance" />
                  </a>
                </li>
                <li className="social-network__link">
                  <a href="#" className="social-network__link-item">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li className="social-network__link">
                  <a href="#" className="social-network__link-item">
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </li>
                <li className="social-network__link">
                  <a href="#" className="social-network__link-item">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ArrowTop />
      </div>
    </footer>
  );
};
