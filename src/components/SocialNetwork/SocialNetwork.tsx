/* eslint-disable jsx-a11y/anchor-is-valid */
import './SocialNetwork.scss';

export const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="social-network__list">
        <li className="social-network__link">
          <a
            href="#"
            className="
              social-network__link-item
              social-network__link-item--color_purple
            "
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
        </li>
        <li className="social-network__link">
          <a
            href="#"
            className="
              social-network__link-item
              social-network__link-item--color_purple
            "
          >
            <i className="fa-brands fa-behance" />
          </a>
        </li>
        <li className="social-network__link">
          <a
            href="#"
            className="
              social-network__link-item
              social-network__link-item--color_purple
            "
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </li>
        <li className="social-network__link">
          <a
            href="#"
            className="
              social-network__link-item
              social-network__link-item--color_purple
            "
          >
            <i className="fa-brands fa-dribbble" />
          </a>
        </li>
        <li className="social-network__link">
          <a
            href="#"
            className="
              social-network__link-item
              social-network__link-item--color_purple
            "
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};
