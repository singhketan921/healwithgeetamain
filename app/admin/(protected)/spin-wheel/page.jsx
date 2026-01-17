import { upsertSpinWheelSettings } from "@/app/admin/actions";
import { fetchSpinWheelSettings } from "@/lib/services/spinWheelService";

export const runtime = "nodejs";

export default async function AdminSpinWheelPage() {
  const settings = await fetchSpinWheelSettings();
  const winProbability =
    typeof settings.winProbability === "number" ? settings.winProbability : 0.1;

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">
          Spin Wheel Settings
        </h1>
        <p className="text-sm text-[#7a736c]">
          Control win rate for the homepage spin wheel.
        </p>
      </header>

      <form
        action={upsertSpinWheelSettings}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/spin-wheel" />
        <input type="hidden" name="id" value="spinwheel" />
        <input type="hidden" name="title" value="Spin Wheel Settings" />
        <div className="grid gap-4">
          <label className="space-y-2 text-sm">
            <span>Win probability (0 to 1)</span>
            <input
              name="winProbability"
              type="number"
              min="0"
              max="1"
              step="0.01"
              defaultValue={winProbability}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              required
            />
            <p className="text-xs text-[#9a938c]">
              Example: 0.1 = 10% wins, 0.9 = 90% wins.
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-full bg-[#6b625a] px-6 py-2 text-sm font-semibold text-white"
        >
          Save settings
        </button>
      </form>
    </div>
  );
}
