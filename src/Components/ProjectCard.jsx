export const ProjectCard = (props) => {
  return (
    <div className="border-slate-400 border-4 w-full  h-[600px] sm:h-[700px] md:h-[480px] shadow-2xl flex flex-col md:flex-row md:justify-center sm:items-center gap-[50px] my-10">
      <div className="w-2/2 md:w-2/4">
        <img src={props.ProjectImg} alt={props.projectImg} />
      </div>
      <div className="w-2/2 md:w-1/4">
        {props.projectDetails && (
          <h4 className="text-2xl md:text-3xl font-bold">Project Details:</h4>
        )}
        <p className=" font-medium text-gray-500 py-2">
          {props.projectDetails}
        </p>
        {props.projectFramework && (
          <h4 className="text-2xl md:text-3xl font-bold">Framework:</h4>
        )}
        {props.platForm && (
          <h4 className="text-2xl md:text-3xl font-bold">Platform:</h4>
        )}
        <p className="text-lg font-medium text-gray-500 py-2">
          {props.projectFrameWork}
        </p>
        <p className="text-lg font-medium text-gray-500 py-2">
          {props.platForm}
        </p>
        {props.projectLink && (
          <a href={props.projectLink}>
            <button className="bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l py-3 px-7 rounded-[4px] text-lg text-white font-bold">
              {props.projectButtonText}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
