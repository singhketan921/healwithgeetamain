import { fetchBookings } from "@/lib/services/bookingService";
import { fetchContactMessages } from "@/lib/services/contactService";

export const metadata = {
  title: "Admin Dashboard • HealWithGeeta",
  description:
    "Internal view of the latest bookings and contact messages captured via the website.",
};

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return dateString ?? "—";
  }
}

export default async function AdminDashboardPage() {
  const [bookings, contactMessages] = await Promise.all([
    fetchBookings(),
    fetchContactMessages(),
  ]);

  return (
    <div className="min-h-screen bg-[#EAE4DC] py-14 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            HealWithGeeta Internal
          </p>
          <h1 className="font-serif text-4xl font-semibold text-charcoal">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Review the latest booking submissions and contact enquiries captured
            from the website. This page reads directly from MongoDB, so the data
            reflects your live backend.
          </p>
        </header>

        <section className="bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Latest Bookings
              </p>
              <h2 className="font-semibold text-xl text-charcoal">
                Consultations / Healings / Courses
              </h2>
            </div>
            <span className="text-sm text-gray-500">
              Showing {bookings.length} recent entries
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#EAE4DC] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Preferred Slot</th>
                  <th className="px-6 py-3">Notes</th>
                  <th className="px-6 py-3">Created</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-gray-400"
                    >
                      No bookings captured yet.
                    </td>
                  </tr>
                )}
                {bookings.map((booking) => (
                  <tr
                    key={booking.id ?? booking._id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">
                        {booking.name ?? "—"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {booking.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize">
                      {booking.type ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{booking.phone ?? "—"}</div>
                      <div className="text-xs text-gray-500">
                        {booking.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{booking.preferredDate ?? "—"}</div>
                      <div className="text-xs text-gray-500">
                        {booking.preferredTime ?? ""}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {booking.notes ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500">
                      {formatDate(booking.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Contact Requests
              </p>
              <h2 className="font-semibold text-xl text-charcoal">
                Messages & Enquiries
              </h2>
            </div>
            <span className="text-sm text-gray-500">
              Showing {contactMessages.length} recent entries
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#EAE4DC] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Topic</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Message</th>
                  <th className="px-6 py-3">Received</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-gray-400"
                    >
                      No contact messages captured yet.
                    </td>
                  </tr>
                )}
                {contactMessages.map((message) => (
                  <tr
                    key={message.id ?? message._id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">
                        {message.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {message.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize">
                      {message.topic ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{message.phone ?? "—"}</div>
                      <div className="text-xs text-gray-500">
                        {message.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {message.message ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500">
                      {formatDate(message.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
