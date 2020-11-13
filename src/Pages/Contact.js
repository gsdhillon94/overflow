import React, { useEffect, useState } from "react";

export default function Contact() {
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    country: "",
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
            For a confidential discussion of how Overflow Digital Solutions can
            assist your business, please provide us with some information on
            areas of interest. We service a range of business lead generation
            outsourcing and consultancy requirements across Australia.
          </p>
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
            <h2>100% Lead Guarantee</h2>
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
            <p>Phone: 1800 505 929</p>
          </div>
        </div>
      </div>
    </div>
  );
}
