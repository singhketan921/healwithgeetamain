import LegalPolicyPage from "@/components/LegalPolicyPage";

export const metadata = {
  title: "Privacy Policy | HealWithGeeta",
  description: "Privacy Policy for HealWithGeeta and FaithHealers services.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We collect information that you submit directly to us when you contact us, book consultations, enroll in courses, place orders, or subscribe to updates.",
    ],
    items: [
      "Identity details such as full name.",
      "Contact details such as email address and phone or WhatsApp number.",
      "Transaction details such as order amount, service selected, payment status, and billing information.",
      "Technical data such as IP address, browser type, and usage analytics collected through cookies or similar tools.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    items: [
      "To provide and manage consultations, healings, courses, workshops, digital products, and physical product orders.",
      "To process payments securely through authorized payment partners including Razorpay.",
      "To send confirmations, service updates, invoices, and customer support responses.",
      "To prevent fraudulent activity, maintain platform security, and comply with legal obligations.",
      "To improve website performance and user experience.",
    ],
  },
  {
    heading: "3. Payments and Data Security",
    paragraphs: [
      "Payment transactions are processed via secure third-party gateways. We do not store complete card or UPI credentials on our servers.",
      "We implement reasonable administrative and technical safeguards to protect personal data. While we follow industry-standard security practices, no system can guarantee absolute security.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    paragraphs: [
      "We do not sell your personal information. We may share limited information with trusted service providers only as needed for business operations.",
    ],
    items: [
      "Payment and banking partners for transaction processing.",
      "Logistics or fulfillment partners for product delivery, where applicable.",
      "Technology and communication providers for hosting, analytics, scheduling, and notifications.",
      "Government or legal authorities where required by law.",
    ],
  },
  {
    heading: "5. Cookies and Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to remember preferences, understand site usage, and optimize user experience. You can modify cookie settings through your browser.",
    ],
  },
  {
    heading: "6. Data Retention",
    paragraphs: [
      "We retain information only for as long as reasonably necessary to provide services, resolve disputes, keep financial records, and meet legal or regulatory requirements.",
    ],
  },
  {
    heading: "7. Your Rights",
    paragraphs: [
      "You may request access, correction, or deletion of your personal information, subject to legal and operational requirements.",
      "To make a privacy request, contact us using the details below.",
    ],
  },
  {
    heading: "8. Contact",
    items: [
      "Email: hello@healwithgeeta.com",
      "WhatsApp: +91 98208 88862",
      "Contact Form: /contact",
    ],
  },
  {
    heading: "9. Policy Updates",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Revised versions become effective from the updated effective date posted on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPolicyPage
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how HealWithGeeta (FaithHealers) collects, uses, protects, and processes your personal information when you use our website, products, and services."
      effectiveDate="March 25, 2026"
      sections={sections}
    />
  );
}
