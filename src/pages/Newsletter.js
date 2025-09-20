import React, { useState } from 'react';
import './Newsletter.css';



const MailchimpForm = () => {
  return (
<div className = "background" >
  <div className ="laptop">
    <div id="mc_embed_signup">
      <form
        action="https://facebook.us17.list-manage.com/subscribe/post?u=fdde31514ee30327007146546&amp;id=e3ac79e8a9&amp;f_id=00cec9e3f0"
        method="post"
        target="_blank"
        noValidate
      >
        <h2>Subscribe to Our Newsletter!</h2>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
          />
        </div>

        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="b_fdde31514ee30327007146546_e3ac79e8a9"
            tabIndex="-1"
          />
        </div>

        <div className="clear">
          <input type="submit" value="Subscribe" name="subscribe" className="button" />
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};



/*
const Newsletter = () => {
  const [email, setEmail] = useState(""); // State to store email input

  const handleChange = (event) => {
    setEmail(event.target.value); // Updates email state
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    alert(`Email submitted: ${email}`); // Temporary alert for testing
  };

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <h2 className="inner-title">Subscribe to Our Newsletter!</h2>
          <p className="second">Stay up to date with news and events from ACM-W:</p>
          
          <form onSubmit={handleSubmit} className="email-form">
            <label className="email-label">Email Address:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

*/
export default MailchimpForm;

