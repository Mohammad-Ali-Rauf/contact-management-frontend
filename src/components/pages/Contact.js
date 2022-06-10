import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "mail",
      "send_mail",
      e.target,
      "user_O3y1kXCKWXkY4Hl9fe7Os"
    );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendMessage}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea rows={6} cols={35} type="text" name="message" placeholder="Your Message" />
        </div>
        <button className="btn btn-primary btn-block">Send</button>
      </form>
    </div>
  );
};

export default Contact;
