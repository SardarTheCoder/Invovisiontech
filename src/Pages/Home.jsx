import { HomeHero } from "../Components/HomeHero";
import { Leading } from "../Components/Leading";
import { WhatWeOffer } from "../Components/WhatWeOffer";
import { BehindOurSuccess } from "../Components/BehindOurSuccess";
import { OurExperties } from "../Components/OurExperties";
import { ReasonsToChooseUs } from "../Components/ReasonsToChooseUs";
// import { MetaTags } from "react-meta-tags";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Leading />

      {/*<Helmet>
        <title>testing</title>
        <meta
          name="Description"
          content="Vivo V25e price in Pakistan, daily updated Vivo phones including specs &amp; information : WhatMobile.com.pk : Vivo V25e price Pakistan :"
        />
        <meta
          name="Keywords"
          content="Vivo V25e, Vivo V25e Price, V25e, Vivo V25e price Pakistan, Vivo V25e Pakistan, V25e Price,  specification, Vivo V25e in pakistan, Vivo V25e review, Vivo V25e price in Pakistan, comparison, zone"
        />
        <meta name="sitecode" content="PK" />
        <meta name="last-modified" content="2023-03-23" />
        <meta property="fb:admins" content="WhatMobile" />
        <meta
          property="og:title"
          content="Vivo V25e Price in Pakistan &amp; Specifications - WhatMobile"
        />
        <meta
          property="og:description"
          content="Vivo V25e price in Pakistan, daily updated Vivo phones including specs &amp; information : WhatMobile.com.pk : Vivo V25e price Pakistan :"
        />
        <meta property="fb:app_id" content="1451235568231998" />
        <meta
          property="og:image"
          content="https://www.whatmobile.com.pk/admin/images/Vivo/VivoV25e-b.jpg"
        />
        <meta property="og:site_name" content="WhatMobile" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.whatmobile.com.pk/Vivo_V25e"
        />
      </Helmet> */}

      {/* <MetaTags>
        <title>Page 1</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta
          property="og:image"
          content="https://www.whatmobile.com.pk/admin/images/Vivo/VivoV25e-b.jpg"
        />
      </MetaTags> */}
      <WhatWeOffer />
      <BehindOurSuccess />
      <OurExperties />
      <ReasonsToChooseUs />
    </>
  );
};
