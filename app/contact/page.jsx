import {
  FeatureStrip,
  PublicHero,
  PublicInfoCard,
  PublicPageShell,
  PublicSection,
  SubscribeBand,
} from "@/components/PublicPageUI";
import { PiClock, PiEnvelopeSimple, PiMapPin, PiPhone, PiSparkle } from "react-icons/pi";

const details = [
  { title: "Email", value: "hello@sacredpathways.com", icon: PiEnvelopeSimple },
  { title: "Phone", value: "+91 98765 43210", icon: PiPhone },
  { title: "Location", value: "New Delhi, India", icon: PiMapPin },
  { title: "Working Hours", value: "Mon - Sat | 10 AM - 6 PM", icon: PiClock },
];

export default function ContactPage() {
  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact Us"
        description="Book a consultation or ask about courses, healing sessions and personal guidance."
        image="/assets/images/contact-still-life-transparent.png"
      />
      <FeatureStrip
        items={[
          { title: "Quick Replies", text: "We respond during working hours", icon: PiEnvelopeSimple },
          { title: "Bookings", text: "Ask about courses, healing and consultations", icon: PiSparkle },
          { title: "Phone Support", text: "Call or WhatsApp for urgent questions", icon: PiPhone },
          { title: "Sacred Space", text: "Guidance with care and clarity", icon: PiMapPin },
        ]}
      />
      <PublicSection>
        <div className="public-detail">
          <main>
            <PublicInfoCard title="Send a message">
              <form className="public-contact-form">
                <input placeholder="Full Name" aria-label="Full Name" />
                <input placeholder="Email Address" aria-label="Email Address" type="email" />
                <input placeholder="Phone Number" aria-label="Phone Number" />
                <select aria-label="Service Interested In" defaultValue="">
                  <option value="" disabled>Service Interested In</option>
                  <option>Online Courses</option>
                  <option>Consultations</option>
                  <option>Healings</option>
                </select>
                <textarea placeholder="Message" aria-label="Message" rows={5} />
                <button className="public-detail__side-cta" type="submit">Send Message</button>
              </form>
            </PublicInfoCard>
          </main>
          <aside>
            <div>
              <h2>Contact Details</h2>
              <div className="public-contact-details">
                {details.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title}>
                      <Icon aria-hidden="true" />
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.value}</small>
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </PublicSection>
      <SubscribeBand title="Stay inspired on your journey" text="Get updates on courses, offers and spiritual insights." />
    </PublicPageShell>
  );
}
