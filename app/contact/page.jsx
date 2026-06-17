import ContactHero from "@/contactcomponents/ContactHero";
import ContactInfoCards from "@/contactcomponents/ContactInfoCards";
import ContactFormSection from "@/contactcomponents/ContactFormSection";
import VisitOurSacredPlace from "@/contactcomponents/VisitOurSacredPlace";
import CoursesFAQ from "@/coursescomponents/CoursesFAQ";
import StayConnected from "@/contactcomponents/StayConnected";
import BeginTransformationSection from "@/contactcomponents/BeginTransformationSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth pt-[calc(var(--navbar-height)+24px)]">
      

      <section id="contactinfo" className="w-full">
        <ContactInfoCards />
      </section>

      <section id="consultationOfferings" className="w-full">
        <ContactFormSection />
      </section>

      

      <section id="contactfaq" className="w-full">
        <CoursesFAQ />
      </section>

      <section id="stayconnected" className="w-full">
        <StayConnected />
      </section>

      <section id="begintransformation" className="w-full">
        <BeginTransformationSection />
      </section>
    </div>
  );
}
