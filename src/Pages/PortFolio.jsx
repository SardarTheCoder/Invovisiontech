import { PortfolioCard } from "../Components/PortfolioCard";
import { Introduction } from "../Components/Introduction";
import portfolio from "../assets/portfolio.png";
import portfolio_webdevelopment from "../assets/portfolio_webdevelopment.jpeg";
import portfolio_apps from "../assets/portfolio_apps.jpeg";
import portfolio_uiux from "../assets/portfolio_uiux.jpeg";
import portfolio_digitalmarketing from "../assets/portfolio_digitalmarketing.jpeg";
import { Hero } from "../Components/Hero";

export const PortFolio = () => {
  return (
    <>
      <Hero
        heroImg={portfolio}
        heroHeading="Portfolio"
        heroDetails="Our Recent Projects"
      />

      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Custom Or Semi-Custom Web Designs To Maximize Business And
        Efficiency. Design is an indispensable element continually adding
        value to businesses. The slightest adjustment in improving
        experience or hinting value proposition can accomplish significant
        transformations. Which is why our designers believe their design
        will be considered impressive only if it embodies the needs of
        your business and your users simultaneously."
      />

      <div className="w-full">
        <div className="mx-auto px-6 max-w-[1280px]">
          <div className="gap-10 grid md:grid-col-1 lg:grid-cols-2 py-10">
            <PortfolioCard
              portfolioTitle="Web Development"
              portfolioImg={portfolio_webdevelopment}
              portfolioLink="/website-portfolio"
            />
            <PortfolioCard
              portfolioTitle="Apps Development"
              portfolioImg={portfolio_apps}
              portfolioLink="/mobile-app-portfolio"
            />
            <PortfolioCard
              portfolioTitle="Digital Marketing"
              portfolioImg={portfolio_digitalmarketing}
              portfolioLink="/digital-marketing-portfolio"
            />
            <PortfolioCard
              portfolioTitle="UI/UX"
              portfolioImg={portfolio_uiux}
              portfolioLink="/uiux-portfolio"
            />
          </div>
        </div>
      </div>
    </>
  );
};
