/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import '../styles/arrow-top.scss';
import classNames from 'classnames';

export const ArrowTop = () => {
  const [isArrowTop, setIsArrowTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 270) {
        setIsArrowTop(false);
      } else {
        setIsArrowTop(true);
      }
    });
  }, []);

  console.log(window.pageYOffset);

  return (
    <div
      className={classNames(
        'arrow', { 'arrow__link--visibility_hidden': isArrowTop },
      )}
      id="go-top"
    >
      <a
        className="arrow__link"
        href="#top"
      >
        <i className="fa-solid fa-arrow-up-long" />
      </a>
    </div>
  );
};
