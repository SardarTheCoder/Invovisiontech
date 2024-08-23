import team2 from "../assets/team2.png";

const bounceUpDown = `
  @keyframes bounceUpDown {
    0%, 100% { transform: translatex(-12px); }
    50% { transform: translateY(8px); }
  }
`;

export const OurDifferentiator = () => {
  return (
    <>
      <style>
        {bounceUpDown}
      </style>
      <div className="w-full">
        <div className="max-w-[1280px] px-6 mx-auto">
          <div className="text-left lg:break-keep md:flex md:flex-row flex-col lg:px-24">
            <div className="md:w-2/5">
              <img 
                className="h-full pl-6 pt-8" 
                src={team2} 
                alt="Team" 
                style={{ animation: 'bounceUpDown 3s infinite' }} 
              />
            </div>
            <div className="md:w-3/5 md:pl-10">
              <h1 className="mt-20 py-4 font-bold text-sky-700 text-2xl lg:text-5xl">
                Our Differentiator
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
          </div>
        </div>
      </div>
    </>
  );
};
