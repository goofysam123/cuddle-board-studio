import { createFileRoute } from "@tanstack/react-router";
import { Car, CircleDollarSign, CreditCard, Maximize2, User } from "lucide-react";
import { DemeritIcon, HomeMarkIcon, VehiclesIcon } from "@/components/app-icons";


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

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Vehicles", icon: Car, active: false },
  { label: "Licence", icon: CreditCard, active: false },
  { label: "Payments", icon: CircleDollarSign, active: false },
  { label: "Profile", icon: User, active: false },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-10 pb-32">
        <h1 className="text-4xl font-bold tracking-tight">Hi Samier</h1>

        <div className="mt-8 space-y-4">
          <button className="w-full rounded-2xl bg-card p-6 text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]">
            <Gauge className="h-9 w-9 text-primary" strokeWidth={2} />
            <p className="mt-5 text-xl font-medium">Demerit point balance</p>
          </button>

          <button className="w-full rounded-2xl bg-card p-6 text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]">
            <Car className="h-9 w-9 text-primary" strokeWidth={2} />
            <p className="mt-5 text-xl font-medium">Registered vehicles</p>
          </button>
        </div>

        <div className="flex-1" />

        <button
          className="relative mt-10 w-full overflow-hidden rounded-2xl p-6 pb-12 text-left text-licence-foreground shadow-[var(--shadow-card)]"
          style={{ backgroundImage: "var(--gradient-licence)" }}
        >
          <Maximize2 className="absolute right-6 top-6 h-5 w-5 opacity-90" />
          <p className="text-2xl font-semibold">My licence</p>
          <p className="mt-1 text-base opacity-85">Tap to view licence</p>
        </button>
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-border bg-card">
        <ul className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          {navItems.map(({ label, icon: Icon, active }) => (
            <li key={label}>
              <button
                className={
                  active
                    ? "flex flex-col items-center gap-1.5 text-primary"
                    : "flex flex-col items-center gap-1.5 text-muted-foreground"
                }
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-6 w-6" strokeWidth={active ? 2.4 : 1.8} />
                <span className={active ? "text-xs font-semibold" : "text-xs"}>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
