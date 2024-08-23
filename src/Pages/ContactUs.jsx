import react from "react";
import { Hero } from "../Components/Hero";
import { Introduction } from "../Components/Introduction";

import breadcumb from "../assets/contact.webp";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <>
      <Hero heroImg={breadcumb} heroHeading="Contact Us" />
      <Introduction
        IntroHeading="Let’s Take Your Business Forward"
        IntroDetails="Our custom IT solutions revolutionize businesses. Work with us today to expand your business over unchartered horizons!"
      />
      <ContactForm />
      
    </>
  );
}
