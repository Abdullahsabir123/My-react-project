import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="body">
    <center className="mar">
    <h1 className="text-1">Contact Us</h1>
      <div className="ffbox">
        <div className="ffbox1">
          <label htmlForr="fullName">
            <i className="fa fa-solid fa-user" style={{margin:'2px'}}></i> Full Name:
          </label>
          <input type="text" id="fullName" name="fullName" required />

          <label for="email">
            <i className="fa fa-solid fa-envelope" style={{margin: '2px'}}></i>
            Email Address:
          </label>
          <input type="email" id="email" name="email" required />

          <label for="mobile">
            <i className=" fa fa-solid fa-phone" style={{margin: '2px'}}></i>
            Contact No:
          </label>
          <input type="tel" id="mobile" name="mobile" required />

          <label for="msg">
            <i className=" fa fa-solid fa-comment" style={{margin: '2px'}}></i>
            Write Message:
          </label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
          <button className="butn">Submit</button>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin"
            width="370"
            height="95%"
            title="ifr"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      </center>
    </div>
  );
}