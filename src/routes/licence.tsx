import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import licenceIcon from "@/assets/licence.png.asset.json";

export const Route = createFileRoute("/licence")({
  head: () => ({
    meta: [
      { title: "My Licence — Driver Dashboard" },
      { name: "description", content: "View your driver licence details." },
      { property: "og:title", content: "My Licence — Driver Dashboard" },
      { property: "og:description", content: "View your driver licence details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LicencePage,
});

function LicencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-6 pb-28">
        <Link to="/" className="flex items-center gap-1 text-sm font-medium text-foreground/70">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="mt-6 text-[32px] font-bold tracking-tight">My licence</h1>

        <div
          className="mt-8 rounded-2xl p-6 pb-8 text-licence-foreground shadow-[var(--shadow-card)]"
          style={{ backgroundImage: "var(--gradient-licence)" }}
        >
          <img src={licenceIcon.url} alt="" className="h-auto w-8 opacity-90" />
          <p className="mt-6 text-2xl font-semibold">Samier</p>
          <p className="mt-1 text-lg font-medium opacity-85">Driver licence</p>
          <div className="mt-8 space-y-1 text-sm opacity-85">
            <p>Licence number: 12345678</p>
            <p>Class: C</p>
            <p>Expiry: 02 Sep 2031</p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
