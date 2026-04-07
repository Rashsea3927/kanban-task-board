"use client";

import { useMounted } from "@/hooks/use-mounted";
import LogoDark from "@assets/logo-dark.svg";
import LogoLight from "@assets/logo-light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

export function SidebarLogo({ className }: { className?: string }) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const src = isDark ? LogoLight : LogoDark;

  return <Image src={src} width={153} height={26} alt="" priority className={className} />;
}
