import "./contactUs.css";
import factory_location from "../../assets/factory-location.png";

import ContactDetail from "./components/ContactDetail";
import LocationImage from "./components/LocationImage";

export default function ContactUsSection() {
  return (
    <section className="contactus-section">
      <h1 className="section-title">Contact Us</h1>
      <div className="flex flex-col md:flex-row m-2 md:m-8">
        <div className="flex flex-col w-full md:w-3/7 py-4 md:p-8 justify-center text-left">
          <ContactDetail
            icon={<i className="fa-solid fa-square-phone" />}
            text={"08043874969"}
          />
          <ContactDetail
            icon={<i class="fa-regular fa-envelope" />}
            text={"info@sudhaya.com"}
          />
          <ContactDetail
            icon={<i class="fa-solid fa-location-dot" />}
            text={
              "2nd Stage, 50, SLV Industrial Estate, 8th Main Road, Peenya, Brisk Tech Engineers, Bengaluru-560058, Karnataka, India"
            }
          />
        </div>
        <div className="w-full md:w-4/7 p-2 md:p-6">
          <LocationImage src={factory_location} />
        </div>
      </div>
    </section>
  );
}
