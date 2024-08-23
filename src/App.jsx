import "./App.css";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Services } from "./pages/Services";
import { PortFolio } from "./pages/PortFolio";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Navbar from "./Pages/Navbar";

import { WebsitePortfolio } from "./Pages/WebsitePortfolio";
import { MobileAppsPortfolio } from "./Pages/MobileAppsPortfolio";
import { DigitalMarketingPortfolio } from "./Pages/DigitalMarketingPortfolio";
import { UIUXportfolio } from "./Pages/UIUXportfolio";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppDevelopment } from "./ServicesPages/AppDevelopment";
import { PaidAdvertising } from "./ServicesPages/PaidAdvertising";
import { SocialMediaMarketing } from "./ServicesPages/socialMediaMarketing";
import { EcommerceDvelopment } from "./ServicesPages/EcommerceDvelopment";
import { SearchEngineOptimization } from "./ServicesPages/SearchEngineOptimization";
import { CostumWebsiteDevelopment } from "./ServicesPages/CostumWebsiteDevelopment";
import { GraphicsDesign } from "./ServicesPages/GraphicsDesign";
import { CyberSecurity } from "./ServicesPages/CyberSecurity";
import { AiDevelopment } from "./ServicesPages/AiDevelopment";
import { ARVRappDevelopment } from "./ServicesPages/ARVRappDevelopment";
import { BlockchainDevelopment } from "./ServicesPages/BlockchainDevelopment";

import { Careers } from "./Pages/Careers";
import { Faqs } from "./Pages/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="aap-development" element={<AppDevelopment />} />
          <Route path="paid-advertising" element={<PaidAdvertising />} />
          <Route path="graphics-design" element={<GraphicsDesign />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="ai-development" element={<AiDevelopment />} />
          <Route path="arvr_app_development" element={<ARVRappDevelopment />} />
          <Route
            path="blockchain_development"
            element={<BlockchainDevelopment />}
          />

          <Route
            path="social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="e-commerce-development"
            element={<EcommerceDvelopment />}
          />
          <Route
            path="search-engine-optimization"
            element={<SearchEngineOptimization />}
          />
          <Route
            path="costum-website-development"
            element={<CostumWebsiteDevelopment />}
          />

          <Route path="portfolio" element={<PortFolio />} />
          <Route path="website-portfolio" element={<WebsitePortfolio />} />
          <Route
            path="mobile-app-portfolio"
            element={<MobileAppsPortfolio />}
          />
          <Route
            path="digital-marketing-portfolio"
            element={<DigitalMarketingPortfolio />}
          />
          <Route path="uiux-portfolio" element={<UIUXportfolio />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
