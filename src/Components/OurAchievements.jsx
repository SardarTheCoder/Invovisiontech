import ebridge_achievements from "../assets/celebrateawards2-1024x683.png";

export const OurAchievements = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex mx-auto flex-col sm:flex-row gap-5 my-5">
            <div className="sm:w-2/4">
              <h3 style={{color:'#1c57a6'}} className="text-3xl">Our Achievements</h3>
              <p className="py-5">
                Invovision.io Limited has seen tremendous progress in the short
                span since its inception. The commitment to quality, exemplary
                leadership and exceptional skills showcased by the company
                continue to grow its stature in the technology market and proved
                to be the best software company in Islamabad, Pakistan.
              </p>
              <p>
              This is evidenced by the widespread recognition it has received.
               WooCommerce, an outstanding open-source platform, currently powers over 
               25% of eCommerce websites worldwide. We are truly honored to have had the opportunity
                to engage in an inspiring conversation with such remarkable leaders in the eCommerce industry.
              </p>
            </div>
            <div className="sm:w-2/4">
              <img
                src={ebridge_achievements}
                alt={ebridge_achievements}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
