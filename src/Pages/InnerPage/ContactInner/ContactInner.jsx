import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import ContactBox from "./ContactBox/ContactBox";
import ContactForm from "./ContactForm";

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        title="Contact Us"
        subtitle="New Jet Hardware & Electrical Supplies"
        description="Corner Pio del Pilar and Severo Duterte Streets, Poblacion, Danao City, Cebu 6004. Open daily. Deliveries available."
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <ContactBox />
      <ContactForm />
    </>
  );
};

export default ContactInner;
