/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { AnimatedNumbers } from '../AnimatedNumbers';
import './Statistics.scss';
import './gridStatistics.scss';

export const Statistics = () => {
  const [areAnimatingNumbers, setAreAnimatingNumbers]
  = useState<boolean>(false);
  const [isOnDesktop, setIsOnDesktop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth < 1024) {
        setIsOnDesktop(false);
      } else {
        setIsOnDesktop(true);
      }
    });
  });

  const scrollHandler = (event:any) => {
    if (event.target.documentElement.scrollTop > 7000 && isOnDesktop) {
      setAreAnimatingNumbers(true);
    }

    if (event.target.documentElement.scrollTop > 10000 && !isOnDesktop) {
      setAreAnimatingNumbers(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      return document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <section
      className="statistics"
    >
      <div className="container">
        <div className="grid-statistics">
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-pen-to-square" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumbers n={1500} />}

            </div>
            <div className="statistics__title">Projects completed</div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-user" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumbers n={900} />}
            </div>
            <div className="statistics__title">Happy clients</div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-id-badge" />
            </div>
            <div className="statistics__count">
              {areAnimatingNumbers && <AnimatedNumbers n={200} />}
            </div>
            <div className="statistics__title">Awards received</div>
          </div>

          <div className="grid-statistics__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-lightbulb" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumbers n={120} />}
              </div>
              <div className="statistics__title">Crazy ideas</div>
            </div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-solid fa-martini-glass-empty" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumbers n={1500} />}
              </div>
              <div className="statistics__title">Coffee cups</div>
            </div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-clock" />
              </div>
              <div className="statistics__count">
                {areAnimatingNumbers && <AnimatedNumbers n={7200} />}
              </div>
              <div className="statistics__title">Hours</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
