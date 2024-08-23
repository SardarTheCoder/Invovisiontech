export const Careers = () => {
  return (
    <>
      <div className="w-full bg-gray-50 py-[50px] ">
        <div className="max-w-[1280] px-6 mx-auto">
          <div className="text-center mt-10">
            <h1 className="lg:text-4xl  text-2xl py-10 font-bold ">
              Ebridge For The Right Person.
            </h1>
            <p className="md:text-lg md:w-3/5  mx-auto text-xs">
              an’t find an open position that matches your talents? Doesn’t
              matter. There’s always room in our
            </p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1280] px-6 mx-auto">
          <div className="text-center mt-10">
            <h1 className="lg:text-4xl  text-2xl py-10 font-bold ">
              Join Our Rich Newsletter
            </h1>
            <p className="md:text-lg md:w-3/5  mx-auto text-xs">
              We designed and tested prototypes that helped identify pain points
              in the account creation process. Together, we shaped the new
              standard.
            </p>
          </div>
          <div className="flex justify-center  ">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="my-16  lg:text-xl px-6 w-3/5 h-14 md:w-2/6 placeholder:text-slate-400  py-4  md:px-12 	 border-2xl bg-[#EEF4F5]"
            />

            <button className="my-16   lg:text-xl text-sm h-14 py-3 text-white px-6 md:px-10   bg-gradient-to-r  from-cyan-200 to-blue-500 hover:bg-gradient-to-l  md:py-4  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
