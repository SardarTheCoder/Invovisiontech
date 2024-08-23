export const Hero = (props) => {
  return (
    <>
      <div
        className="w-full  bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${props.heroImg})`,
          height: "63vh",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 ">
          <div className="py-[20px] sm:py-[50px] md:py-[20px] lg:py-[10px] xl:py-[100px] text-white">
            <h3  className="text-2xl lg:text-4xl text-center font-bold ">
              {props.heroHeading}
            </h3>
            <p className="md:w-4/6  px-4  text-center md:leading-10  text-xs md:px-4 mx-auto md:text-xl md:font-normal py-5 ">
              {props.heroDetails}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
