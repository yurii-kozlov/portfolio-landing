/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */

export const About = () => {
  return (
    <section className="about page__about" id="about">
      <div className="container">
        <div className="about__intro">
          <h5 className="about__title">About</h5>
          <h1 className="about__subtitle">Let me introduce myself.</h1>
          <div className="about__intro-info">
            <img
              className="about__profile-photo"
              src={require('../images/profile-pic.jpg')}
              alt="profile_photo"
            />
            <p className="about__description">
              Lorem ipsum Exercitation culpa qui dolor consequat

              exercitation fugiat laborum ex ea eiusmod ad do aliqua

              occaecat nisi ad irure sunt id pariatur Duis laboris amet

              exercitation veniam labore consectetur ea id quis eiusmod.
            </p>
          </div>
        </div>

        <div className="about__author">
          <div className="grid about__author-content">
            <div className="grid__item grid__item--1-5">
              <div className="about__author-detailed">
                <h3 className="about__author-subhead">Profile</h3>
                <p className="about__profile-description">
                  Lorem ipsum Qui veniam ut consequat ex ullamco
                  nulla in non ut esse in magna sint minim officia
                  consectetur nisi commodo ea magna pariatur nisi
                  cillum.
                </p>
                <ul className="about__author-list">
                  <li className="about__author-list-item">
                    <strong
                      className="about__author-list-item-info"
                    >
                      fullname:
                    </strong>
                    <span
                      className="about__author-list-item-details"
                    >
                      Juan Dela Cruz
                    </span>
                  </li>
                  <li className="about__author-list-item">
                    <strong
                      className="about__author-list-item-info"
                    >
                      birth date:
                    </strong>
                    <span
                      className="about__author-list-item-details"
                    >
                      September 28, 1987
                    </span>
                  </li>
                  <li className="about__author-list-item">
                    <strong
                      className="about__author-list-item-info"
                    >
                      job:
                    </strong>
                    <span
                      className="about__author-list-item-details"
                    >
                      Freelancer, Frontend Developer
                    </span>
                  </li>
                  <li className="about__author-list-item">
                    <strong
                      className="about__author-list-item-info"
                    >
                      website:
                    </strong>
                    <span
                      className="about__author-list-item-details"
                    >
                      www.kardswebsite.com
                    </span>
                  </li>
                  <li className="about__author-list-item">
                    <strong
                      className="about__author-list-item-info"
                    >
                      email:
                    </strong>
                    <span
                      className="about__author-list-item-details"
                    >
                      me@kardswebsite.com
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="grid__item grid__item--7-11">
              <div className="about__author-skills">
                <h3 className="about__author-subhead">Skills</h3>
                <p className="about__skills-description">
                  Lorem ipsum Qui veniam ut consequat ex ullamco
                  nulla in non ut esse in magna sint minim officia
                  consectetur nisi commodo ea magna pariatur nisi
                  cillum.
                </p>

                <ul className="about__skills-list">
                  <li className="about__skills-list-item">
                    <div
                      className="
                        about__skills-percent
                        about__skills-percent--90"
                    >
                      <span className="about__skills-scale">90%</span>
                    </div>
                    <strong className="about__skills-name">html5</strong>
                  </li>

                  <li className="about__skills-list-item">
                    <div className="
                      about__skills-percent
                      about__skills-percent--85"
                    >
                      <span className="about__skills-scale">85%</span>
                    </div>
                    <strong className="about__skills-name">css3</strong>
                  </li>

                  <li className="about__skills-list-item">
                    <div className="
                      about__skills-percent
                      about__skills-percent--70"
                    >
                      <span className="about__skills-scale">70%</span>
                    </div>
                    <strong className="about__skills-name">jquery</strong>
                  </li>

                  <li className="about__skills-list-item">
                    <div className="
                      about__skills-percent
                      about__skills-percent--95"
                    >
                      <span className="about__skills-scale">95%</span>
                    </div>
                    <strong className="about__skills-name">php</strong>
                  </li>

                  <li className="about__skills-list-item">
                    <div className="
                      about__skills-percent
                      about__skills-percent--75"
                    >
                      <span className="about__skills-scale">75%</span>
                    </div>
                    <strong className="about__skills-name">wordpress</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="grid-item grid__item--3-8">
              <a
                className="about__link-hire"
                href="#"
              >
                hire me
              </a>
            </div>

            <div className="grid-item grid__item--7-12">
              <a
                href="#"
                className="about__link-download"
              >
                download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
