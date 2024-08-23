import React, { useState } from "react";
import axios from "axios";
import form from "../assets/form.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrYoutube } from "react-icons/gr";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    setNameError(name.length < 3);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailError(!email.match(emailRegex));
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3 || !email.match(emailRegex)) {
      setNameError(name.length < 3);
      setEmailError(!email.match(emailRegex));
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      await axios.post('https://formspree.io/f/xwpewovy', formData, {
        headers: {
          'Accept': 'application/json',
        },
      });
      setSent(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#f8f9ff] py-20">
      <div className="max-w-[1280px] mx-auto pb-40 lg:px-28">
        <div className="border bg-white drop-shadow-2xl md:flex">
          <div className="md:w-3/5 pl-8">
            <h1 style={{ color: '#1c57a6' }} className="lg:text-4xl text-xl pt-8 font-bold">
              Get In Touch
            </h1>
            <p className="lg:text-2xl text-sm py-5 font-bold">
              Please Fill In Your Details
            </p>
            <form onSubmit={handleSubmit}>
              <p className="text-lg pb-4">Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className={`border border-t-0 border-l-0 border-r-0 focus:border-sky-500 outline-none focus:ring-2 w-5/6 h-6 mt-2 rounded-[10px] p-4 ${nameError ? 'border-red-500' : ''}`}
                aria-label="Name"
              />
              {nameError && (
                <p className="text-sm text-red-500 py-3">
                  Name must be more than 3 characters!
                </p>
              )}
              <p className="text-lg py-4">Email</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className={`border border-t-0 border-l-0 border-r-0 focus:border-sky-500 outline-none focus:ring-2 w-5/6 h-6 mt-2 rounded-[10px] p-4 ${emailError ? 'border-red-500' : ''}`}
                aria-label="Email"
              />
              {emailError && (
                <p className="text-sm text-red-500 py-3">
                  Please enter a valid email address!
                </p>
              )}
              <p className="text-lg py-4">Phone</p>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={handlePhone}
                className="border border-t-0 border-l-0 border-r-0 focus:border-sky-500 outline-none focus:ring-2 w-5/6 h-6 mt-2 rounded-[10px] p-4"
                aria-label="Phone"
              />
              <p className="text-lg pt-6">Message</p>
              <textarea
                name="message"
                value={message}
                onChange={handleMessage}
                className="border border-t-0 border-l-0 border-r-0 focus:border-sky-500 outline-none focus:ring-2 w-5/6 h-[200px]"
                aria-label="Message"
              ></textarea>
              <input
                type="submit"
                value={loading ? "Sending..." : "Send Message"}
                className="button my-16 hover:bg-blue-700 rounded h-12 text-white bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l py-3 shadow-800 font-semibold cursor-pointer flex item-center px-10 lg:px-16 text-xl lg:text-lg"
                disabled={loading}
              />
              {sent && (
                <div className="macrosoar_bg_darkblue w-[500px] rounded-2xl mx-auto my-12">
                  <p className="text-center text-sm text-white py-3">
                    Your message is received. We will get back to you soon!
                  </p>
                </div>
              )}
            </form>
          </div>
          <div className="md:w-2/5 bg-blue-500">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold mb-8 text-white text-center py-4">
                Send Us An Email
              </h1>
              <img src={form} alt="Contact form illustration" className="mx-auto" />
              <p className="text-white text-xl lg:text-3xl font-bold pt-6 text-center">
                Follow Us On
              </p>
              <div className="flex justify-between">
                <div className="mt-2 mx-8 md:mx-8 w-1/5 border-2 border-zinc-400" />
                <div className="mt-2 mx-8 md:mx-8 w-1/5 border-2 border-zinc-400" />
              </div>
              <div className="font-bold px-12 lg:px-16 text-white text-sm lg:text-lg">
                <ul>
                  <li className="py-6 flex">
                    <BsFillTelephoneFill className="mt-1" />
                    &nbsp;051-6125234
                  </li>
                  <li className="py-2 flex">
                    <MdEmail className="mt-1" />
                    &nbsp;info@invovision.io
                  </li>
                  <li className="py-2 flex lg:pr-20">
                    <MdLocationOn className="mt-1" />
                    &nbsp; Office #202,
                  </li>
                  <li className="flex lg:pr-20">
                    2nd floor, Ghousia Plaza, Jinnah Avenue, Blue Area, Islamabad
                  </li>
                </ul>
                <div className="flex py-10 gap-3">
                  <div className="p-4 border-2 rounded-[100px] group">
                    <a href="https://www.facebook.com/invovision" target="_blank" rel="noopener noreferrer">
                      <GrFacebookOption className="group-hover:text-blue-400" />
                    </a>
                  </div>
                  <div className="p-4 border-2 rounded-[100px] group">
                    <a href="https://www.linkedin.com/company/invovision/" target="_blank" rel="noopener noreferrer">
                      <GrLinkedinOption className="group-hover:text-blue-400" />
                    </a>
                  </div>
                  <div className="p-4 border-2 rounded-[100px] group">
                    <a href="https://www.instagram.com/invovision/" target="_blank" rel="noopener noreferrer">
                      <GrInstagram className="group-hover:text-blue-400" />
                    </a>
                  </div>
                  <div className="p-4 border-2 rounded-[100px] group">
                    <a href="https://www.youtube.com/channel/UC0PKJh_SkAKH83O_YlX9hdA" target="_blank" rel="noopener noreferrer">
                      <GrYoutube className="group-hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
