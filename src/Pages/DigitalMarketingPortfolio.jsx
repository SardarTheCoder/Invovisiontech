import { ProjectCard } from "../Components/ProjectCard";
import { Hero } from "../Components/Hero";
import breadcumb from "../assets/breadcumb.webp";
import bereh from "../assets/bereh.png";
import white from "../assets/white.png";
import qissa from "../assets/qissa.png";

import mishal_weddings from "../assets/mishal_weddings.png";
import shanzay_salon from "../assets/shanzay_salon.png";
export const DigitalMarketingPortfolio = () => {
  return (
    <>
      <Hero
        heroHeading="Digital Marketing Porfolio "
        heroDetails="Our Recent Digital Marketing Services"
        heroImg={breadcumb}
      />
      {/* projects presenting  Cards area */}
      <div className="w-full">
        <div className="mx-auto max-w-[1280px] my-10">
          <ProjectCard
            ProjectImg={shanzay_salon}
            projectDetails=" Shanzay Saloon is a beauty parlor. "
            projectFrameWork=""
            platForm="Facebook, Instagram"
            projectButtonText="Visite Page"
            projectLink="https://www.facebook.com/shanzaysalonpk?mibextid=ZbWKwL"
          />

          <ProjectCard
            ProjectImg={mishal_weddings}
            projectDetails=" Mishal is an event management company. "
            projectFrameWork=""
            platForm="Facebook, Instagram"
            projectButtonText="Visite Page"
            projectLink="https://www.instagram.com/mishalweddings/"
          />

        <ProjectCard
            ProjectImg={bereh}
            projectDetails=" Bereh Constructions is a real estate company. "
            projectFrameWork=""
            platForm="Facebook, Instagram"
            projectButtonText="Visite Page"
            projectLink="https://www.facebook.com/berehmatika"
          />

      <ProjectCard
            ProjectImg={white}
            projectDetails=" White House is a Marque for Events and Weedings. "
            projectFrameWork=""
            platForm="Facebook, Instagram"
            projectButtonText="Visite Page"
            projectLink="https://www.facebook.com/WHMarquee"
          />


<ProjectCard
            ProjectImg={qissa}
            projectDetails=" Qissa Khawani is a food restaurant brand. "
            projectFrameWork=""
            platForm="Facebook, Instagram"
            projectButtonText="Visite Page"
            projectLink="https://www.facebook.com/qissakhwanipak/"
          />

        </div>
      </div>
    </>
  );
};
