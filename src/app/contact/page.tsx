"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import Navbar from "@/components/navbar/Navbar";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  useEffect(() => {
    try {
      emailjs.init("Wpc3LyPJSbKWjH4x8");
    } catch (err) {
      console.error("EmailJS init error:", err);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // WhatsApp Handler: 100% reliable direct chat connection to Ansif's number (+91 7034998709)
  const handleWhatsAppSend = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    const name = formData.user_name.trim();
    const email = formData.user_email.trim();
    const msg = formData.message.trim();

    let text = "Hi Ansif, I visited your portfolio website!";
    if (name || email || msg) {
      text = `*New Portfolio Message*\n\n👤 *Name:* ${name || "Visitor"}\n📧 *Email:* ${email || "Not provided"}\n💬 *Message:* ${msg || "Looking forward to speaking with you!"}`;
    }

    const whatsappUrl = `https://wa.me/917034998709?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp chat with Muhammad Ansif...");
  };

  // Direct Mailto Fallback
  const handleOpenEmailClient = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const name = formData.user_name.trim() || "Visitor";
    const email = formData.user_email.trim() || "Not provided";
    const msg = formData.message.trim() || "Hello Ansif, let's connect!";

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`
    );
    window.location.href = `mailto:kiichu7034@gmail.com?subject=${subject}&body=${body}`;
  };

  // Email Submit Handler
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    setLastError(null);

    const templateParams = {
      name: formData.user_name,
      user_name: formData.user_name,
      from_name: formData.user_name,
      email: formData.user_email,
      user_email: formData.user_email,
      reply_to: formData.user_email,
      message: formData.message,
    };

    try {
      // First attempt: direct JSON send with all alias keys
      const res = await emailjs.send(
        "ansif7034",
        "template_wcllnqu",
        templateParams,
        "Wpc3LyPJSbKWjH4x8"
      );

      if (res.status === 200 || res.text === "OK") {
        setIsSending(false);
        toast.success("Message sent successfully to Ansif's email!");
        setFormData({ user_name: "", user_email: "", message: "" });
        formRef.current?.reset();
        setTimeout(() => {
          router.push("/");
        }, 1800);
        return;
      }
    } catch (err: unknown) {
      console.warn("Attempt 1 via emailjs.send failed, trying sendForm...", err);
    }

    // Second attempt: sendForm with current DOM element
    if (formRef.current) {
      try {
        const formRes = await emailjs.sendForm(
          "ansif7034",
          "template_wcllnqu",
          formRef.current,
          "Wpc3LyPJSbKWjH4x8"
        );

        if (formRes.status === 200 || formRes.text === "OK") {
          setIsSending(false);
          toast.success("Message sent successfully to Ansif's email!");
          setFormData({ user_name: "", user_email: "", message: "" });
          formRef.current?.reset();
          setTimeout(() => {
            router.push("/");
          }, 1800);
          return;
        }
      } catch (formErr: unknown) {
        setIsSending(false);
        console.error("EmailJS Error:", formErr);

        const errorObj = formErr as { text?: string; message?: string; status?: number };
        const detailedError =
          errorObj?.text ||
          errorObj?.message ||
          (errorObj?.status ? `HTTP ${errorObj.status}` : "API service rejected");

        setLastError(detailedError);
        toast.error(`EmailJS Error: ${detailedError}`);
        return;
      }
    }

    setIsSending(false);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="title">Get In Touch</h1>
          <p className="subtitle">
            Let&apos;s build something amazing together — connect via Email or WhatsApp! 🚀
          </p>

          {/* Info Section */}
          <div className="info-section">
            <h2>Muhammad Ansif</h2>
            <p style={{ color: "#c4b5fd", marginBottom: "16px", fontSize: "14.5px" }}>
              Full Stack Software Engineer &bull; Ruby on Rails &bull; Next.js &bull; Node.js &bull; React
            </p>

            <div className="info-item">
              <span style={{ fontSize: "18px" }}>📍</span>
              <span>Calicut, Kerala, India</span>
            </div>

            <div className="info-item">
              <span style={{ fontSize: "18px" }}>📞</span>
              <a href="tel:+917034998709">+91 7034998709</a>
            </div>

            <div className="info-item">
              <span style={{ fontSize: "18px" }}>✉️</span>
              <a href="mailto:kiichu7034@gmail.com">kiichu7034@gmail.com</a>
            </div>

            <div className="links">
              {/* WhatsApp direct chat link */}
              <a
                href="https://wa.me/917034998709?text=Hi%20Ansif,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="link-whatsapp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp (+91 7034998709)
              </a>

              <a
                href="https://github.com/kichu70"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-ansif-627b85375/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form Section */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <input type="hidden" name="from_name" value={formData.user_name} />
            <input type="hidden" name="reply_to" value={formData.user_email} />
            <input type="hidden" name="to_name" value="Muhammad Ansif" />

            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              minLength={3}
              value={formData.message}
              onChange={handleChange}
              required
            />

            {lastError && (
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.12)",
                  border: "1px solid rgba(239, 68, 68, 0.35)",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  color: "#fca5a5",
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: "4px" }}>
                  ⚠️ Email API Notice: {lastError}
                </div>
                <div>
                  Your EmailJS service may need its Gmail connection renewed in the EmailJS dashboard. You can instantly send your message via WhatsApp or launch your mail app below:
                </div>
                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    style={{
                      background: "#25d366",
                      color: "#fff",
                      border: "none",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenEmailClient}
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      color: "#fff",
                      border: "none",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Open Mail App
                  </button>
                </div>
              </div>
            )}

            <div className="form-button-group">
              <button
                type="submit"
                disabled={isSending}
                className="btn-email-submit"
              >
                {isSending ? (
                  "Sending to Email..."
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send to Email
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="btn-whatsapp-submit"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </div>

            <p className="fallback-note">
              Direct connection &bull; Sent straight to Muhammad Ansif (+91 7034998709 / kiichu7034@gmail.com)
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
