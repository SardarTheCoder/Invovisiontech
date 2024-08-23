import { Hero } from "../Components/Hero";

import team from "../assets/team.avif";

import { OurMembers } from "../Components/OurMrmbers";

export default function OurTeam() {
  return (
    <>
      <Hero heroImg={team} heroHeading="Our Team" />

      
      
      <OurMembers />
    </>
  );
}
