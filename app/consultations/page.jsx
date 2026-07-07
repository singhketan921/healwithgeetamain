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

export const dynamic = "force-dynamic";

const featureItems = [
  { title: "Experienced Healers", text: "Trusted by thousands", icon: PiUsersThree },
  { title: "Private & Confidential", text: "Your journey is safe", icon: PiShieldCheck },
  { title: "Flexible Sessions", text: "Online & Offline", icon: PiCalendarBlank },
  { title: "Holistic Approach", text: "Mind • Body • Soul", icon: PiHeart },
];

const consultationPresentation = [
  {
    title: "Personal Spiritual Guidance",
    description: "Gain clarity, direction and deeper understanding of your life's path.",
    image: "/assets/images/divine learning image.png",
    label: "Popular",
    price: "₹2,499",
  },
  {
    title: "Energy Healing Session",
    description: "Release blockages, restore balance and uplift your energy.",
    image: "/assets/images/stones.png",
    label: "Best Seller",
    price: "₹2,999",
  },
  {
    title: "Relationship & Harmony",
    description: "Improve relationships, resolve conflicts and create lasting harmony.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.10 (1).jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Career & Life Purpose",
    description: "Discover your true purpose and align your career with your soul's calling.",
    image: "/assets/images/learnings.jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Anxiety & Stress Relief",
    description: "Find inner peace, calm your mind and heal emotional stress.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (1).jpeg",
    label: "",
    price: "₹2,499",
  },
  {
    title: "Vastu & Energy Alignment",
    description: "Harmonize your space to attract peace, prosperity and positivity.",
    image: "/assets/images/astrology.jpg",
    label: "",
    price: "₹2,999",
  },
];

const processItems = [
  {
    title: "1. Book Your Session",
    text: "Choose a session that resonates with you.",
    icon: PiCalendarBlank,
  },
  {
    title: "2. Connect",
    text: "Share your concerns in a safe space.",
    icon: PiChatsCircle,
  },
  {
    title: "3. Receive Guidance",
    text: "Get personalized guidance and practical insights.",
    icon: PiFlowerLotus,
  },
  {
    title: "4. Transform",
    text: "Embark on your journey towards a better you.",
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
          <p>{item?.headline || item?.description || display.description}</p>
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
  const consultations = await fetchConsultations();

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Consultations" }]}
        title="Consultations for Every Journey"
        description="Personalized spiritual guidance to help you find clarity, healing and alignment in life."
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
      <ConsultationProcess />
      <SubscribeBand title="Stay inspired on your journey" text="Get updates, insights and exclusive offers." />
    </PublicPageShell>
  );
}
