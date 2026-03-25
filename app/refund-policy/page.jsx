import LegalPolicyPage from "@/components/LegalPolicyPage";

export const metadata = {
  title: "Refund Policy | HealWithGeeta",
  description: "Refund and cancellation terms for HealWithGeeta and FaithHealers offerings.",
};

const sections = [
  {
    heading: "1. Scope",
    paragraphs: [
      "This Refund Policy applies to payments made on HealWithGeeta (FaithHealers) for consultations, healing sessions, courses, workshops, digital offerings, and physical products.",
    ],
  },
  {
    heading: "2. Consultations and Healing Sessions",
    items: [
      "Cancellations made at least 24 hours before the scheduled session are eligible for one free reschedule.",
      "Cancellations made less than 24 hours before the scheduled session are non-refundable.",
      "No-shows are non-refundable.",
      "If a session is cancelled by us due to unavoidable reasons, you may choose full refund or rescheduling.",
    ],
  },
  {
    heading: "3. Courses, Workshops, and Digital Programs",
    items: [
      "Refund requests are accepted within 7 calendar days of purchase only if less than 20% of the program or content has been accessed.",
      "After 7 days from purchase, or if substantial content has been consumed, fees are non-refundable.",
      "Downloadable or one-time digital products are non-refundable once access is granted.",
    ],
  },
  {
    heading: "4. Physical Products",
    items: [
      "Replacement or refund is available for damaged, defective, or incorrect products if reported within 48 hours of delivery with unboxing proof.",
      "Products must be unused and in original packaging for return eligibility.",
      "Personal-use, ritual, or customized products are non-returnable unless defective.",
    ],
  },
  {
    heading: "5. Refund Processing",
    paragraphs: [
      "Approved refunds are processed to the original payment method within 7 to 10 business days. Bank or payment-gateway processing timelines may vary.",
      "For orders paid via Razorpay, refunds are initiated through Razorpay to the original transaction source.",
    ],
  },
  {
    heading: "6. How to Request a Refund",
    paragraphs: [
      "To request a cancellation, reschedule, replacement, or refund, contact us with your order or booking reference and reason for request.",
    ],
    items: [
      "Email: hello@healwithgeeta.com",
      "WhatsApp: +91 98208 88862",
      "Contact Form: /contact",
    ],
  },
  {
    heading: "7. Abuse Prevention",
    paragraphs: [
      "We reserve the right to deny refund requests in cases of policy abuse, repeated misuse, fraudulent claims, or violation of our Terms and Conditions.",
    ],
  },
  {
    heading: "8. Policy Updates",
    paragraphs: [
      "We may revise this Refund Policy from time to time. Updated terms become effective from the revised effective date posted on this page.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPolicyPage
      title="Refund Policy"
      subtitle="This policy outlines cancellation, rescheduling, return, and refund rules for purchases and bookings made through HealWithGeeta (FaithHealers)."
      effectiveDate="March 25, 2026"
      sections={sections}
    />
  );
}
