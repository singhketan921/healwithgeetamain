const consultationChannels = Object.freeze([
  {
    id: "email",
    label: "Email",
    value: "hello@healwithgeeta.com",
    note: "Replies within 24 hours, Monday to Friday.",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+1 (555) 010-2025",
    note: "Available for urgent follow-ups between 10am-4pm IST.",
  },
  {
    id: "location",
    label: "Sacred Studio",
    value: "Hauz Khas, New Delhi (by appointment only)",
    note: "Healing studio with crystal gridding and sound temple.",
  },
]);

const stayConnected = Object.freeze([
  { id: "instagram", platform: "Instagram", handle: "@healwithgeeta", url: "https://instagram.com/healwithgeeta" },
  { id: "youtube", platform: "YouTube", handle: "HealWithGeeta", url: "https://youtube.com/@healwithgeeta" },
  { id: "newsletter", platform: "Newsletter", handle: "Join the Inner Circle", url: "https://healwithgeeta.com/newsletter" },
]);

export function getContactChannels() {
  return consultationChannels;
}

export function getStayConnectedLinks() {
  return stayConnected;
}
