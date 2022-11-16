import React, { useState } from 'react';

export const Contact = () => {
  const [emailInput, setEmailUnput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isEmptyMessageError, setIsEmptyMessageError]
  = useState<boolean>(false);
  const [isEmptyNameError, setIsEmptyNameError] = useState<boolean>(false);
  const [isEmptyEmailError, setIsEmptyEmailError] = useState<boolean>(false);
  const [isWrongEmail, setIsWrongEmail] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => event.preventDefault();
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setIsEmptyNameError(true);
    } else {
      setIsEmptyNameError(false);
    }

    return setNameInput(event.target.value);
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.includes('@') && event.target.value.length !== 0) {
      setIsWrongEmail(true);
    } else {
      setIsWrongEmail(false);
    }

    if (!event.target.value) {
      setIsEmptyEmailError(true);
    } else {
      setIsEmptyEmailError(false);
    }

    return setEmailUnput(event.target.value);
  };

  const handleMessageInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (!event.target.value) {
      setIsEmptyMessageError(true);
    } else {
      setIsEmptyMessageError(false);
    }

    return setMessageInput(event.target.value);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__intro">
          <h5 className="contact__title">contact</h5>
          <h1 className="contact__subtitle contact__subtitle--color_white">
            I&apos;d Love To Hear From You
          </h1>
          <div className="
            contact__small-description
            contact__small-description--color_white
            "
          >
            Lorem ipsum Do commodo in proident enim in
            dolor cupidatat adipisicing
            dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
            Consectetur
            ut in in eu do.
          </div>
        </div>
        <div className="contact__form-block">
          <form
            onSubmit={handleSubmit}
            action="#"
            className="contact__form"
            method="get"
          >
            <fieldset className="contact__form-fieldset">
              <div className="contact__form-field">
                <input
                  onChange={handleNameInput}
                  value={nameInput}
                  id="contactName"
                  placeholder="Name"
                  name="contactName"
                  className="contact__form-input"
                  type="text"
                  required
                />

                {isEmptyNameError && (
                  <label
                    id="contactName-error"
                    className="contact__form-input-error"
                    htmlFor="contactName"
                  >
                    This field is required
                  </label>
                )}

              </div>
              <div className="contact__form-field">
                <input
                  value={emailInput}
                  onChange={handleEmailInput}
                  id="contactEmail"
                  placeholder="Email"
                  name="contactEmail"
                  className="contact__form-input"
                  type="email"
                  required
                />

                {isEmptyEmailError && (
                  <label
                    id="contactMessage-error"
                    className="contact__form-input-error"
                    htmlFor="contactEmail"
                  >
                    This field is required.
                  </label>
                )}

                {isWrongEmail && (
                  <label
                    id="contactMessage-error"
                    className="contact__form-input-error"
                    htmlFor="contactEmail"
                  >
                    Please enter a valid email address
                  </label>
                )}

              </div>
              <div className="contact__form-field">
                <input
                  id="contactSubject"
                  placeholder="Subject"
                  name="contactSubject"
                  className="contact__form-input"
                  type="text"
                  required
                />
              </div>
              <div className="contact__form-field">
                <textarea
                  onChange={handleMessageInput}
                  value={messageInput}
                  id="contactMessage"
                  placeholder="message"
                  name="contactMessage"
                  className="contact__form-textarea"
                  rows={10}
                  cols={50}
                />

                {isEmptyMessageError && (
                  <label
                    id="contactMessage-error"
                    className="
                    contact__form-textarea-error
                    contact__form-input-error
                    "
                    htmlFor="contactMessage"
                  >
                    This field is required.
                  </label>
                )}

              </div>

              <div className="contact__form-field">
                <button
                  type="submit"
                  className="contact__form-button"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="contact__info">
          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-solid fa-location-dot" />
            </div>

            <h5 className="contact__info-title">Where to find me</h5>

            <p className="contact__info-description">
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA
              <br />
              94043 US
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-regular fa-envelope" />
            </div>

            <h5 className="contact__info-title">Email me at</h5>

            <p className="contact__info-description">

              someone@kardswebsite.com
              <br />
              info@kardswebsite.com
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-solid fa-phone" />
            </div>

            <h5 className="contact__info-title">Call me at</h5>

            <p className="contact__info-description">

              Phone: (+63) 555 1212
              <br />
              Mobile: (+63) 555 0100
              <br />
              Fax: (+63) 555 0101
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
