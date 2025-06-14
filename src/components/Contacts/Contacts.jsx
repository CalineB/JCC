import React, { useState } from "react";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaSms
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString(),
    })
      .then(() => {
        setSubmitStatus("Votre message a bien été envoyé !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setSubmitStatus("Une erreur est survenue.");
      });
  };

  return (
    <section
      id="contacts"
      className="dark:bg-black text-gray-900 dark:text-gray-100 py-16 px-6 md:px-12 shadow-lg"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">Contactez-nous</h2>

      <div className="flex flex-col md:flex-row gap-14 max-w-5xl mx-auto">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex-1 bg-white dark:bg-dark p-8 rounded-lg shadow-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Ne pas remplir : <input name="bot-field" /></label>
          </p>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold uppercase text-sm tracking-wide">Nom</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Votre nom"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold uppercase text-sm tracking-wide">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
              placeholder="exemple@mail.com"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-2 font-semibold uppercase text-sm tracking-wide">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-3 dark:bg-gray-700 dark:border-gray-600 resize-none"
              placeholder="Votre message"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Envoyer
          </button>

          {submitStatus && (
            <p className="mt-5 text-green-600 dark:text-green-400 font-semibold">{submitStatus}</p>
          )}
        </form>

        <aside className="flex-1 max-w-md mx-auto md:mx-0 space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>

          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-full p-3 text-white">
              <FaPhoneAlt size={20} />
            </div>
            <a href="tel:+590690000000" className="text-lg hover:text-primary transition-colors">
              06 90 00 00 00
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-full p-3 text-white">
              <FaEnvelope size={20} />
            </div>
            <a href="mailto:jcc@gmx.fr" className="text-lg hover:text-primary transition-colors">
              jcc@gmx.fr
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-full p-3 text-white">
              <FaWhatsapp size={20} />
            </div>
            <a
              href="https://wa.me/590690000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-full p-3 text-white">
              <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-lg">Gosier, 97190 Guadeloupe</span>
          </div>

          <div className="flex items-center gap-8 mt-8">
            {[
              {
                href: "https://facebook.com/jacobscleancars",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "https://instagram.com/jacobscleancars",
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                href: "https://linkedin.com/company/jacobscleancars",
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-primary hover:text-primary-dark transition-colors text-3xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
};

export default Contact;
