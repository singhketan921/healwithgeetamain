'use server';

const DEFAULT_API_BASE = "https://graph.facebook.com/v19.0";

function getWhatsAppConfig() {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!accessToken || !phoneNumberId) {
    throw new Error("WhatsApp credentials are not configured.");
  }
  return {
    accessToken,
    phoneNumberId,
    templateName: process.env.WHATSAPP_TEMPLATE_NAME,
    languageCode: process.env.WHATSAPP_LANGUAGE_CODE || "en_US",
    apiBase: process.env.WHATSAPP_API_BASE || DEFAULT_API_BASE,
    defaultCountryCode: process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || "91",
  };
}

function normalizeWhatsAppNumber(rawNumber, defaultCountryCode) {
  if (!rawNumber) {
    return null;
  }
  const trimmed = String(rawNumber).trim();
  if (trimmed.startsWith("+")) {
    return trimmed;
  }
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) {
    return null;
  }
  if (digits.length === 10 && defaultCountryCode) {
    return `+${defaultCountryCode}${digits}`;
  }
  if (digits.length >= 11 && digits.length <= 15) {
    return `+${digits}`;
  }
  return null;
}

export async function sendWhatsAppBookingMessage({
  to,
  name,
  date,
  time,
  timezone,
  meetingLink,
}) {
  const config = getWhatsAppConfig();
  const normalized = normalizeWhatsAppNumber(to, config.defaultCountryCode);
  if (!normalized) {
    throw new Error("Invalid WhatsApp recipient number.");
  }

  const scheduleLabel = [date, time, timezone].filter(Boolean).join(" ");
  const payload = config.templateName
    ? {
        messaging_product: "whatsapp",
        to: normalized,
        type: "template",
        template: {
          name: config.templateName,
          language: { code: config.languageCode },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name || "Client" },
                { type: "text", text: scheduleLabel || "Scheduled" },
                { type: "text", text: meetingLink || "" },
              ],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to: normalized,
        type: "text",
        text: {
          body: `Your consultation is scheduled.${scheduleLabel ? `\nWhen: ${scheduleLabel}` : ""}${
            meetingLink ? `\nJoin: ${meetingLink}` : ""
          }`,
        },
      };

  const response = await fetch(`${config.apiBase}/${config.phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`WhatsApp send error: ${errorText}`);
  }

  return response.json();
}
