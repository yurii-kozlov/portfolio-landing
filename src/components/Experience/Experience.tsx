import './Experience.scss';
import { texts } from '../../api/texts';

const { introText, experienceDescription } = texts;

export const Experience = () => {
  return (
    <section className="experience experience--background_light" id="resume">
      <div className="container">
        <div className="experience__intro">
          <h5 className="experience__title">resume</h5>
          <h1 className="experience__subtitle">More of my credentials</h1>
          <p className="experience__small-description">
            {introText}
          </p>
        </div>
        <h2 className="experience__intro-title">Work Experience</h2>
        <div className="experience__work-info">
          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">UI Designer</h3>
                  <p className="experience__timeline">July 2015 - Present</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4 className="experience__company-name">Awesome Studio</h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">Front-end Developer</h3>
                  <p className="experience__timeline">July 2014 - June 2015</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4
                    className="experience__company-name"
                  >
                    Super Cool Agency
                  </h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">Web Designer</h3>
                  <p className="experience__timeline">May 2013 - June 2014</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4
                    className="experience__company-name"
                  >
                    Great Designs Studio
                  </h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="experience__intro-title">Education</h2>
        <div className="experience__work-info">
          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">Master Degree</h3>
                  <p className="experience__timeline">July 2015 - Present</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-briefcase" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4
                    className="experience__company-name"
                  >
                    University of Life
                  </h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">Bachelor Degree</h3>
                  <p className="experience__timeline">July 2014 - June 2015</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-briefcase" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4
                    className="experience__company-name"
                  >
                    State Design University
                  </h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__description">
            <div className="grid">
              <div className="grid__item grid__item--2-6">
                <div className="experience__header">
                  <h3 className="experience__subheader">Bachelor Degree</h3>
                  <p className="experience__timeline">May 2013 - June 2014</p>
                </div>
              </div>

              <div className="grid__item grid__item--5-6">
                <div className="experience__icon">
                  <i className="fa-solid fa-briefcase" />
                </div>
              </div>

              <div className="grid__item grid__item--6-12">
                <div className="experience__content">
                  <h4
                    className="experience__company-name"
                  >
                    Design College
                  </h4>
                  <p className="experience__details">
                    {experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
