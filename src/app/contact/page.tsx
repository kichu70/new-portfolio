"use client";
import React, { useRef } from "react";
import "./Contact.css";
import Navbar from "@/components/navbar/Navbar";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const route =useRouter()
   const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "ansif7034",
        "template_wcllnqu",
        formRef.current,
        "O6SBnqV7jYz4dq9Mu"
      )
      .then(
        () => {
          toast.success("Message sent successfully")
          formRef.current?.reset();
          route.push("/")
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send ");
        }
      );
  };

  return (
    <>
      <Navbar />
    <div className="contact-container">

      <div className="contact-card">
        <h1 className="title">Contact Me</h1>
        <p className="subtitle">
          Let's build something amazing together 🚀
        </p>

        {/* Info Section */}
        <div className="info-section">
          <h2>Muhammad Ansif</h2>
          <p>MERN Stack Developer | React | Next.js</p>

          <div className="info-item">
            📍 Calicut, Kerala, India
          </div>
          <div className="info-item">
            📞 +91 7034998709
          </div>
          <div className="info-item">
            ✉️ kiichu7034@gmail.com
          </div>

          <div className="links">

            <a href="https://github.com/kichu70" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ansif-627b85375/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Form Section */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <input name="user_name" type="text" placeholder="Your Name" required />
            <input name="user_email" type="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message..." rows={5} minLength={5} required  />
            <button type="submit">Send Message</button>
          </form>
      </div>
    </div></>
  );
};

export default ContactPage;