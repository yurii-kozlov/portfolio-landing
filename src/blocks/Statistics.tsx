/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export const Statistics = () => {
  const [projectsCount, setProjectsCount] = useState<number>(0);
  const [clientsCount, setClientsCount] = useState<number>(0);
  const [awardsCount, setAwardsCount] = useState<number>(0);
  const [ideasCount, setIdeasCount] = useState<number>(0);
  const [cupsCount, setCupsCount] = useState<number>(0);
  const [hoursCount, setHoursCount] = useState<number>(0);

  const addProjectsCount = () => setProjectsCount(
    projectsCount < 1500 ? projectsCount + 1 : projectsCount,
  );

  const addClientsCount = () => setClientsCount(
    clientsCount < 900 ? clientsCount + 1 : clientsCount,
  );

  const addAwardsCount = () => setAwardsCount(
    awardsCount < 200 ? awardsCount + 1 : awardsCount,
  );

  const addIdeasCount = () => setIdeasCount(
    ideasCount < 120 ? ideasCount + 1 : ideasCount,
  );

  const addCupsCount = () => setCupsCount(
    cupsCount < 1500 ? cupsCount + 1 : cupsCount,
  );

  const addHoursCount = () => setHoursCount(
    hoursCount < 720 ? hoursCount + 1 : hoursCount,
  );

  useEffect(() => {
    addProjectsCount();
    addClientsCount();
    addAwardsCount();
    addIdeasCount();
    addCupsCount();
    addHoursCount();
  });

  return (
    <section className="statistics">
      <div className="container">
        <div className="grid-stats">
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-pen-to-square" />
            </div>
            <div className="statistics__count">{projectsCount}</div>
            <div className="statistics__title">Projects completed</div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-user" />
            </div>
            <div className="statistics__count">{clientsCount}</div>
            <div className="statistics__title">Happy clients</div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__icon">
              <i className="fa-regular fa-id-badge" />
            </div>
            <div className="statistics__count">{awardsCount}</div>
            <div className="statistics__title">Awards received</div>
          </div>

          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-lightbulb" />
              </div>
              <div className="statistics__count">{ideasCount}</div>
              <div className="statistics__title">Crazy ideas</div>
            </div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-solid fa-martini-glass-empty" />
              </div>
              <div className="statistics__count">{cupsCount}</div>
              <div className="statistics__title">Coffee cups</div>
            </div>
          </div>
          <div className="grid-stats__item">
            <div className="statistics__block">
              <div className="statistics__icon">
                <i className="fa-regular fa-clock" />
              </div>
              <div className="statistics__count">{hoursCount}</div>
              <div className="statistics__title">Hours</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
