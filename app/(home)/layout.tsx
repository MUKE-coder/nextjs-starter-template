import type React from "react";

import FixedNavbar from "@/components/FixedNavbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <FixedNavbar />
      <div className="mt-12">{children}</div>
    </div>
  );
}
