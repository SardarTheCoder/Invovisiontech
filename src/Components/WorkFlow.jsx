import ebridge_new_section from "../assets/ebridge_new_section.png";
export const WorkFlow = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto my-5">
          <p className="text-center text-xl mx-auto">
            Invovision is committed to providing its clients custom digital
            solutions that meet the global industry standards and local branding
            requirements. The digital workflow at Invovision involves 7 essential
            steps. These include:
          </p>
          <img src={ebridge_new_section} alt={ebridge_new_section} />
        </div>
      </div>
    </>
  );
};
