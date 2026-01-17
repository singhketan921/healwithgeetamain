'use server';

import { google } from "googleapis";

function getCalendarConfig() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) {
    throw new Error("GOOGLE_CALENDAR_ID is not configured.");
  }
  return { calendarId };
}

function getOAuthConfig() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }
  return { clientId, clientSecret, refreshToken };
}

function getServiceAccountConfig() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!clientEmail || !privateKey) {
    return null;
  }
  return { clientEmail, privateKey };
}

function getCalendarClient() {
  const oauth = getOAuthConfig();
  if (oauth) {
    const auth = new google.auth.OAuth2({
      clientId: oauth.clientId,
      clientSecret: oauth.clientSecret,
    });
    auth.setCredentials({ refresh_token: oauth.refreshToken });
    return google.calendar({ version: "v3", auth });
  }

  const serviceAccount = getServiceAccountConfig();
  if (serviceAccount) {
    const auth = new google.auth.JWT({
      email: serviceAccount.clientEmail,
      key: serviceAccount.privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    return google.calendar({ version: "v3", auth });
  }

  throw new Error(
    "Google Calendar credentials are not configured. Provide OAuth or service account env vars."
  );
}

export async function createCalendarEvent({
  summary,
  description,
  startDateTime,
  endDateTime,
  timezone,
  attendees,
  location,
}) {
  const { calendarId } = getCalendarConfig();
  const calendar = getCalendarClient();

  const response = await calendar.events.insert({
    calendarId,
    sendUpdates: "all",
    requestBody: {
      summary,
      description,
      location,
      start: {
        dateTime: startDateTime,
        timeZone: timezone,
      },
      end: {
        dateTime: endDateTime,
        timeZone: timezone,
      },
      attendees: attendees?.length ? attendees : undefined,
    },
  });

  return response.data;
}
