import React, { useEffect, useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { EmailJsData } from "../data/websiteConsts";

export default function Contact() {
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    country: "",
    service: "",
  });

  const handleInputChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    setstate({
      ...state,
      [name]: val,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setstate({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      country: "",
      message: "",
    });
    emailjs
      .sendForm(
        EmailJsData.serviceId,
        EmailJsData.templateId,
        e.target,
        EmailJsData.userId
      )
      .then(
        (result) => {
          alert("message sent");
        },
        (error) => {}
      );
    console.log(state);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="section no-flex contact-us-sec-01">
        <div className="content-left">
          <h2>Contact Us</h2>
          <p>
            Overflow Digital Solutions can help your business, please provide us
            with some information on areas of how we can assist.
          </p>
          <p>We service small to medium businesses anywhere.</p>
        </div>
      </div>
      <div className="section">
        <div className="two-part-container">
          <div className="content-left">
            <h2>Interested in our Services?</h2>
            <p>Use the below form to reach out to us</p>
            <form className="contact-form" onSubmit={formSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleInputChange}
              />
              <select name="service">
                <option value="Appointment Setting" defaultValue="true">
                  Appointment Setting
                </option>
                <option value="Telemarketing">Telemarketing</option>
                <option value="Data Cleaning">Data Cleaning</option>
                <option value="Digital Lead Services">
                  Digital Lead Services
                </option>
                <option value="Mobile & Web Apps">Mobile & Web Apps</option>
                <option value="Restaurant App">Restaurant App</option>
                <option value="Business Events">Business Events</option>
                <option value="Sales Training">Sales Training</option>
                <option value="Marketing Automation">
                  Marketing Automation
                </option>
                <option value="Advanced Digital Solutions">
                  Advanced Digital Solutions
                </option>
                <option value="Video and Animation">Video and Animation</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about the services you are interested in..."
                onChange={handleInputChange}
              />
              <button type="submit" className="btn primary-blue">
                Submit
              </button>
            </form>
          </div>
          <div className="content-right justify-right">
            <h2>Grow Together Profit Together</h2>
            <p>
              At Overflow Digital Solutions, everything we do is guaranteed for
              quality and is tied to mutually agreed KPIs.{" "}
            </p>
            <p>
              To find out more about our guarantees, please get in touch with us
              through our contact form.
            </p>
            <h2>Point of contact</h2>
            <h3>Melbourne:</h3>
            <p>
              Level 23,
              <br />
              Collins Square Tower Five,
              <br />
              727 Collins Street,
              <br />
              VIC 3008
            </p>
            <p>
              <b>Toll Free</b>: 1800 505 929
            </p>
            <p>
              <b>Melbourne</b>: (03) 9112 5955
            </p>
            <p>
              <b>Sydney</b>: (02) 8317 5028
            </p>
            <p>
              <b>Brisbane</b>: (07) 3073 1565
            </p>
            <p>
              <b>Adelaide</b>: (08) 8317 1313
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
