import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import profileIcon from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Driver Dashboard" },
      { name: "description", content: "View and manage your driver profile." },
      { property: "og:title", content: "Profile — Driver Dashboard" },
      { property: "og:description", content: "View and manage your driver profile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-6 pb-28">
        <Link to="/" className="flex items-center gap-1 text-sm font-medium text-foreground/70">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="mt-6 text-[32px] font-bold tracking-tight">Profile</h1>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <img src={profileIcon.url} alt="" className="h-6 w-auto" />
          </div>
          <div>
            <p className="text-[19px] font-semibold">Samier</p>
            <p className="text-sm text-muted-foreground">samier@example.com</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {["Personal details", "Contact preferences", "Security", "Sign out"].map((item) => (
            <button
              key={item}
              className="w-full rounded-2xl border border-border/70 bg-card px-6 py-4 text-left text-[17px] font-medium shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]"
            >
              {item}
            </button>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
