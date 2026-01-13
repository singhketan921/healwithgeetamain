import { fetchContactMessages } from "@/lib/services/contactService";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return dateString ?? "";
  }
}

export default async function AdminMessagesPage() {
  const messages = await fetchContactMessages();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Messages</h1>
        <p className="text-sm text-[#7a736c]">
          Contact and enquiry messages submitted via the site.
        </p>
      </header>

      <section className="rounded-2xl border border-[#e7dfd6] bg-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <div className="px-6 py-4 border-b border-[#e7dfd6] flex items-center justify-between">
          <span className="text-sm text-[#7a736c]">
            Showing {messages.length} entries
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#6b625a]">
            <thead className="bg-[#f4efe9] text-xs uppercase tracking-[0.2em] text-[#9a938c]">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Topic</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Received</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-[#9a938c]"
                  >
                    No messages captured yet.
                  </td>
                </tr>
              )}
              {messages.map((message) => (
                <tr
                  key={message.id ?? message._id}
                  className="border-t border-[#e7dfd6]"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#6b625a]">
                      {message.name ?? "Unknown"}
                    </div>
                    <div className="text-xs text-[#9a938c]">
                      {message.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 capitalize">
                    {message.topic ?? "Other"}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div>{message.phone ?? "-"}</div>
                    <div className="text-xs text-[#9a938c]">
                      {message.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#7a736c]">
                    {message.message ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {formatDate(message.createdAt)}
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
