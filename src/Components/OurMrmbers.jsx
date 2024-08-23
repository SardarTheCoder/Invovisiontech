import TeamCard from "../Components/TeamCard";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team33.jpeg";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
// import team7 from "../assets/team7.jpg";
// import team8 from "../assets/team8.jpg";
// import team9 from "../assets/team9.jpg";
// import team10 from "../assets/team10.jpg";
// import team11 from "../assets/team11.jpg";
// import team12 from "../assets/team12.jpg";
// import team13 from "../assets/team13.jpg";
// import team14 from "../assets/team14.jpg";
// import team15 from "../assets/team15.jpg";
// import team16 from "../assets/team18.jpg";
// import team17 from "../assets/team17.jpg";
// import team18 from "../assets/team18.jpg";
// import team19 from "../assets/team19.jpg";
// import team20 from "../assets/team20.jpg";
// import team21 from "../assets/team21.jpg";
// import team22 from "../assets/team22.jpg";
// import team23 from "../assets/team23.jpg";
// import team24 from "../assets/team24.jpg";
// import team25 from "../assets/team25.jpg";
// import team26 from "../assets/team26.jpg";
// import team27 from "../assets/team27.jpg";

export const OurMembers = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 py-5">
          <div className="text-center my-10">
            <h1 className="lg:text-5xl text-sky-700 text-2xl font-bold my-6">Our Team</h1>
            <p className="lg:text-xl text-sm px-4  leading-1 md:w-3/5 lg:w-3/6 mx-auto">
              Our developers are highly qualified information technology
              specialists with extensive IT industry expertise.
            </p>
          </div>
          <div className="grid  gap-10 md:grid-cols-3 lg:grid-cols-5">
            <TeamCard img={team1} name="Tanveer Ahmed"/>
            <TeamCard img={team2} name="Hussain Munir" />
            <TeamCard img={team3} name="Ali Irtaza" />
            <TeamCard img={team4} name="M. RIZWAN MUGHAL" />
            <TeamCard img={team5} name="Adil Zaman" />
            <TeamCard img={team6} name="Atif_Bosan" />
            {/* <TeamCard img={team7} name="Zeeshan Ali" />
            <TeamCard img={team8} name="Mansoor Ahmad" />
            <TeamCard img={team9} name="M. Shakaib Sarwar" />
            <TeamCard img={team10} name="Hamza Ali" />
            <TeamCard img={team11} name="Ali Zeeshan" />
            <TeamCard img={team12} name="Muhammad Asif" />
            <TeamCard img={team13} name="Maria Imam" />
            <TeamCard img={team14} name="Hammad Ali" />
            <TeamCard img={team15} name="Zunaira Saeed" />
            <TeamCard img={team16} name="Hashim Khan" />
            <TeamCard img={team17} name="Malik Atif" />
            <TeamCard img={team18} name="Baseer Satti" />
            <TeamCard img={team19} name="Saniya Rizwan" />
            <TeamCard img={team20} name="Sarmad Saleem" />
            <TeamCard img={team21} name="M. Zahoor Asif" />
            <TeamCard img={team22} name="Noman Yasin" />
            <TeamCard img={team23} name="Irshad Saeed" />
            <TeamCard img={team24} name="Muhammad Aaqil" />
            <TeamCard img={team25} name="Hamza Shakeel" />
            <TeamCard img={team26} name="Kausar Fatmi" />
            <TeamCard img={team27} name="Urooj Murtaza" /> */}
          </div>
        </div>
      </div>
    </>
  );
};
