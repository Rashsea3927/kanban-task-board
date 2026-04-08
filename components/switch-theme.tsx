"use client";

import { useMounted } from "@/hooks/use-mounted";
import IconDarkTheme from "@assets/icon-dark-theme.svg";
import IconLightTheme from "@assets/icon-light-theme.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Switch } from "./ui/switch";

export function SwitchTheme() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const checked = mounted && resolvedTheme === "dark";

  return (
    <div className="pl-6">
      <div className="flex items-center justify-center gap-6 rounded-sm bg-gray-200 py-4 dark:bg-gray-800">
        <Image className="size-5" src={IconLightTheme} width={12} height={12} alt="" />
        <Switch checked={checked} onCheckedChange={(next) => setTheme(next ? "dark" : "light")} size="sm" className="h-5 w-10 cursor-pointer transition-all duration-400 hover:bg-purple-400" />
        <Image className="size-[15px]" src={IconDarkTheme} width={12} height={12} alt="" />
      </div>
    </div>
  );
}
