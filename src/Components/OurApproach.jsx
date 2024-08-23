import team from "../assets/team.png";
import './component.css'
export const OurApproach = () => {
  return (
    <>
      <div className="w-full ">
        <div className="max-w-[1280px] px-6 mx-auto">
          <div className="text-left lg:break-keep md:flex md:flex-row flex-col lg:px-24">
            <div className="md:w-3/5">
              <h1 style={{color:'#1c57a6'}} className="mt-20 py-4 font-bold text-2xl lg:text-5xl ">
                Our Approach
              </h1>

              <p className="lg:text-lg text-xs leading-5 md:tracking-wider md:py-4 text-slate-800">
                Our bespoke approach to software development and digital
                marketing will ensure you achieve a return on your investment.
                We take a deep dive into your business to uncover your USP, we
                then analyze your competitors before going ahead. Once we see
                success, we set up marketing automation enabling you to grow
                exponentially.
              </p>
            </div>
            <div className="md:w-2/5">
              <img className="h-full pl-6 pt-8 bouncing-image" src={team} alt="Team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


