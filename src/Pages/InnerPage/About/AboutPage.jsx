import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import About from "../../../Component3/About/About";
import Service from "../../../Component3/Service/Service";
import TeamMember from "../../../Component3/TeamMember/TeamMember";

const AboutPage = () => {
  return (
    <>
      <BreadCrumb
        title="About Us"
        subtitle="New Jet Hardware & Electrical Supplies"
        description="A Danao City hardware and electrical store on Pio del Pilar Street. Open daily, with delivery, pipe threading, and gutter bending."
        breadcrumb={[{ label: "About" }]}
      />
      <About />
      <Service />
      <TeamMember />
    </>
  );
};

export default AboutPage;
