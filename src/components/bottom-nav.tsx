import { Link } from "@tanstack/react-router";
import homeIcon from "@/assets/home.png.asset.json";
import vehiclesIcon from "@/assets/vehicles.png.asset.json";
import licenceIcon from "@/assets/licence.png.asset.json";
import paymentsIcon from "@/assets/payments.png.asset.json";
import profileIcon from "@/assets/profile.png.asset.json";

const navItems = [
  { label: "Home", icon: homeIcon.url, to: "/" },
  { label: "Vehicles", icon: vehiclesIcon.url, to: "/" },
  { label: "Licence", icon: licenceIcon.url, to: "/licence" },
  { label: "Payments", icon: paymentsIcon.url, to: "/" },
  { label: "Profile", icon: profileIcon.url, to: "/profile" },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-card">
      <ul className="mx-auto flex max-w-md items-center justify-between px-3 pt-3 pb-6">
        {navItems.map(({ label, icon, to }) => (
          <li key={label} className="w-16">
            <Link
              to={to}
              activeOptions={{ exact: true }}
              className="flex w-full flex-col items-center gap-2 text-foreground/70"
              activeProps={{ className: "flex w-full flex-col items-center gap-2 text-primary" }}
            >
              <img src={icon} alt="" className="h-5 w-auto" />
              <span className="text-sm">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
