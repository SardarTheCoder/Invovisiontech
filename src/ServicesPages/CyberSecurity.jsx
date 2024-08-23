import { Hero } from "./ServicesComponents/Hero";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { Introduction } from "./ServicesComponents/Introduction";
import breadcumb from "../assets/breadcumb.webp";
import cyber_security from "../assets/cyber_security.png";
export const CyberSecurity = (prop) => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading="Cyber Security"
        heroDetails="Data breaches can be prevented with cybersecurity."
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" We provide wide range of cyber security services. Our security team will help you quantify and prioritize your risks, help detect and respond to threats, unify your organization on security priorities to accelerate business transformation. "
      />

      <WhyItMatters
        Img={cyber_security}
        Heading="Why Cyber Security Matters"
        Heading2="Compliance with regulations is important"
        Details="Cybersecurity is the practice of protecting electronic devices, networks, and sensitive information from unauthorized access, theft, or damage. It involves implementing various measures, such as firewalls, encryption, and access controls, to ensure the confidentiality, integrity, and availability of digital assets. Cybersecurity is critical for organizations of all sizes, as cyber attacks can result in significant financial losses, reputational damage, and legal liabilities. By implementing effective cybersecurity measures, organizations can prevent cyber attacks, maintain the trust of their customers, and enhance overall business resilience."
        Heading3="Cybersecurity improves productivity"
        Card1="Cybersecurity enhances overall business resilience."
        Card2="Cybersecurity measures are essential for modern businesses.."
        Card3="Cybersecurity protects against online threats."
      />
    </>
  );
};
