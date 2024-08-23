import LeaderCard from "../Components/LeaderCard";
// importing leaders images
import leader1 from "../assets/leader1.jpg";
import leader2 from "../assets/leader2.jpg";
import leader3 from "../assets/leader3.jpg";
import leader4 from "../assets/leader4.jpg";
import leader5 from "../assets/leader5.jpg";
import leader6 from "../assets/leader6.jpg";
import leader7 from "../assets/leader7.jpg";
import leader8 from "../assets/leader8.jpg";
import leader9 from "../assets/leader9.jpg";
export const OurLeaders = () => {
  return (
    <>
      <div className="w-full ">
        <div className="mx-w-[1200] mx-auto px-6 py-[100px]">
          <div className="text-center my-10 mx-auto">
            <h1  style={{color:'#1c57a6'}} className="lg:text-5xl text-2xl font-bold my-6">Our Leads</h1>
            <p className="lg:text-xl text-sm px-4  leading-1 md:w-3/5 lg:w-3/6 mx-auto">
              Our team leaders are highly qualified information technology
              specialists with extensive IT industry expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6">
            <LeaderCard img={leader1} name="Raja Aman Ullah" />

            <LeaderCard img={leader2} name="Umar Farooq" />

            <LeaderCard img={leader3} name="Ubaid Ur Rehman" />
            <LeaderCard img={leader4} name="Ziyam Aslam" />
            <LeaderCard img={leader5} name="Shaheer Altaf" />
            <LeaderCard img={leader6} name="Azmat Ullah Ibrar" />
            <LeaderCard img={leader7} name="Ch. Hanan Tahir" />
            <LeaderCard
              img={leader8}
              name="fzal Hussain"
              name2="fzal Hussain"
            />
            <LeaderCard img={leader9} name="M.Furqan Nazir" />
          </div>
        </div>
      </div>
    </>
  );
};
