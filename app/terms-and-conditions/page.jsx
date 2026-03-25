import LegalPolicyPage from "@/components/LegalPolicyPage";

export const metadata = {
  title: "Terms and Conditions | HealWithGeeta",
  description: "Terms and Conditions for using HealWithGeeta and FaithHealers services.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing this website or purchasing any service or product from HealWithGeeta (FaithHealers), you agree to these Terms and Conditions.",
      "If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Services and Eligibility",
    paragraphs: [
      "We offer consultations, healing sessions, courses, workshops, digital content, and selected products. All offerings are subject to availability and may be modified or withdrawn at our discretion.",
      "You confirm that the information you provide during booking or checkout is accurate and complete.",
    ],
  },
  {
    heading: "3. Pricing and Payments",
    items: [
      "All prices are listed in Indian Rupees (INR), unless stated otherwise.",
      "Payments are processed via secure payment gateways including Razorpay.",
      "A booking or order is confirmed only after successful payment authorization.",
      "Applicable taxes, gateway charges, or statutory levies may apply where required.",
    ],
  },
  {
    heading: "4. User Responsibilities",
    items: [
      "Use this website lawfully and do not attempt unauthorized access to any systems or data.",
      "Do not misuse, copy, distribute, or commercially exploit our proprietary content without written permission.",
      "Attend sessions and programs responsibly and on time based on your booking schedule.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "All website content, branding, text, media, course materials, and session frameworks are owned by HealWithGeeta (FaithHealers) unless otherwise stated and are protected under applicable intellectual property laws.",
    ],
  },
  {
    heading: "6. Disclaimer",
    paragraphs: [
      "Our services are intended for educational and wellness support purposes and are not a substitute for professional medical, psychiatric, legal, or financial advice.",
      "Individual outcomes may vary based on personal circumstances and participation.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, HealWithGeeta (FaithHealers) shall not be liable for indirect, incidental, special, or consequential damages arising from use of the website or services.",
    ],
  },
  {
    heading: "8. Cancellation and Refund",
    paragraphs: [
      "Cancellation and refund requests are governed by our Refund Policy. By making a purchase, you agree to the terms specified on the Refund Policy page.",
    ],
  },
  {
    heading: "9. Governing Law",
    paragraphs: [
      "These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of competent courts in Mumbai, Maharashtra.",
    ],
  },
  {
    heading: "10. Contact",
    items: [
      "Email: hello@healwithgeeta.com",
      "WhatsApp: +91 98208 88862",
      "Contact Form: /contact",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPolicyPage
      title="Terms and Conditions"
      subtitle="These Terms and Conditions govern your use of HealWithGeeta (FaithHealers) website and all associated services and purchases."
      effectiveDate="March 25, 2026"
      sections={sections}
    />
  );
}
