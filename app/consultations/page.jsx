import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogPanel,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  derivePublicPrice,
} from "@/components/PublicPageUI";
import ConsultationSpinWheel from "@/components/ConsultationSpinWheel";
import Link from "next/link";
import {
  PiArrowRight,
  PiCalendarBlank,
  PiChatsCircle,
  PiClock,
  PiFlowerLotus,
  PiHeart,
  PiShieldCheck,
  PiUsersThree,
  PiVideoCamera,
} from "react-icons/pi";
import { fetchConsultations } from "@/lib/services/consultationService";
import { fetchSpinWheelSettings } from "@/lib/services/spinWheelService";

export const dynamic = "force-dynamic";

const featureItems = [
  { title: "Experienced Guidance", text: "More than 20 years of Reiki, astrology, numerology and tarot practice", icon: PiUsersThree },
  { title: "Private & Confidential", text: "Each appointment is held with care for your questions and situation", icon: PiShieldCheck },
  { title: "Flexible Sessions", text: "Visit the centre by appointment or choose an online session", icon: PiCalendarBlank },
  { title: "Holistic Approach", text: "Guidance can combine tarot, astrology, numerology, Vastu and healing", icon: PiHeart },
];

const consultationPresentation = [
  {
    title: "Personal Spiritual Guidance",
    description: "Receive guidance for situations where you need clarity, decision making and course correction.",
    image: "/assets/images/divine learning image.png",
    label: "Popular",
    price: "₹2,499",
  },
  {
    title: "Energy Healing Session",
    description: "Reiki and spiritual healing support the removal of emotional and energetic blocks.",
    image: "/assets/images/stones.png",
    label: "Best Seller",
    price: "₹2,999",
  },
  {
    title: "Relationship & Harmony",
    description: "Relationship concerns can be supported through Reiki, tarot, face reading and practical remedies.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.10 (1).jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Career & Life Purpose",
    description: "Career and business questions can be explored through astrology, numerology, tarot and Reiki.",
    image: "/assets/images/learnings.jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Anxiety & Stress Relief",
    description: "Counselling and healing practices help identify root causes and support emotional release.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (1).jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Vastu & Energy Alignment",
    description: "Kundli Vastu guidance helps identify home or workplace blocks and simple corrective remedies.",
    image: "/assets/images/astrology.jpg",
    label: "",
    price: "₹2,999",
  },
];

const processItems = [
  {
    title: "1. Book Your Session",
    text: "Choose a consultation area such as tarot, astrology, numerology, face reading or Vastu.",
    icon: PiCalendarBlank,
  },
  {
    title: "2. Connect",
    text: "Share your question, background and any birth details or numbers needed for the reading.",
    icon: PiChatsCircle,
  },
  {
    title: "3. Receive Guidance",
    text: "Receive insight into your situation along with simple remedies wherever they are relevant.",
    icon: PiFlowerLotus,
  },
  {
    title: "4. Transform",
    text: "Use the guidance to make clearer decisions and move forward with practical spiritual support.",
    icon: PiHeart,
  },
];

function ConsultationCard({ item, display, index }) {
  const id = item?.id ?? item?._id ?? index;
  const price = derivePublicPrice(item);
  return (
    <Link className="consultation-card-link" href={`/consultations/${id}`}>
      <article className="consultation-card">
        <div className="consultation-card__image">
          {item?.label || item?.badge || display.label ? <span>{item?.label || item?.badge || display.label}</span> : null}
          <img src={item?.image || display.image} alt="" />
        </div>
        <img
          className="consultation-card__avatar"
          src="/assets/images/story-meera.png"
          alt=""
          aria-hidden="true"
        />
        <div className="consultation-card__body">
          <h2>{item?.title || display.title}</h2>
          <p className="public-card-description">{item?.headline || item?.description || display.description}</p>
          <span className="public-card-read-more">Read more</span>
          <div className="consultation-card__meta">
            <span>
              <PiClock aria-hidden="true" />
              60 min
            </span>
            <span>
              <PiVideoCamera aria-hidden="true" />
              Online / Offline
            </span>
          </div>
          <div className="consultation-card__footer">
            <strong>{price.price !== "On request" ? price.price : display.price}</strong>
            <span>View Details</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ConsultationProcess() {
  return (
    <section className="consultation-process">
      <h2>Our Consultation Process</h2>
      <div className="consultation-process__grid">
        {processItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <span className="consultation-process__icon">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
              {index < processItems.length - 1 ? <PiArrowRight className="consultation-process__arrow" aria-hidden="true" /> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default async function ConsultationsPage() {
  const [consultations, spinWheelSettings] = await Promise.all([
    fetchConsultations(),
    fetchSpinWheelSettings(),
  ]);
  const winProbability =
    typeof spinWheelSettings?.winProbability === "number"
      ? spinWheelSettings.winProbability
      : 0.1;

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Consultations" }]}
        title="Consultations for Every Journey"
        description="Receive focused guidance through tarot, astrology, numerology, face reading, Vastu and healing insight so your next step feels clearer and more grounded."
        image="/assets/images/consultations-hero-still-life.png"
      />
      <FeatureStrip items={featureItems} />
      <PublicCatalogPanel>
        <CatalogToolbar
          filters={[
            "All Consultations",
            "Spiritual Guidance",
            "Healing Sessions",
            "Relationship & Life",
            "Career & Purpose",
            "Energy Healing",
          ]}
        />
        <PublicCardGrid>
          {(consultations || []).slice(0, 6).map((item, index) => {
            const display = consultationPresentation[index] || {};
            return (
              <ConsultationCard key={item.id ?? item._id ?? index} item={item} display={display} index={index} />
            );
          })}
        </PublicCardGrid>
      </PublicCatalogPanel>
      <ConsultationSpinWheel winProbability={winProbability} />
      <ConsultationProcess />
      <SubscribeBand title="Stay inspired on your journey" text="Get spiritual notes, session updates and practical guidance for clearer everyday choices." />
    </PublicPageShell>
  );
}
