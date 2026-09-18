import { branches } from "@/lib/site";
import { MapPinIcon } from "./icons";

export default function BranchStrip() {
  return (
    <section id="cabang" className="bg-brand-800 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:gap-6 sm:px-6">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
          <MapPinIcon className="h-4 w-4" />
          Cabang Kami
        </span>
        <span className="hidden h-5 w-px bg-white/25 sm:block" />
        <p className="text-sm font-medium text-white sm:text-base">
          {branches.map((branch, index) => (
            <span key={branch.city}>
              {index > 0 && <span className="mx-2 text-white/40">|</span>}
              <span className="font-bold">Cabang {branch.city}</span>
              <span className="ml-2 text-white/70">
                {branch.areas.join(", ")}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
