import { Hero } from "./ServicesComponents/Hero";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { Introduction } from "./ServicesComponents/Introduction";
import breadcumb from "../assets/Blockchain.webp";
import blockchain from "../assets/blockchain.png";
export const BlockchainDevelopment = (prop) => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading="Blockchain Development"
        heroDetails="Blockchain ensures secure transactions."
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" It has the potential to revolutionize the way we conduct transactions and offers faster settlement times, while reducing the risk of fraud and errors. Experience the many benefits of blockchain for your business today! "
      />

      <WhyItMatters
        Img={blockchain}
        Heading="Blockchain Matters"
        Heading2="Provides transparency and traceability.
      "
        Details="Discover the many benefits of blockchain! By leveraging this secure and decentralized digital ledger technology, you can ensure secure transactions, enhance transparency and traceability, reduce costs, and enable fast and efficient transactions. Blockchain offers tamper-proof data storage, enhances trust between parties, and enables decentralized systems and applications. "
        Heading3=" Reduces costs and eliminates intermediaries."
        Card1="Enhances trust between parties"
        Card2="Blockchain enables fast and efficient transactions"
        Card3="Reduces costs and eliminates intermediaries"
      />
    </>
  );
};
