import { fetchBookings } from "@/lib/services/bookingService";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return dateString ?? "";
  }
}

export default async function AdminBookingsPage() {
  const bookings = await fetchBookings();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Bookings</h1>
        <p className="text-sm text-[#7a736c]">
          Latest booking requests captured on the site.
        </p>
      </header>

      <section className="rounded-2xl border border-[#e7dfd6] bg-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <div className="px-6 py-4 border-b border-[#e7dfd6] flex items-center justify-between">
          <span className="text-sm text-[#7a736c]">
            Showing {bookings.length} entries
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#6b625a]">
            <thead className="bg-[#f4efe9] text-xs uppercase tracking-[0.2em] text-[#9a938c]">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Preferred Slot</th>
                <th className="px-6 py-3">Notes</th>
                <th className="px-6 py-3">Zoom</th>
                <th className="px-6 py-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-[#9a938c]"
                  >
                    No bookings captured yet.
                  </td>
                </tr>
              )}
              {bookings.map((booking) => (
                <tr
                  key={booking.id ?? booking._id}
                  className="border-t border-[#e7dfd6]"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#6b625a]">
                      {booking.name ?? "Unknown"}
                    </div>
                    <div className="text-xs text-[#9a938c]">
                      {booking.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 capitalize">{booking.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <div>{booking.phone ?? "-"}</div>
                    <div className="text-xs text-[#9a938c]">
                      {booking.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div>{booking.preferredDate ?? "-"}</div>
                    <div className="text-xs text-[#9a938c]">
                      {booking.preferredTime ?? ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#7a736c]">
                    {booking.notes ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {booking.zoomJoinUrl ? (
                      <a
                        href={booking.zoomJoinUrl}
                        className="text-[#6b625a] underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Join link
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {formatDate(booking.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
