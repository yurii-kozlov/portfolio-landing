/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { AnimatedNumbers } from '../AnimatedNumbers';
import { useOnScreen } from '../../app/hooks';
import './Statistics.scss';
import './gridStatistics.scss';

export const Statistics = () => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref,
    '100px');

  return (
    <section
      className="statistics"
    >
      <div className="container">
        <div
          className="grid-statistics"
          ref={ref}
        >
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-pen-to-square" />
            </div>
            <div className="statistics__count">
              {onScreen && <AnimatedNumbers n={1500} /> }
            </div>
            <div className="statistics__title">Projects completed</div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-user" />
            </div>
            <div className="statistics__count">
              {onScreen && <AnimatedNumbers n={900} />}
            </div>
            <div className="statistics__title">Happy clients</div>
          </div>
          <div className="grid-statistics__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-id-badge" />
            </div>
            <div className="statistics__count">
              {onScreen && <AnimatedNumbers n={200} />}
            </div>
            <div className="statistics__title">Awards received</div>
          </div>

          <div className="grid-statistics__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-lightbulb" />
              </div>
              <div className="statistics__count">
                {onScreen && <AnimatedNumbers n={120} /> }
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
                {onScreen && <AnimatedNumbers n={1500} />}
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
                {onScreen && <AnimatedNumbers n={7200} /> }
              </div>
              <div className="statistics__title">Hours</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
