import { LogoCard } from "./LogoCard";
import pasha from "../assets/pasha.png";
import pseb from "../assets/pseb.png";
import secp from "../assets/secp.png";
export const OurAffiliations = () => {
  return (
    <>
      <div className="w-full my-5">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="text-center font-bold py-5">
            Legitimacy is every thing – Invovision (Pvt) Limited is certified and
            affiliated with
            Securities & Exchange Commission of Pakistan (SECP), and Pakistan
            Software Export Board (PSEB).
          </p>
          <div className="flex flex-col sm:flex-row gap-10 w-3/4 mx-auto py-5">
            {/* <LogoCard cardImg={pasha} /> */}
            <LogoCard cardImg={secp} />
            <LogoCard cardImg={pseb} />
          </div>
        </div>
      </div>
    </>
  );
};
