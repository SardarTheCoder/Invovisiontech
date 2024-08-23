import { ProjectCard } from "../Components/ProjectCard";
import { Hero } from "../Components/Hero";
import breadcumb from "../assets/breadcumb.webp";
import dukaan_project from "../assets/dukaan_project.jpg";
export const MobileAppsPortfolio = () => {
  return (
    <>
      <Hero
        heroHeading="Mobile Apps Porfolio "
        heroDetails="Our Recent Mobile Apps Projects "
        heroImg={breadcumb}
      />
      {/* projects presenting  Cards area */}
      <div className="w-full">
        <div className=" mx-6 max-w-[1280px] my-10">
          <ProjectCard
            ProjectImg={dukaan_project}
            projectDetails=" Dukaan App is an app for your daily business advertisement for free. you can register your business details with dukaan and thousands of users can see your business through dukaan. Dukaan app has been develop for both service providers and consumers. Service provider can register their business by using dukaan app. "
            projectFrameWork="WordPress"
            projectButtonText="Visite App"
            projectLink="https://play.google.com/store/apps/details?id=dukan.online.shoping.india.pakistan.eservices"
          />
        </div>
      </div>
    </>
  );
};
