export const Hero = (props) => {
  return (
    <>
 <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(28, 87, 166, 0.9), 
            rgba(38, 144, 206, 0.9),
            rgba(43, 173, 226, 0.9)
          ),
          url(${props.heroImg})
        `,
        minHeight: "75vh", // Adjust height as needed
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        overflow: "hidden", // Hide any overflow from the content
      }}
    >

        <div className=" max-w-[1280px] mx-auto px-6 ">
          <div className="py-[20px] sm:py-[50px] md:py-[20px] lg:py-[10px] xl:py-[100px] text-white">
            <h3 className="text-2xl lg:text-4xl text-center font-bold ">
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
