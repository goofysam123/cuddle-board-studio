import { createFileRoute, Link } from "@tanstack/react-router";
import { Maximize2 } from "lucide-react";
import registeredVehiclesIcon from "@/assets/registered-vehicles.png.asset.json";
import demeritIcon from "@/assets/demerit.png.asset.json";
import { BottomNav } from "@/components/bottom-nav";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Driver Dashboard — Licence, Vehicles & Demerit Points" },
      {
        name: "description",
        content:
          "Check your demerit point balance, registered vehicles, licence and payments in one simple driver dashboard.",
      },
      { property: "og:title", content: "Driver Dashboard — Licence & Vehicles" },
      {
        property: "og:description",
        content:
          "Check your demerit point balance, registered vehicles, licence and payments in one simple driver dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-14 pb-28">
        <h1 className="text-[38px] font-bold tracking-tight leading-tight">Hi Samier</h1>

        <div className="mt-10 space-y-7">
          <button className="w-full rounded-2xl border border-border/70 bg-card px-8 py-10 text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]">
            <img src={demeritIcon.url} alt="" className="h-auto w-9" />
            <p className="mt-6 text-[19px] font-semibold">Demerit point balance</p>
          </button>

          <button className="w-full rounded-2xl border border-border/70 bg-card px-8 py-10 text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]">
            <img src={registeredVehiclesIcon.url} alt="" className="h-auto w-[42px]" />
            <p className="mt-6 text-[19px] font-semibold">Registered vehicles</p>
          </button>
        </div>

        <div className="flex-1" />

        <button
          className="relative -mx-5 -mb-28 mt-10 w-[calc(100%+40px)] overflow-hidden rounded-t-2xl p-6 pb-24 text-left text-licence-foreground"
          style={{ backgroundImage: "var(--gradient-licence)" }}
        >
          <Maximize2 className="absolute right-6 top-6 h-5 w-5 opacity-90" strokeWidth={2.5} />
          <p className="text-2xl font-semibold">My licence</p>
          <p className="mt-1 text-lg font-medium opacity-85">Tap to view licence</p>
        </button>
      </main>


      <nav className="fixed inset-x-0 bottom-0 bg-card">
        <ul className="mx-auto flex max-w-md items-center justify-between px-3 pt-3 pb-6">
          {navItems.map(({ label, icon, active }) => (
            <li key={label} className="w-16">
              <button
                className={
                  active
                    ? "flex w-full flex-col items-center gap-2 text-primary"
                    : "flex w-full flex-col items-center gap-2 text-foreground/70"
                }
                aria-current={active ? "page" : undefined}
              >
                <img src={icon} alt="" className="h-5 w-auto" />
                <span className={active ? "text-sm font-semibold" : "text-sm"}>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
