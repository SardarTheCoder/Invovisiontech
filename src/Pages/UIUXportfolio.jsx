import { ProjectCard } from "../Components/ProjectCard";
import breadcumb from "../assets/breadcumb.webp";
import { Hero } from "../Components/Hero";
import my_groser_project from "../assets/my_groser_project.png";
import CPORTAL from "../assets/CPORTAL.png";
import Dark from "../assets/Dark.png";
import BLOOD from "../assets/BLOOD.png";
import NFT from "../assets/NFT.png";

import my_groser_project_admin from "../assets/my_groser_project_admin.png";
import tighten_up_worker from "../assets/tighten_up_worker.png";
import tighten_up_user from "../assets/tighten_up_user.png";
export const UIUXportfolio = () => {
  return (
    <>
      <Hero
        heroHeading="UIUX Porfolio "
        heroDetails="Our Recent UIUX Projects "
        heroImg={breadcumb}
      />
      {/* projects presenting  Cards area */}
      <div className="w-full">
        <div className="mx-auto  max-w-[1280px] my-10">
          <ProjectCard
            ProjectImg={my_groser_project}
            projectDetails="My Groser App "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />
          <ProjectCard
            ProjectImg={my_groser_project_admin}
            projectDetails="My Groser Admin App "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />
          <ProjectCard
            ProjectImg={tighten_up_worker}
            projectDetails="Tighten Up Worker App "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />
          <ProjectCard
            ProjectImg={tighten_up_user}
            projectDetails="Tighten Up User App "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />

<ProjectCard
            ProjectImg={CPORTAL}
            projectDetails="Complaint Cell Admin Website "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />


<ProjectCard
            ProjectImg={Dark}
            projectDetails="Dark Cars Admin Website "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />

<ProjectCard
            ProjectImg={BLOOD}
            projectDetails="Blood Donation App "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />

<ProjectCard
            ProjectImg={NFT}
            projectDetails="NFT Dashboard Website "
            projectFrameWork=""
            projectButtonText=""
            projectLink=""
          />
        </div>
      </div>
    </>
  );
};
