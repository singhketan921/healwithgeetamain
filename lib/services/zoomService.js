'use server';

const ZOOM_TOKEN_ENDPOINT = "https://zoom.us/oauth/token";
const ZOOM_MEETING_ENDPOINT = "https://api.zoom.us/v2/users/me/meetings";

function getZoomCredentials() {
  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;
  if (!accountId || !clientId || !clientSecret) {
    throw new Error("Zoom credentials are not configured.");
  }
  return { accountId, clientId, clientSecret };
}

async function fetchZoomAccessToken() {
  const { accountId, clientId, clientSecret } = getZoomCredentials();
  const basicToken = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(
    `${ZOOM_TOKEN_ENDPOINT}?grant_type=account_credentials&account_id=${accountId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoom token error: ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function createZoomMeeting({
  topic,
  startTime,
  durationMinutes,
  timezone,
  agenda,
  hostEmail,
}) {
  const accessToken = await fetchZoomAccessToken();
  const allowScheduleFor =
    process.env.ZOOM_USE_SCHEDULE_FOR === "true" && Boolean(hostEmail);
  const response = await fetch(ZOOM_MEETING_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
      type: 2,
      start_time: startTime,
      duration: durationMinutes,
      timezone,
      agenda,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        mute_upon_entry: true,
        waiting_room: true,
      },
      ...(allowScheduleFor ? { schedule_for: hostEmail } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoom meeting error: ${errorText}`);
  }

  return response.json();
}

export async function deleteZoomMeeting(meetingId) {
  const accessToken = await fetchZoomAccessToken();
  await fetch(`https://api.zoom.us/v2/meetings/${meetingId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
