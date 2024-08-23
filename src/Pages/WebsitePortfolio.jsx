import { ProjectCard } from "../Components/ProjectCard";
import the_exonix_project from "../assets/the_exonix_project.png";
import my_mobiles_guru_project from "../assets/my_mobiles_guru_project.png";
import merab from "../assets/merab.png";
import eagle from "../assets/eagle.png";
import azlint from "../assets/azlint.jpeg";
import { Hero } from "../Components/Hero";
import breadcumb from "../assets/breadcumb.webp";
export const WebsitePortfolio = () => {
  return (
    <>
      <Hero
        heroHeading="Website Porfolio "
        heroDetails="Our Recent Websites Projects "
        heroImg={breadcumb}
      />
      {/* projects presenting  Cards area */}
      <div className="w-full">
        <div className="mx-auto  max-w-[1280px] my-10">
          <ProjectCard
            ProjectImg={the_exonix_project}
            projectDetails="The Econix is an online e-commers website. "
            projectFrameWork="WordPress"
            projectButtonText="Visite Website"
            projectLink="https://theeconix.cf/"
          />
          <ProjectCard
            ProjectImg={my_mobiles_guru_project}
            projectDetails="My Mobiles Guru is a mobiles and accessories. "
            projectFrameWork="React Js"
            projectButtonText="Visite Website"
            projectLink="https://theeconix.cf/"
        
        />
            
          <ProjectCard
            ProjectImg={merab}
            projectDetails="Merab.B is a clothing brand website for selling cloths online. "
            projectFrameWork="React Js"
            projectButtonText="Visite Website"
            projectLink="https://merabb.cf"
          />


<ProjectCard
            ProjectImg={eagle}
            projectDetails="Eagle Marketing is a real estate marketing and builders company. "
            projectFrameWork="WordPress"
            projectButtonText="Visite Website"
            projectLink="https://eaglemarketing.pk"
          />


<ProjectCard
            ProjectImg={azlint}
            projectDetails="EZLISTO is Pakistan’s Local directory that provides local search related services to users across Pakistan through platforms such as website & mobile website "
            projectFrameWork="WordPress"
            projectButtonText="Visite Website"
            projectLink="https://www.ezlisto.com"
          />

        </div>


        </div>

      
    </>
  );
};
