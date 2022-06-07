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
    <form
      ref={form}
      onSubmit={sendMessage}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        marginLeft: "-400px",
        fontSize: "18px",
      }}>
      <label className='form-text' htmlFor='name'>
        Name
      </label>
      <input
        name='name'
        type='text'
        placeholder='Name'
        style={{
          width: "400px",
          marginLeft: "350px",
          marginTop: "10px",
        }}
      />

      <label className='form-text' htmlFor='name'>
        Email
      </label>
      <input
        name='email'
        type='email'
        placeholder='Email'
        style={{
          width: "400px",
          marginLeft: "350px",
          marginTop: "10px",
        }}
      />

      <label className='form-text' htmlFor='name'>
        Subject
      </label>
      <input
        name='subject'
        type='text'
        placeholder='Subject'
        style={{
          width: "400px",
          marginLeft: "350px",
          marginTop: "10px",
        }}
      />

      <textarea
        name='message'
        rows='6'
        placeholder='Your Message'
        style={{
          width: "400px",
          marginLeft: "350px",
          marginTop: "10px",
        }}
      />
      <input
        style={{ marginLeft: "330px", marginTop: "20px" }}
        className='btn btn-primary'
        type='submit'
        Send
      />
    </form>
  );
};

export default Contact;
