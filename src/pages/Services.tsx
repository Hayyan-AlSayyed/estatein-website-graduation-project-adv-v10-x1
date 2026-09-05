import PageHero from "../components/Hero/PageHero";
import PropertyManagementSection from "../components/sections/PropertyManagementSection";
import UnlockPropertySection from "../components/sections/UnlockPropertySection";
import SmartInvestmentsSection from "../components/sections/SmartInvestmentsSection";
import SiteAdvantage from "../components/sections/SiteAdvantage";


const Services = () => {
  return (
    <div className="bg-grey-08 light:bg-white-99 text-white light:text-grey-08">
      <PageHero
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        className="2xl:h-390 xl:h-315 h-278"
      />

      <SiteAdvantage />
      <UnlockPropertySection />
      <PropertyManagementSection />
      <SmartInvestmentsSection />
    </div>
  );
};

export default Services;
