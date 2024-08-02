import { useState } from 'react';

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  const message = () => {
    alert("Ihre Nachricht wurde erfolgreich gesendet!");
  }

  return (
    <>
    <div className="container-fluid contact pb-5" id="contact">
      <form className="form ">
        <h3 className="header-terciary">Kontaktieren uns</h3>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            placeholder="E-mail"
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <label className="form-check-label" for="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <div className="contact">
          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-primary btn-block mb-4 btn-contact"
            onClick={message}
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
