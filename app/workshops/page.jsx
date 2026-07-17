import {
  FeatureStrip,
  PublicHero,
  PublicPageShell,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import { PiCalendarCheck, PiMonitorPlay, PiSparkle, PiUsersThree } from "react-icons/pi";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Workshops - HealWithGeeta",
  description: "Register your interest for upcoming live workshops and sacred learning experiences with Geeta.",
};

export default async function WorkshopsPage() {
  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Workshops" }]}
        title="Register for Upcoming Workshops"
        description="Share your interest and contact details. We will notify you when the next live workshop opens for registration."
        image="/assets/images/hero image faith healers.png"
      />
      <FeatureStrip
        items={[
          { title: "Live Sessions", text: "Learn in a focused real-time container", icon: PiMonitorPlay },
          { title: "Guided Rituals", text: "Practice with structure and support", icon: PiSparkle },
          { title: "Limited Seats", text: "Intimate groups for better attention", icon: PiUsersThree },
          { title: "Clear Schedule", text: "Dates and timing shared upfront", icon: PiCalendarCheck },
        ]}
      />
      <WorkshopRegistrationForm />
      <WhyLearnBand
        title="Why Join a Workshop?"
        items={[
          { title: "Focused Container", text: "Step into practice with clear intention" },
          { title: "Live Support", text: "Receive guidance while the work unfolds" },
          { title: "Ritual Practice", text: "Learn tools you can repeat at home" },
          { title: "Shared Energy", text: "Grow with a like-minded group" },
        ]}
      />
    </PublicPageShell>
  );
}
