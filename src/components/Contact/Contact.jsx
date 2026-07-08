import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import "./Contact.css";

const SERVICE_ID = "service_fiue7ns";
const TEMPLATE_ID = "template_etkkpms";
const PUBLIC_KEY = "sWfyxfp-xaCypPX6k";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};

    if (!form.name.trim()) errs.name = "Name is required";

    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      errs.message = "Message is required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("abithas1202@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("sending");

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");

        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">// 04 — Contact</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="section-subtitle">
          Have an opportunity or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      {/* Top Section */}

      <div className="contact-top">
        {/* Floating Social Icons */}

        <motion.div
          className="social-side"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            className="contact-icon email"
            onClick={copyEmail}
            title="Copy Email"
          >
            <FiMail />
          </button>

          <a
            href="https://github.com/Abitha-codes"
            target="_blank"
            rel="noreferrer"
            className="contact-icon github"
            title="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/abitha-abi"
            target="_blank"
            rel="noreferrer"
            className="contact-icon linkedin"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>

          {copied && (
            <p className="copy-msg">
              ✓ Email copied
            </p>
          )}
        </motion.div>

        {/* Contact Details */}

        <motion.div
          className="contact-card glass-card"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-row">
            <FiPhone />

            <div>
              <h4>Phone</h4>
              <p>+91 9385762371</p>
            </div>
          </div>

          <div className="contact-row">
            <FiMapPin />

            <div>
              <h4>Location</h4>
              <p>Karur, Tamil Nadu, India</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="form-card glass-card"
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="form-title">Get In Touch</h3>
        <div className="fg">
          <label className="flbl">Name</label>

          <input
            className="finp"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="ferr">{errors.name}</span>
          )}
        </div>

        <div className="fg">
          <label className="flbl">Email</label>

          <input
            type="email"
            className="finp"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="ferr">{errors.email}</span>
          )}
        </div>

        <div className="fg">
          <label className="flbl">Message</label>

          <textarea
            className="finp"
            name="message"
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="ferr">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="send-btn"
          disabled={status === "sending"}
        >
          <FaTelegram size={17} />

          {status === "sending"
            ? "Sending..."
            : "Send Message"}
        </button>

        {status === "success" && (
          <p className="form-msg success">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="form-msg error">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}