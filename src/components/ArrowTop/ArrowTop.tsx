import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './ArrowTop.scss';

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
