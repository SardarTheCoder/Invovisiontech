import FounderCard from "../Components/FounderCard";

import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";
import founder3 from "../assets/founder3.jpg";
export const OurFounders = () => {
  return (
    <>
      <div className="w-full">
        <div className=" px-6 max-w-[1280px] py-[100px]">
          <div className="    md:w-3/5 lg:w-3/6 mx-auto">
            <h1 className="text-center lg:text-5xl text-2xl font-bold my-6">
              Our Founders
            </h1>
            <p className="text-center lg:text-xl text-sm  ">
              Our founders are three highly qualified and competent individuals.
              Who are taking forward Ebridge with a strong sense of purpose and
              compassion.
            </p>
          </div>

          <div className="grid md:gap-[100px] grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:mx-6">
            <FounderCard img={founder1} name="Qaisar Satti" />
            <FounderCard img={founder2} name="Asad Ali" />
            <FounderCard img={founder3} name="Raja Usman Mehmood" />
          </div>
        </div>
      </div>
    </>
  );
};
