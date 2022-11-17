import { useEffect, useState } from 'react';
import { AnimatedNumber } from '../helpers/animatedNumber';

export const Statistics = () => {
  const [areAnimatingNumbers, setAreAnimatingNumbers]
  = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 7000) {
        setAreAnimatingNumbers(true);
      } else {
        setAreAnimatingNumbers(false);
      }
    });
  }, []);

  return (
    <section className="statistics">
      <div className="container">
        <div className="grid-stats">
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-pen-to-square" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumber n={1500} />}

            </div>
            <div className="statistics__title">Projects completed</div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-user" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumber n={900} />}
            </div>
            <div className="statistics__title">Happy clients</div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-id-badge" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumber n={200} />}
            </div>
            <div className="statistics__title">Awards received</div>
          </div>

          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-lightbulb" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumber n={120} />}
              </div>
              <div className="statistics__title">Crazy ideas</div>
            </div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-solid fa-martini-glass-empty" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumber n={1500} />}
              </div>
              <div className="statistics__title">Coffee cups</div>
            </div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-clock" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumber n={7200} />}
              </div>
              <div className="statistics__title">Hours</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
