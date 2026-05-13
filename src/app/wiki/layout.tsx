import type { ReactNode } from "react";
import { WikiSubNav } from "@/components/wiki/wiki-sub-nav";

export default function WikiLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <WikiSubNav />
      {children}
    </div>
  );
}
