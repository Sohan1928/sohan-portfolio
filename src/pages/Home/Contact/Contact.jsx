import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BsFillPinAngleFill } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b2bbr3e",
        "template_zs72pqg",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "9a6BijpLcY-TirglN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setIsModalVisible(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center py-4 bg-[#0F0715]">
      <div className="w-full max-w-lg px-4 py-8">
        <h1 className="mb-6 text-3xl md:text-6xl text-center font-bold bg-gradient-to-r from-[#20084c] via-[#8042fb] to-[#b9b0ff] bg-clip-text text-transparent pb-1 justify-center mx-auto">
          Contact Me
        </h1>
        <p className="relative px-6 pb-8 text-justify md:px-0">
          As a dedicated Web Developer, I collaborate closely with my clients on
          every project. My goal is not only to deliver exceptional work that
          drives business growth but also to establish long-term relationships
          built on trust and genuine care. Let’s create something remarkable
          together!
          <BsFillPinAngleFill className="absolute top-0 items-center text-xl text-[#8042fb] -left-1 md:-left-6"></BsFillPinAngleFill>
        </p>

        <form
          onSubmit={handleSubmit}
          className="border border-[#8042fb] hover:bg-[#160830] transition-all duration-300 rounded-lg shadow-lg px-3 md:px-6 py-10"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#0F0715] border border-[#8042fb] rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#0F0715] border border-[#8042fb] rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#0F0715] border border-[#8042fb] rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#0F0715] border border-[#8042fb] rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 text-xl text-white px-8 font-semibold rounded-full bg-gradient-to-r from-[#8577f3] via-[#8042fb] to-[#280d5a] inline-block hover:bg-gradient-to-l bg-[length:200%_200%] bg-right hover:bg-left transition-all duration-1000 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Message Sent!</h2>
              <p className="mb-4">Your message was sent successfully.</p>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                onClick={() => setIsModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
