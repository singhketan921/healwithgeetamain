const consultationChannels = Object.freeze([
  {
    id: "email",
    label: "Email",
    value: "faithhealersindia71@gmail.com",
    note: "Replies within 24 hours, Monday to Friday.",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 98996 78977",
    note: "Available for urgent follow-ups between 10am-4pm IST.",
  },
  {
    id: "location",
    label: "Sacred Studio",
    value: "FAITH HEALERS INDIA, Kings Food, Basement Floor, 4D/2, Block 4A Road, Old Rajendra Nagar, New Delhi, Central Delhi, Delhi, 110060",
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
